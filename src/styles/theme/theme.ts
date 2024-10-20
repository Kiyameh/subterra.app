'use client'
import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#62B2F2',
    },
    secondary: {
      main: '#ea80fc',
    },

    error: {
      main: '#e53935',
    },
    warning: {
      main: '#ffa000',
    },
    info: {
      main: '#2979ff',
    },
    success: {
      main: '#b2ff59',
    },
  },
  typography: {
    fontFamily: 'Jost, sans-serif',
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiChip: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
})

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#62B2F2',
    },
    secondary: {
      main: '#ea80fc',
    },
    background: {
      default: '#0D111D',
      paper: '#20242F',
    },
    error: {
      main: '#e53935',
    },
    warning: {
      main: '#ffa000',
    },
    info: {
      main: '#2979ff',
    },
    success: {
      main: '#b2ff59',
    },
  },
  typography: {
    fontFamily: 'Jost, sans-serif',
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiChip: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
})

export default theme
