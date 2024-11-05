import {Typography, TypographyProps} from '@mui/material'

interface MultiTextSlotProps extends TypographyProps {
  value?: Array<string> | Array<number> | undefined | null
}

export default function MultiTextSlot({value, ...props}: MultiTextSlotProps) {
  const innerText = value?.join(', ')

  return (
    <Typography
      sx={{
        placeSelf: 'center',
      }}
      {...props}
      variant={value ? props.variant : 'body2'}
    >
      {value ? innerText : 'Sin datos'}
    </Typography>
  )
}
