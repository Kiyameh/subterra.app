'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useTheme} from '@mui/material/styles'
import logoSmallLight from '@/assets/logos/logo_small_light.svg'
import logoMediumLight from '@/assets/logos/logo_medium_light.svg'
import logoBigLight from '@/assets/logos/logo_big_light.svg'
import logoSmallDark from '@/assets/logos/logo_small_dark.svg'
import logoMediumDark from '@/assets/logos/logo_medium_dark.svg'
import logoBigDark from '@/assets/logos/logo_big_dark.svg'

interface LogoProps {
  size?: 'small' | 'medium' | 'big'
  customWidth?: number
  href?: string
}

/** Contenedor con el logo principal de Subterra */
export default function SubterraLogo({
  size = 'small',
  customWidth,
  href,
}: LogoProps) {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  const getLogoSrc = () => {
    if (!isDarkMode) {
      switch (size) {
        case 'small':
          return logoSmallLight
        case 'medium':
          return logoMediumLight
        case 'big':
          return logoBigLight
        default:
          return logoMediumLight
      }
    } else {
      switch (size) {
        case 'small':
          return logoSmallDark
        case 'medium':
          return logoMediumDark
        case 'big':
          return logoBigDark
        default:
          return logoMediumDark
      }
    }
  }
  const logo = (
    <Image
      src={getLogoSrc()}
      alt="Subterra Logo"
      width={
        customWidth
          ? customWidth
          : size === 'small'
          ? 50
          : size === 'medium'
          ? 140
          : 220
      }
    />
  )
  return href ? <Link href={href}>{logo}</Link> : logo
}
