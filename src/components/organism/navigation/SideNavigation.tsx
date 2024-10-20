'use client'
//* Dependencias:
import React from 'react'
import Link from 'next/link'
import {Radio} from '@mui/material'
//* Lógica:
import useCurrentSection from '@/hooks/useCurrentSection'
import useScrollingVisibility from '@/hooks/useScrollingVisibility'

interface SideNavigationProps {
  sections: Array<{id: string; label: string}>
}
/** Navegación lateral de circulos para versión móvil */
export default function SideNavigation({sections}: SideNavigationProps) {
  const currentSection = useCurrentSection(sections)
  const isVisible = useScrollingVisibility(1000)
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        gap: '10px',
        padding: '10px',
        zIndex: 1000,
        //* Animación junto con el uso de useScrollingVisibility:
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {sections.map((section, i) => (
        <SideNavItem
          key={i}
          section={section}
          currentSection={currentSection}
        />
      ))}
    </div>
  )
}

interface SideNavItemProps {
  section: {id: string; label: string}
  currentSection: string
}

function SideNavItem({section, currentSection}: SideNavItemProps) {
  return (
    <Link
      href={`#${section.id}`}
      passHref
      style={{
        color: 'white',
      }}
    >
      {currentSection === section.id && section.label}
      <Radio
        checked={currentSection === section.id}
        color="secondary"
      />
    </Link>
  )
}
