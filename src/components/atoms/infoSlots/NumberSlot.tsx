import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

interface NumberSlotProps {
  value?: number | undefined | null
  label?: string
  units?: string
}
export default function NumberSlot({value, label, units}: NumberSlotProps) {
  return (
    <div
      style={{
        placeSelf: 'center',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        border: '1px solid darkgrey',
        borderRadius: '10px',
        paddingInline: '15px',
        marginInline: '5px',
        height: '30px',
      }}
    >
      {label && (
        <>
          <Typography variant="subtitle2">{`${label}: `}</Typography>
          <Divider
            orientation="vertical"
            flexItem
          />
        </>
      )}

      {value ? (
        <Typography>{value.toString()}</Typography>
      ) : (
        <Typography variant="body2">Sin datos</Typography>
      )}
      {value && units && (
        <Typography
          variant="caption"
          color="darkgrey"
        >
          {units}
        </Typography>
      )}
    </div>
  )
}
