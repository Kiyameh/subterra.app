import Chip, {ChipProps} from '@mui/material/Chip'

interface ChipSlotProps extends ChipProps {
  value?: string | number | undefined | null
}
export default function ChipSlot({value, ...props}: ChipSlotProps) {
  return (
    <Chip
      sx={{
        placeSelf: 'center',
        marginX: '5px',
        minWidth: '50px',
      }}
      label={value || 'Sin datos'}
      {...props}
    />
  )
}
