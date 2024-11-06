import Button from '@mui/material/Button'
import {useRouter} from 'next/navigation'

export default function BackButton() {
  const navigate = useRouter()
  return <Button onClick={() => navigate.back()}>Volver</Button>
}
