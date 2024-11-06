'use server'
import {connectToMongoDB} from '@/database/databaseConection'
import SystemModel from '@/models/System.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Instance from '@/types/instance.types'

export default async function getAllSystems(instance: Partial<Instance>) {
  await connectToMongoDB()

  // TODO: Add auxiliar functions

  try {
    const allSystems = await SystemModel.find({instance}).exec()
    const allSystemsJSON = allSystems.map((system) => {
      return system.toJSON()
    })
    return new Answer(200, 'Sistemas obtenidos', allSystemsJSON)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
