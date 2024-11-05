'use server'
//* Lógica:
import {connectToMongoDB} from '../databaseConection'
import interpretDatabaseError from '@/tools/database/interpretDatabaseError'
import Answer from '@/tools/database/Answer'
//* Tipos:
import Exploration from '@/types/exploration.types'
import ExplorationModel from '@/models/Exploration.model'

export default async function createOneExploration(data: Exploration) {
  await connectToMongoDB()

  // TODO: Add autorization method
  // TODO: Add auxiliar functions

  try {
    const newExploration = new ExplorationModel(data)
    const createdExploration = await newExploration.save()
    return new Answer(200, 'Exploración registrada', createdExploration)
  } catch (error) {
    console.error(error)
    return interpretDatabaseError(error)
  }
}
