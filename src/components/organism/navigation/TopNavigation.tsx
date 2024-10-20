'use client'
//* Dependencias:
import React from 'react'
//* Componentes:
import SubterraLogo from '@/components/atoms/branding/SubterraLogo'
//* Lógica:
import useCurrentSection from '@/hooks/useCurrentSection'
import LinkButton from '@/components/atoms/controls/LinkButton'

interface TopNavigationProps {
  sections: Array<{id: string; label: string}>
}

/** Navegación superior con icono y tranparente para versión desktop */
export default function TopNavigation({sections}: TopNavigationProps) {
  const currentSection = useCurrentSection(sections)

  return (
    <div
      style={{
        width: '100%',
        height: '60px',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: '20px',
        zIndex: 1000,
      }}
    >
      <SubterraLogo size="medium" />
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
        }}
      >
        {sections.map((section, i) => (
          <LinkButton
            color={currentSection === section.id ? 'secondary' : 'primary'}
            key={i}
            label={section.label}
            href={`#${section.id}`}
          />
        ))}
      </nav>
    </div>
  )
}
