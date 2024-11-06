'use client'
import {useFormStatus} from 'react-dom'
import LoadingButton from '@mui/lab/LoadingButton'

export default function SubmitButton() {
  const status = useFormStatus()
  return (
    <LoadingButton
      type="submit"
      loading={status.pending}
      variant="contained"
    >
      Enviar datos
    </LoadingButton>
  )
}
