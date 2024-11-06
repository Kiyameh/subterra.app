'use server'
//* Lógica:
import {connectToMongoDB} from '../databaseConection'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Answer from '@/tools/database/Answer'
//* Tipos:
import Group from '@/types/group.types'
import GroupModel from '@/models/Group.model'

export default async function createOneGroup(data: Group) {
  await connectToMongoDB()

  // TODO: Add autorization method
  // TODO: Add auxiliar functions

  try {
    const newGroup = new GroupModel(data)
    const createdGroup = await newGroup.save()
    return new Answer(200, 'Grupo creado', createdGroup)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
