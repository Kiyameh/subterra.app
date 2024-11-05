import Typography from '@mui/material/Typography'
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import AnchorRoundedIcon from '@mui/icons-material/AnchorRounded'
import LinkWrapper from '../wrappers/LinkWrapper'

interface LinkSlotProps {
  value?: string | undefined | null
  label?: string
  type?: 'email' | 'url' | 'internal'
}

export default function LinkSlot({value, label, type = 'url'}: LinkSlotProps) {
  function getIcon() {
    if (type === 'email' && value)
      return (
        <ForwardToInboxRoundedIcon
          color="secondary"
          fontSize="small"
        />
      )
    if (type === 'url' && value)
      return (
        <OpenInNewRoundedIcon
          color="secondary"
          fontSize="small"
        />
      )
    if (type === 'internal' && value)
      return (
        <AnchorRoundedIcon
          color="secondary"
          fontSize="small"
        />
      )
    return null
  }

  function getHref() {
    if (type === 'email' && value) return `mailto:${value}`
    if (type === 'url' && value) return value
    if (type === 'internal' && value) return value
    return ''
  }

  const content = (
    <div
      style={{
        placeSelf: 'center',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        border: '1px solid darkgray',
        borderRadius: '10px',
        paddingInline: '15px',
        marginInline: '5px',

        height: '30px',
      }}
    >
      <Typography variant={value ? 'body1' : 'body2'}>
        {label || value || 'Sin datos'}
      </Typography>
      {getIcon()}
    </div>
  )

  return value ? <LinkWrapper href={getHref()}>{content}</LinkWrapper> : content
}
