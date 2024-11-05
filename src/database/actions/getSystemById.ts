'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import SystemModel from '@/models/System.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Instance from '@/types/instance.types'
//* Tipos:

export default async function getOneById(
  instance: Partial<Instance>,
  _id: string
) {
  try {
    await connectToMongoDB()
    const systemDocument = await SystemModel.findOne({
      instance,
      _id,
    })
      //* Poblar referencia a sistema:
      .populate({
        path: 'generalData.caves',
        select: 'name _id',
      })
      .exec()
    if (systemDocument)
      return new Answer(200, 'Éxito', systemDocument.toJSON({minimize: false}))

    return null
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
