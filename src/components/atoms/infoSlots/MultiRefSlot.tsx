import Stack, {StackProps} from '@mui/material/Stack'
import {ChipProps} from '@mui/material/Chip'
import RefSlot from './RefSlot'
import TextSlot from './TextSlot'

interface MultiChipSlotProps {
  value?: {_id: string; name?: string}[]
  chipProps?: ChipProps
  stackProps?: StackProps
}

export default function MultiRefSlot({
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
        value.map((ref, index) => (
          <RefSlot
            sx={{marginX: '0px'}}
            key={index}
            value={ref}
            {...chipProps}
          />
        ))
      ) : (
        <TextSlot variant="body2">Sin datos</TextSlot>
      )}
    </Stack>
  )
}
