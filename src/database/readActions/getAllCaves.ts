'use server'
import {connectToMongoDB} from '@/database/databaseConection'
import CaveModel from '@/models/Cave.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Instance from '@/types/instance.types'

export default async function getAllCaves(instance: Partial<Instance>) {
  await connectToMongoDB()

  // TODO: Add auxiliar functions

  try {
    const allCaves = await CaveModel.find({instance}).exec()
    const allCavesJson = allCaves.map((cave) => {
      return cave.toJSON()
    })

    return new Answer(200, 'Cuevas obtenidas', allCavesJson)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
