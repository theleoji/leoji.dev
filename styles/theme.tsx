import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const Font = [
  ['DM Serif Display', 'serif'],
  ['Futura PT', 'sans-serif'],
  ['Merriweather', 'serif']
].map(value => value.join(', '))

// Init
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238'
    },
    secondary: {
      main: '#311b92'
    }
  },
  typography: {
    htmlFontSize: 13,
    fontSize: 13,
    fontFamily: Font[0],
    h1: { fontSize: 2.2, lineHeight: 1.15 },
    h2: {
      lineHeight: 1.35,
      fontSize: 1.5
    },
    h3: {
      fontSize: 1.9,
      lineHeight: 1.4
    },
    h4: {
      fontSize: 1.7,
      lineHeight: 1.4
    },
    h5: {
      fontSize: 1.6
    },
    h6: {
      fontSize: 1.5
    },
    body1: {
      fontFamily: Font[2],
      lineHeight: 1.6,
      fontSize: 1.5
    },
    body2: {
      fontFamily: Font[1],
      fontStyle: 'oblique',
      fontSize: 1.1
    },
    overline: {
      fontFamily: Font[1],
      fontWeight: 'bold',
      fontStyle: 'oblique',
      letterSpacing: 2
    },
    button: {
      fontFamily: Font[1],
      textTransform: 'none',
      fontSize: 1.15,
      fontWeight: 300
    }
  },
  spacing: factor => `${factor}rem`,
  overrides: {
    MuiButton: {
      root: {
        marginTop: '0.5rem',
        marginBottom: '1rem'
      }
    },
    MuiCard: {
      root: {
        margin: '0.5rem'
      }
    },
    MuiDivider: {
      root: {
        marginTop: '2rem',
        marginBottom: '2rem'
      }
    },
    MuiTypography: {
      paragraph: {
        marginBottom: '2rem'
      }
    },
    MuiContainer: {
      root: {
        padding: '0 10px',
        paddingLeft: null,
        paddingRight: null
      }
    }
  }
})

// Dynamics post-init

theme.typography.body1 = Object.assign(
  {},
  { [theme.breakpoints.up('lg')]: { fontSize: '1.5rem' } },
  theme.typography.body1
)

theme = responsiveFontSizes(theme)

export default theme
