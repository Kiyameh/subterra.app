'use client'
import {useParams} from 'next/navigation'
import AnchorIcon from '@mui/icons-material/Anchor'
import Chip, {ChipProps} from '@mui/material/Chip'
import LinkWrapper from '../wrappers/LinkWrapper'
import TextSlot from './TextSlot'

interface ReferenceChipProps extends ChipProps {
  value?: {_id: string; name?: string}
}

export default function RefSlot({value, ...props}: ReferenceChipProps) {
  const params = useParams<{instance: string}>()
  const href = `/dashboard/${params.instance}/detail/${value?._id.toString()}`

  return value ? (
    <LinkWrapper href={href}>
      <Chip
        sx={{marginX: '5px', minWidth: '50px'}}
        label={value.name || value._id.toString()}
        color="primary"
        clickable
        onDelete={() => {}}
        deleteIcon={<AnchorIcon />}
        {...props}
      />
    </LinkWrapper>
  ) : (
    <TextSlot variant="body2">Sin datos</TextSlot>
  )
}
