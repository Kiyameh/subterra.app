'use server'
import UserModel from '@/models/User.model'
import SignupFormSchema from '@/app/signup/(validation)/SignupFormSchema'
import bcrypt from 'bcrypt'
import {connectToMongoDB} from '@/database/databaseConection'

export async function signup(prevState: object, formData: FormData) {
  //1. Validar
  const validationResult = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    fullname: formData.get('fullname'),
  })

  //? safeParse devuelve un objeto con la propiedad success que indica si la validación fue exitosa,
  //? y la propiedad data con los datos validados o en su defecto la propiedad error con los errores

  if (!validationResult.success) {
    const errors: {[key: string]: string} = {}
    validationResult.error.errors.forEach((err) => {
      errors[err.path[0]] = err.message
    })

    return {
      status: 400,
      message: 'Error en los datos',
      errors: errors,
    }
  }

  const {name, email, password, fullname} = validationResult.data

  //2. Crear usuario
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new UserModel({
      name,
      generalData: {
        email,
        password: hashedPassword,
        fullname,
      },
    })
    await connectToMongoDB()
    const createdUser = await newUser.save()
    console.log(createdUser) // TODO: remove

    return {status: 200, message: 'Usuario creado con éxito', errors: {}}
  } catch (error) {
    return {status: 400, message: 'Error al crear usuario', errors: {}}
  }

  //3. Crear sesión
  //TODO: Crear sesión, redireccionar y lanzar tooltip
}
