//* Dependencias
import Stack from '@mui/material/Stack'
import Typography, {TypographyProps} from '@mui/material/Typography'

interface TextSlotProps extends TypographyProps {
  value?: number | string | undefined | null
  icon?: React.ReactNode
}

/** Slot básico de texto con icono opcional */
export default function TextSlot({value, icon, ...props}: TextSlotProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
    >
      {icon}
      <Typography
        {...props}
        variant={value ? 'body1' : 'body2'}
      >
        {value ? value : 'Sin datos'}
      </Typography>
    </Stack>
  )
}
