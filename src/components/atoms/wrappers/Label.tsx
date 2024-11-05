import Divider from '@mui/material/Divider'
import Stack, {StackProps} from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface LabelProps extends StackProps {
  name: string
  children?: React.ReactNode
}

export default function Label({name, children, ...props}: LabelProps) {
  return (
    <Stack
      sx={{width: '100%'}}
      {...props}
    >
      <div style={{height: '22px'}}>
        <Typography variant="body2">{name}</Typography>
      </div>
      <Divider />
      <div
        style={{
          height: 'calc(100% - 22px)',
          display: 'flex',
          alignItems: 'center',
          padding: '5px 10px',
        }}
      >
        {children}
      </div>
    </Stack>
  )
}
