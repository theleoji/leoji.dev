import { createMuiTheme } from "@material-ui/core/styles";

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
    fontFamily: Font[0],
    h3: {
      fontFamily: Font[1]
    },
    h5: {
      fontFamily: Font[1]
    },
    h6: {
      fontFamily: Font[1]
    },
    body1: {
      fontFamily: Font[1]
    },
    body2: {
      fontFamily: Font[1]
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
