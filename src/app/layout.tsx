// Estilos globales
import '@/styles/global.css'

// Servicios de MUI:
import {ThemeProvider} from '@mui/material/styles'
import {darkTheme} from '@/styles/theme/theme'
import CssBaseline from '@mui/material/CssBaseline'

// Servicios de Next.js:
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Subterra.app',
  description: 'Base de datos de cavidades subterráneas',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
