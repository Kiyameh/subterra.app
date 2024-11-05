import Answer from './Answer'

export default function interpretDatabaseError(error: any) {
  if (error.code === 11000) {
    return new Answer(409, 'Este nombre ya esta registrado', null)
  }
  if (error.name === 'ValidationError') {
    return new Answer(400, 'Datos incorrectos', null)
  }
  //TODO: Añadir interpretación de no autorizado (401)

  return new Answer(500, 'Error desconocido', null)
}
