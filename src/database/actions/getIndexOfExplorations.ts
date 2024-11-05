'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import ExplorationModel from '@/models/Exploration.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Instance from '@/types/instance.types'
//* Tipos:

export default async function getIndexOfExplorations(
  instance: Partial<Instance>
) {
  await connectToMongoDB()
  try {
    const allExplorations = await ExplorationModel.find({
      instance,
    }).exec()
    const allRefs = allExplorations.map((exploration) => {
      return exploration.getReference()
    })

    return new Answer(200, 'Referencias obtenidas', allRefs)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
