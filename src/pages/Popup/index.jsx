import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@emotion/react";

import { PopupComponent } from "./popup";
import theme from "../../utils/mui-theme";

const ParentPlaceholder = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PopupComponent />
      </ThemeProvider>
    </>
  );
};

render(<ParentPlaceholder />, window.document.querySelector("#app-container"));

if (module.hot) module.hot.accept();
