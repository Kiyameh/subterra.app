'use server'
//* Lógica:
import {connectToMongoDB} from '../databaseConection'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Answer from '@/tools/database/Answer'
//* Tipos:
import InstanceModel from '@/models/Instance.model'
import Instance from '@/types/instance.types'

export default async function createOneInstance(data: Instance) {
  await connectToMongoDB()

  // TODO: Add autorization method

  try {
    const newInstance = new InstanceModel(data)
    const createdInstance = await newInstance.save()
    return new Answer(200, 'Instancia creada', createdInstance)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
