'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import ExplorationModel from '@/models/Exploration.model'
import GroupModel from '@/models/Group.model'
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
    const explorationDocument = await ExplorationModel.findOne({
      instance,
      _id,
    })
      //* Poblar referencia a sistema:
      .populate({
        path: 'generalData.caves',
        select: 'name _id',
      })
      //* Poblar referencias a exploraciones:
      .populate({
        model: GroupModel,
        path: 'generalData.groups',
        select: 'name _id',
      })
      .exec()
    if (explorationDocument)
      return new Answer(
        200,
        'Éxito',
        explorationDocument.toJSON({minimize: false})
      )

    return null
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
