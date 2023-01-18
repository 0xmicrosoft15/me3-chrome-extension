import { createTheme } from "@mui/material/styles";

import colours from "../consts/colours";
import displaySizes from "../consts/display-sizes";

import TitilliumWebRegularTtf from "../assets/font/titilliumweb_regular.ttf";
import TitilliumWebBoldTtf from "../assets/font/titilliumweb_bold.ttf";

// A custom muiTheme for this app
const muiTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: TitilliumWeb;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('TitillumWeb'), local('TitilliumWeb-Regular'), url(${TitilliumWebRegularTtf}) format('truetype');
          unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
        }
        @font-face {
          font-family: TitilliumWeb;
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('TitillumWeb-Bold'), local('TitilliumWeb-Bold'), url(${TitilliumWebBoldTtf}) format('truetype');
          unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
        }
      `,
    },
  },
  palette: {
    primary: {
      main: colours.mainColor,
    },
    secondary: {
      main: colours.white,
    },
    error: {
      main: colours.error_color,
    },
    background: {
      paper: colours.white,
      default: colours.purple_dark,
    },
  },
  typography: {
    fontFamily: "TitilliumWeb, Sans serif",
    fontSize: displaySizes.font,
    subtitle2: {
      opacity: "80%",
      fontSize: displaySizes.caption,
    },
  },
});

export default muiTheme;
