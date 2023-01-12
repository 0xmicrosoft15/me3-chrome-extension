import { createTheme } from "@mui/material/styles";

import colours from "../consts/colours";
import displaySizes from "../consts/display-sizes";

// A custom muiTheme for this app
const muiTheme = createTheme({
  palette: {
    primary: {
      main: colours.mainColor,
    },
    secondary: {
      main: "#19857b",
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
    fontSize: displaySizes.font,
  },
});

export default muiTheme;
