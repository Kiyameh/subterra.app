'use server'
//* Lógica:
import {connectToMongoDB} from '@/database/databaseConection'
import GroupModel from '@/models/Group.model'
import Answer from '@/tools/database/Answer'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'

export default async function getGroupById(id: string) {
  await connectToMongoDB()
  // TODO: Add auxiliar functions

  try {
    const groupDocument = await GroupModel.findById(id).exec()
    return new Answer(200, 'Éxito', groupDocument)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
