'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import SystemModel from '@/models/System.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Instance from '@/types/instance.types'
//* Tipos:

export default async function getIndexOfSytems(instance: Partial<Instance>) {
  await connectToMongoDB()
  try {
    const allSystems = await SystemModel.find({instance}).exec()
    const allRefs = allSystems.map((system) => {
      return system.getReference()
    })

    return new Answer(200, 'Referencias obtenidas', allRefs)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
