//* Dependencias:
import Stack from '@mui/material/Stack'
import InfoIcon from '@mui/icons-material/Info'
import MapIcon from '@mui/icons-material/Map'
import StorageIcon from '@mui/icons-material/Storage'
//* Componentes:
import InfoCard from '@/components/molecules/cards/InfoCard'
import DownAnchor from '@/components/atoms/controls/DownAnchor'
//* Estilos
import '@/styles/landing.css'

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="landing-section"
      style={{
        backgroundImage: `url(/backgrounds/topography.svg)`,
      }}
    >
      <Stack direction={{sx: 'column', md: 'row'}}>
        <InfoCard
          icon={<InfoIcon />}
          title="¿Qué es Subterra?"
          text="Subterra es una base de datos en la nube para la documentación de
        cavidades subterráneas. Permite a los espeleólogos almacenar, compartir
        y consultar información sobre cavidades, complejos karsticos y otros
        elementos relacionados con la exploración subterránea."
        />
        <InfoCard
          icon={<MapIcon />}
          title="Instancias"
          text="Subtera funciona mediante instancias. Cada instancia es una base de datos de un territorio concreto, mantenida por un grupo de espeleólogos. Las instancias pueden ser públicas o privadas, y pueden ser consultadas por cualquier usuario de Subterra."
        />
        <InfoCard
          icon={<StorageIcon />}
          title="Datos"
          text="En subterra se almacenan datos de cavidades, de complejos karsticos, de grupos espeleologicos y de exploraciones. Todos esos datos se relacionan entre sí, permitiendo una trazabilidad completa de cada exploración."
        />
      </Stack>

      <nav>
        <DownAnchor href="#start-section" />
      </nav>
    </section>
  )
}
