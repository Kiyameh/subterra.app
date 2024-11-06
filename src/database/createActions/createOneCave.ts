'use server'
//* Lógica:
import {connectToMongoDB} from '../databaseConection'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Answer from '@/tools/database/Answer'
//* Tipos:
import Cave from '@/types/cave.types'
import CaveModel from '@/models/Cave.model'

export default async function createOneCave(data: Cave) {
  await connectToMongoDB()

  // TODO: Add autorization method
  // TODO: Add auxiliar functions

  try {
    const newCave = new CaveModel(data)
    const createdCave = await newCave.save()
    return new Answer(200, 'Cueva creada', createdCave)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
