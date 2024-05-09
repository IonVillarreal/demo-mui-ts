import { createTheme } from '@mui/material/styles'
import { alpha } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FAFAFA',
      paper: '#Fff',
    },
    primary: {
      main: '#4c662b',
    },
    secondary: {
      main: '#586249',
    },
    error: {
      main: '#BA1B1B',
    },
    action: {
      active: '#757575',
    },
    text: {
      primary: '#1A1A1A',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        variant: 'outlined',
      },
      styleOverrides: {
        colorPrimary: {
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          backgroundColor: alpha('#FFF', 0.4),
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})

export default theme
