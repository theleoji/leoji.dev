import { createMuiTheme } from "@material-ui/core/styles";
import { fontWeight, letterSpacing } from "@material-ui/system";

const Font = [["DM Serif Display", "serif"], ["Futura PT", "sans-serif"]].map(
  value => value.join(", ")
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#263238"
    },
    secondary: {
      main: "#311b92"
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: Font[0],
    h1: {
      letterSpacing: -1.5
    },
    h2: {
      letterSpacing: 0.5
    },
    h3: {
      fontFamily: Font[1]
    },
    h4: {
      letterSpacing: 0.25
    },
    h5: {
      fontFamily: Font[1]
    },
    h6: {
      fontFamily: Font[1],
      letterSpacing: 0.25
    },
    body1: {
      fontFamily: Font[1],
      fontWeight: 300,
      letterSpacing: 0.5
    },
    body2: {
      fontFamily: Font[1],
      fontStyle: "oblique",
      fontWeight: 300,
      letterSpacing: 0.25
    },
    overline: {
      fontFamily: Font[1],
      fontWeight: "bold",
      fontStyle: "oblique",
      letterSpacing: 2
    }
  }
});

export default theme;
