'use server'
import {connectToMongoDB} from '@/database/databaseConection'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import ExplorationModel from '@/models/Exploration.model'
import Instance from '@/types/instance.types'

export default async function getAllExplorations(instance: Partial<Instance>) {
  await connectToMongoDB()

  // TODO: Add auxiliar functions

  try {
    const allExplorations = await ExplorationModel.find({
      instance,
    }).exec()
    const allExplorationsJSON = allExplorations.map((exploration) => {
      return exploration.toJSON()
    })
    return new Answer(200, 'Exploraciones obtenidas', allExplorationsJSON)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
