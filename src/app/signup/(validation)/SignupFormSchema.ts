import {z} from 'zod'

const SignupFormSchema = z.object({
  name: z.string().min(3, {message: 'Nombre de usuario demasiado corto'}),
  email: z.string().email({message: 'Email incorrecto'}),
  password: z
    .string()
    .min(8, {message: 'La contraseña debe tener al menos 8 caracteres'})
    .regex(/[a-z]/, {
      message: 'La contraseña debe tener al menos una letra minúscula',
    })
    .regex(/[A-Z]/, {
      message: 'La contraseña debe tener al menos una letra mayúscula',
    }),
  fullname: z.string().max(40, {message: 'Nombre demasiado largo'}),
})

export default SignupFormSchema
