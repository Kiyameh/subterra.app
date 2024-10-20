import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Card, {CardProps} from '@mui/material/Card'

interface InfoCardProps extends CardProps {
  title: string
  text: string
  icon?: React.ReactNode
  cardMedia?: React.ReactNode
  cardActions?: React.ReactNode
  sx?: object
}
/** Card completa de Mui */
export default function InfoCard({
  title,
  text,
  icon,
  cardMedia,
  cardActions,
  sx = {},
  ...props
}: InfoCardProps) {
  return (
    <Card
      {...props}
      sx={{
        ...sx,
        borderRadius: '15px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        maxWidth: '540px',
      }}
    >
      {cardMedia && <CardMedia>{cardMedia}</CardMedia>}
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          marginBottom="10px"
        >
          {icon}
          <Typography variant="h5">{title}</Typography>
        </Stack>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {text}
        </Typography>
      </CardContent>
      {cardActions && <CardActions>{cardActions}</CardActions>}
    </Card>
  )
}
