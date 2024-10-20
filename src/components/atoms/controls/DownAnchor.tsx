//* Dependencias:
import Link, {LinkProps} from 'next/link'
import IconButton from '@mui/material/IconButton'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

interface DownArrowProps extends LinkProps {
  /** Tamaño  del icono */
  size?: string
}
/** Control para descender a diferentes secciones de la página */
export default function DownAnchor({
  href,
  size = '45px',
  ...props
}: DownArrowProps) {
  return (
    <Link
      {...props}
      href={href}
    >
      <IconButton>
        <ExpandCircleDownIcon sx={{fontSize: size}} />
      </IconButton>
    </Link>
  )
}
