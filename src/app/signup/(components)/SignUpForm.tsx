import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {useActionState} from 'react'

import {signup} from '@/app/signup/(actions)/signup'
import BackButton from './BackButton'
import SubmitButton from './SubmitButton'

export default function SignUpForm() {
  const [state, formAction] = useActionState(signup, {
    status: 0,
    message: '',
    errors: {},
  })

  return (
    <form action={formAction}>
      <Stack>
        <Typography variant="h5">Crear nuevo usuario</Typography>
        <TextField
          name="name"
          placeholder="Arcaute"
          label="Nombre de usuario"
          margin="normal"
          error={state.errors?.name ? true : false}
          helperText={state.errors?.name}
        />
        <TextField
          name="fullname"
          placeholder="Felix Ruiz de Arcaute"
          label="Nombre completo"
          margin="normal"
          error={state.errors?.fullname ? true : false}
          helperText={state.errors?.fullname}
        />
        <TextField
          name="email"
          type="email"
          placeholder="felix@mail.com"
          label="Correo electrónico"
          margin="normal"
          error={state.errors?.email ? true : false}
          helperText={state.errors?.email}
        />
        <TextField
          name="password"
          type="password"
          placeholder="*****"
          label="Contraseña"
          margin="normal"
          error={state.errors?.password ? true : false}
          helperText={state.errors?.password}
        />
        <Stack
          direction="row"
          marginTop="60px"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <BackButton />
          <SubmitButton />
        </Stack>
      </Stack>
    </form>
  )
}
