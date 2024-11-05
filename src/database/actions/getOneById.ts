'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import CaveModel from '@/models/Cave.model'
import ExplorationModel from '@/models/Exploration.model'
import SystemModel from '@/models/System.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
//* Tipos:
import Instance from '@/types/instance.types'

export default async function getOneById(
  instance: Partial<Instance>,
  _id: string
) {
  await connectToMongoDB()
  try {
    const systemDocument = await SystemModel.findOne({
      _id,
      instance,
    }).exec()
    if (systemDocument)
      return new Answer(200, 'Éxito', systemDocument.toJSON({minimize: false}))

    const explorationDocument = await ExplorationModel.findOne({
      _id,
      instance,
    }).exec()
    if (explorationDocument)
      return new Answer(
        200,
        'Éxito',
        explorationDocument.toJSON({minimize: false})
      )

    const caveDocument = await CaveModel.findOne({
      _id,
      instance,
    }).exec()
    if (caveDocument)
      return new Answer(200, 'Éxito', caveDocument.toJSON({minimize: false}))

    return null
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
