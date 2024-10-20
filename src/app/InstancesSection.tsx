//* Dependencias:
import Stack from '@mui/material/Stack'
//* Componentes:
import InstanceCard from '@/components/molecules/cards/InstanceCard'
//* Tipos:
import {DatabaseInstance} from '@/types/general.types'
//* Estilos
import '@/styles/landing.css'

const deployedInstances: Array<DatabaseInstance> = [
  {
    name: 'Naparzulo',
    info: 'Catalogo general de cavidades de la provincia de Navarra',
    territory: 'Navarra',
    groupName: 'Otxola E.T.',
    groupWeb: 'https://otxola.blogspot.com/',
    size: '500+ entradas',
    visibility: 'Pública',
    edition: 'Autorizados',
    link: 'dashboard/naparzulo',
  },
  {
    name: 'Text',
    info: 'Catalogo para pruebas de desarrollo',
    territory: 'Aragón',
    groupName: 'Subterra.db',
    size: '10+ entradas',
    visibility: 'Pública',
    edition: 'Pública',
    link: 'dashboard/text',
  },
]

export default function InstancesSection() {
  return (
    <section
      id="instances-section"
      className="landing-section"
      style={{
        backgroundImage: `url(/backgrounds/topography.svg)`,
      }}
    >
      <h2>Instancias</h2>
      <p>Actualmente existen las siguientes instancias de Subterra</p>

      <Stack direction={{sx: 'column', md: 'row'}}>
        {deployedInstances.map((instance) => (
          <InstanceCard
            key={instance.name}
            instance={instance}
          />
        ))}
      </Stack>
    </section>
  )
}
