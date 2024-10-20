//* Componentes:
import SubterraLogo from '@/components/atoms/branding/SubterraLogo'
import DownAnchor from '@/components/atoms/controls/DownAnchor'
import GlassBox from '@/components/molecules/boxes/GlassBox'
//* Estilos
import '@/styles/landing.css'

export default function WelcomeSection() {
  return (
    <section
      id="welcome-section"
      className="landing-section landing-image"
      style={{
        backgroundImage: `url(/stock/h1.jpg)`,
      }}
    >
      <SubterraLogo
        size="big"
        customWidth={300}
      />
      <GlassBox>
        <p
          style={{
            fontSize: '1.7rem',
            textAlign: 'center',
          }}
        >
          Base de datos para almacenamiento de datos espeleológicos y de
          exploración.
        </p>
      </GlassBox>
      <nav>
        <DownAnchor href="#about-section" />
      </nav>
    </section>
  )
}
