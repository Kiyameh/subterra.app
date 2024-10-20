/** Caja básica con aspecto de glassmorphism */
export default function GlassBox({children}: {children: React.ReactNode}) {
  return (
    <div
      style={{
        maxWidth: '540px',
        borderRadius: '15px',
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: ' 15px 45px',
        margin: '15px',
      }}
    >
      {children}
    </div>
  )
}
