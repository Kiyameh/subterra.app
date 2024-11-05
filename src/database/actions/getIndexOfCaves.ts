'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import CaveModel from '@/models/Cave.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
//* Tipos:
import Instance from '@/types/instance.types'

export default async function getIndexOfCaves(instance: Partial<Instance>) {
  await connectToMongoDB()

  try {
    const allCaves = await CaveModel.find({instance}).exec()
    const allRefs = allCaves.map((cave) => {
      return cave.getReference()
    })

    return new Answer(200, 'Referencias obtenidas', allRefs)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
