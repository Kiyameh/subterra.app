import Chip, {ChipOwnProps, ChipProps} from '@mui/material/Chip'

interface BooleanSlotProps extends ChipProps {
  value?: boolean | undefined | null
  invertedColor?: boolean
}
export default function BooleanSlot({
  value,
  invertedColor,
  ...props
}: BooleanSlotProps) {
  //*  Variables:
  const trueColor = invertedColor ? 'warning' : 'success'
  const falseColor = invertedColor ? 'success' : 'warning'
  const undefinedColor = 'default'

  function setColor(value: boolean | undefined | null): ChipOwnProps['color'] {
    if (value === undefined || value === null) return undefinedColor
    if (value === true) return trueColor
    if (value === false) return falseColor
  }
  function setLabel(value: boolean | undefined | null) {
    if (value === undefined || value === null) return 'Sin datos'
    if (value === true) return 'SI'
    if (value === false) return 'NO'
  }
  return (
    <Chip
      color={setColor(value)}
      sx={{
        placeSelf: 'center',
        marginX: '5px',
        minWidth: '50px',
      }}
      label={setLabel(value)}
      {...props}
    />
  )
}
