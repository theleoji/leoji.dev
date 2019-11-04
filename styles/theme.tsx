import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const Font = [
  ['DM Serif Display', 'serif'],
  ['Futura PT', 'sans-serif'],
  ['Merriweather', 'Georgia', 'Times New Roman', 'serif']
].map(value => value.join(', '))

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
    fontSize: 16,
    fontFamily: Font[0],
    h1: {
      letterSpacing: -1.5,
      lineHeight: 1.25
    },
    h2: {
      letterSpacing: 0.5,
      lineHeight: 1.25,
      fontSize: '3rem'
    },
    h3: {
      fontSize: '2rem',
      lineHeight: 1.5
    },
    h4: {
      letterSpacing: 0.25
    },
    h5: {
      fontSize: '1.5rem'
    },
    h6: {
      letterSpacing: 0.25
    },
    body1: {
      fontFamily: Font[2],
      fontWeight: 300,
      fontSize: '1rem',
      letterSpacing: 0.5,
      lineHeight: 1.75
    },
    body2: {
      fontFamily: Font[1],
      fontStyle: 'oblique',
      fontSize: '1rem',
      fontWeight: 300,
      letterSpacing: 0.25
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
      fontSize: '1.15rem',
      fontWeight: 300
    }
  },
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
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
