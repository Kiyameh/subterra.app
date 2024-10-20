//* Dependencias:
import Group from '@mui/icons-material/Group'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TravelExplore from '@mui/icons-material/TravelExplore'
import StorageRounded from '@mui/icons-material/StorageRounded'

//* Cpomponentes:
import LinkButton from '@/components/atoms/controls/LinkButton'
import TextSlot from '@/components/atoms/infoSlots/TextSlot'
//* Tipos:
import {DatabaseInstance} from '@/types/general.types'

export default function InstanceCard({instance}: {instance: DatabaseInstance}) {
  return (
    <Card sx={{margin: '5px', width: '380px'}}>
      <CardContent>
        <Typography
          variant="h6"
          color="primary"
        >
          {instance.name}
        </Typography>
        <p>{instance.info}</p>
        <Stack spacing={1.5}>
          <TextSlot
            icon={<TravelExplore />}
            value={instance.territory}
          />
          <TextSlot
            icon={<Group />}
            value={instance.groupName}
          />
          <TextSlot
            icon={<StorageRounded />}
            value={instance.size}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <LinkButton
          variant="outlined"
          label="Acceder"
          href={instance.link}
        />
      </CardActions>
    </Card>
  )
}
