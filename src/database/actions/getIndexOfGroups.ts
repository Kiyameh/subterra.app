'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import GroupModel from '@/models/Group.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'

export default async function getIndexOfGroups() {
  await connectToMongoDB()
  try {
    const allGroups = await GroupModel.find().exec()
    const allRefs = allGroups.map((group) => {
      return group.getReference()
    })

    return new Answer(200, 'Referencias obtenidas', allRefs)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
