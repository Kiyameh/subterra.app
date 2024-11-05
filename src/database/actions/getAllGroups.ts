'use server'
import {connectToMongoDB} from '@/database/databaseConection'
import GroupModel from '@/models/Group.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'

export default async function getAllGroups() {
  await connectToMongoDB()

  // TODO: Add auxiliar functions

  try {
    const allGroups = await GroupModel.find().exec()
    const allGroupsJSON = allGroups.map((group) => {
      return group.toJSON()
    })
    return new Answer(200, 'Grupos obtenidos', allGroupsJSON)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
