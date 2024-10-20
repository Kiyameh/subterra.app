//* Dependencias:
import React from 'react'
import Box from '@mui/material/Box'

//* Componentes:
import AboutSection from './AboutSection'
import WelcomeSection from './WelcomeSection'
import InstancesSection from './InstancesSection'
import HowToStartSection from './HowToStartSection'
import FooterContent from './FooterContent'

import TopNavigation from '@/components/organism/navigation/TopNavigation'
import SideNavigation from '@/components/organism/navigation/SideNavigation'

//* Constantes:
const sections = [
  {label: 'Inicio', id: 'welcome-section'},
  {label: '¿Qué es?', id: 'about-section'},
  {label: 'Empezar', id: 'start-section'},
  {label: 'Instancias', id: 'instances-section'},
]

export default function LandingPage() {
  return (
    <>
      <Box display={{xs: 'none', md: 'block'}}>
        <TopNavigation sections={sections} />
      </Box>
      <Box display={{xs: 'block', md: 'none'}}>
        <SideNavigation sections={sections} />
      </Box>
      <main>
        <WelcomeSection />
        <AboutSection />
        <HowToStartSection />
        <InstancesSection />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  )
}
