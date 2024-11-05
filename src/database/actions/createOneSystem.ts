'use server'
//* Lógica:
import {connectToMongoDB} from '../databaseConection'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Answer from '@/tools/database/Answer'
//* Tipos:
import System from '@/types/system.types'
import SystemModel from '@/models/System.model'

export default async function createOneSystem(data: System) {
  await connectToMongoDB()

  // TODO: Add autorization method
  // TODO: Add auxiliar functions

  try {
    const newSystem = new SystemModel(data)
    const createdSystem = await newSystem.save()
    return new Answer(200, 'Nuevo sistema creado', createdSystem)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
