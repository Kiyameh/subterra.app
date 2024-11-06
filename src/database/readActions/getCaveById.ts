'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import CaveModel from '@/models/Cave.model'
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
    const caveDocument = await CaveModel.findOne({instance, _id})
      //* Poblar referencia a sistema:
      .populate({
        path: 'generalData.system',
        select: 'name _id',
      })
      //* Poblar referencias a exploraciones:
      .populate({
        path: 'explorationData.explorations',
        select: 'name _id',
      })
      .exec()
    if (caveDocument)
      return new Answer(200, 'Éxito', caveDocument.toJSON({minimize: false}))

    return null
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
