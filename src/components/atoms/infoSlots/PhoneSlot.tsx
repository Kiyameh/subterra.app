import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import PhoneForwardedRoundedIcon from '@mui/icons-material/PhoneForwardedRounded'
import {Phone} from '@/types/general.types'
import LinkWrapper from '../wrappers/LinkWrapper'

interface PhoneSlotProps {
  value?: Phone | undefined | null
  callOnTouch?: boolean
}

export default function PhoneSlot({
  value,
  callOnTouch = false,
}: PhoneSlotProps) {
  function formatPhoneNumber(phoneNumber: number): string {
    return phoneNumber.toString().replace(/(\d{3})(?=\d)/g, '$1 ')
  }

  function getPhoneLink(value: Phone) {
    return value ? `tel:+${value.prefix}${value.phone_number}` : '#'
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
      {value && (
        <>
          <Typography variant="subtitle2">{`+${value.prefix}`}</Typography>
          <Divider
            orientation="vertical"
            flexItem
          />
        </>
      )}
      <Typography variant={value ? 'body1' : 'body2'}>
        {value ? formatPhoneNumber(value.phone_number) : 'Sin datos'}
      </Typography>
      {callOnTouch && (
        <PhoneForwardedRoundedIcon
          color="secondary"
          fontSize="small"
        />
      )}
    </div>
  )

  return callOnTouch && value ? (
    <LinkWrapper href={getPhoneLink(value)}>{content}</LinkWrapper>
  ) : (
    content
  )
}
