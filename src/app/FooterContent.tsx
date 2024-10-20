//* Dependencias:
import Link from 'next/link'

export default function FooterContent() {
  return (
    <div
      style={{
        height: '100px',
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Creado por @andoni.abarzuza con 💜 </p>
      <Link
        style={{color: 'yellow'}}
        href={'/behind-the-scenes'}
      >
        verComo( )
      </Link>
    </div>
  )
}
