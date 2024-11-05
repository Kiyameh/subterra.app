import Chip, {ChipProps} from '@mui/material/Chip'
import Stack, {StackProps} from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface MultiChipSlotProps {
  value?:
    | readonly string[]
    | string[]
    | readonly number[]
    | number[]
    | undefined
    | null
  chipProps?: ChipProps
  stackProps?: StackProps
}

export default function MultiChipSlot({
  value,
  chipProps,
  stackProps,
}: MultiChipSlotProps) {
  return (
    <Stack
      sx={{placeSelf: 'center'}}
      direction={'row'}
      spacing="5px"
      {...stackProps}
    >
      {value ? (
        value.map((chip, index) => (
          <Chip
            key={index}
            label={chip.toString()}
            {...chipProps}
          />
        ))
      ) : (
        <Typography variant="body2">Sin datos</Typography>
      )}
    </Stack>
  )
}
