//* Dependencias:
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
//* Componentes:
import InstanceContainer from '@/components/organism/instanceContainer/InstanceContainer'
import InfoCard from '@/components/molecules/cards/InfoCard'
//* Stilos:
import '@/styles/landing.css'

export default function InstancesSection() {
  return (
    <section
      id="instances-section"
      className="landing-section"
      style={{
        backgroundImage: `url(/backgrounds/topography.svg)`,
      }}
    >
      <InfoCard
        title="Instancias"
        icon={<Inventory2OutlinedIcon />}
        text="Aquí puedes encontrar las instancias desplegadas actualmente en Subterra."
      />
      <InstanceContainer />
    </section>
  )
}
