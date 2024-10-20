//* Dependencias:
import Stack from '@mui/material/Stack'
//* Componentes:
import DownAnchor from '@/components/atoms/controls/DownAnchor'
import GlassBox from '@/components/molecules/boxes/GlassBox'
import LinkButton from '@/components/atoms/controls/LinkButton'
//* Estilos
import '@/styles/landing.css'

export default function HowToStartSection() {
  return (
    <section
      id="start-section"
      className="landing-section landing-image"
      style={{
        backgroundImage: `url(/stock/v8.jpg)`,
      }}
    >
      <h2>¿Como empezar?</h2>
      <Stack direction={{sx: 'column', md: 'row'}}>
        <GlassBox>
          <h3>Espeleologo</h3>
          <p>
            Si eres un espeleologo puedes crear tu cuenta de usuario y consultar
            los datos de las instancias públicas. Tambien puedes inscribirte
            dentro de un club y colaborar con su propia base de datos
          </p>
          <LinkButton
            label="Crea tu cuenta"
            href="/register"
          />
        </GlassBox>
        <GlassBox>
          <h3>Grupo de espeleología</h3>
          <p>
            Si eres un club o un grupo que se dedica a la espeleología, puedes
            crear un perfil de grupo, inscribir a los miembros y asignarles
            diferentes roles. Estos podran contribuir a la base de datos del
            grupo con cavidades exploradas, informes de exploración, y mucho
            más.
          </p>
          <LinkButton
            label="Despliega tu propia instancia"
            href="/deploy"
          />
        </GlassBox>
      </Stack>

      <nav>
        <DownAnchor href="#instances-section" />
      </nav>
    </section>
  )
}
