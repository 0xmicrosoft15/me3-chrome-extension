import React from "react";
import { render } from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { PopupComponent } from "./popup";
import theme from "../../utils/mui-theme";
import { InitialiseGoogleProvider } from "../../services/google";

const ParentPlaceholder = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Note: LoadGoogleProvider Must always be wrapping PopupComponent */}
        {/*<InitialiseGoogleProvider>*/}
        <PopupComponent />
        {/*</InitialiseGoogleProvider>*/}
      </ThemeProvider>
    </>
  );
};

render(<ParentPlaceholder />, window.document.querySelector("#app-container"));

if (module.hot) module.hot.accept();
