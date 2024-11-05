import Answer from './Answer'
import {MongoError} from 'mongodb'
import {Error as MongooseError} from 'mongoose'
type DatabaseError = MongoError | MongooseError

export default function interpretDatabaseError(error: unknown) {
  if (
    'code' in (error as DatabaseError) &&
    (error as MongoError).code === 11000
  ) {
    return new Answer(409, 'Este nombre ya esta registrado', null)
  }
  if ((error as DatabaseError).name === 'ValidationError') {
    return new Answer(400, 'Datos incorrectos', null)
  }
  //TODO: Añadir interpretación de no autorizado (401)

  return new Answer(500, 'Error desconocido', null)
}
