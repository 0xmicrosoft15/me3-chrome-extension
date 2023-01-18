// different views on this page
// 1. welcome with Google SSO
// 2. performing key recovery and telling user to wait
//    - need to show a dismissible popup with qr to GPlayStore/Apple AppStore
// 3. wallet ready

import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Theme, Grid } from "@mui/material";
import colours from "../../consts/colours";
import { SignInErrorComponent } from "./SignInError";
import { WelcomeComponent } from "./Welcome";
import { KeyRecoveryComponent } from "./KeyRecovery";
import { SignInCompleteComponent } from "./Complete";
import { SIGN_UP_PAGE_STEPS } from "./OnboardingConsts";

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    height: "100%",
    width: "100%",
  },
  parentText: {
    color: "red",
    textAlign: "center",
  },
}));

export const SignInPage = () => {
  const { classes } = useStyles();
  const [userStep, setUserStep] = useState<SIGN_UP_PAGE_STEPS>(
    SIGN_UP_PAGE_STEPS.WELCOME
  );

  const renderSignInView = () => {
    switch (userStep) {
      case SIGN_UP_PAGE_STEPS.WELCOME: {
        return <WelcomeComponent setUserStep={setUserStep} />;
      }
      case SIGN_UP_PAGE_STEPS.KEY_RECOVERY: {
        return <KeyRecoveryComponent setUserStep={setUserStep} />;
      }
      case SIGN_UP_PAGE_STEPS.COMPLETE: {
        return <SignInCompleteComponent setUserStep={setUserStep} />;
      }
      default: {
        return <SignInErrorComponent setUserStep={setUserStep} />;
      }
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.parentText}>
          <Grid item>{renderSignInView()}</Grid>
        </Grid>
      </div>
    </>
  );
};
