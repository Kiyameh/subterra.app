//* Dependencias:
import Group from '@mui/icons-material/Group'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TravelExplore from '@mui/icons-material/TravelExplore'

//* Cpomponentes:
import Instance from '@/types/instance.types'
import LinkButton from '@/components/atoms/controls/LinkButton'
import TextSlot from '@/components/atoms/infoSlots/TextSlot'
import {Divider} from '@mui/material'

export default function InstanceCard({instance}: {instance: Instance}) {
  return (
    <Card sx={{margin: '5px', width: '420px'}}>
      <CardContent>
        <Typography
          variant="h6"
          color="primary"
        >
          {instance.generalData.fullname}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
        >
          {instance.generalData.acronym}
        </Typography>
        <Typography variant="body2">
          {instance.generalData.description}
        </Typography>
        <Divider sx={{margin: '15px 0'}} />
        <Stack spacing={1.5}>
          <TextSlot
            icon={<TravelExplore />}
            value={instance.generalData.territory}
          />
          <TextSlot
            icon={<Group />}
            value={instance.generalData.owner}
          />
          <Stack
            direction="row"
            spacing={1}
          >
            <Typography>Visibilidad:</Typography>
            <Typography color="info">
              {instance.generalData.public_visibility
                ? 'Pública'
                : 'Solo autorizados'}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
          >
            <Typography>Edición:</Typography>
            <Typography color="info">
              {instance.generalData.public_edition
                ? 'Pública'
                : 'Solo autorizados'}
            </Typography>
          </Stack>
          <Divider sx={{margin: '15px 0'}} />
        </Stack>
      </CardContent>
      <CardActions>
        <LinkButton
          variant="outlined"
          label="Acceder"
          href={`dashboard/${instance.generalData.link}`}
        />
      </CardActions>
    </Card>
  )
}
