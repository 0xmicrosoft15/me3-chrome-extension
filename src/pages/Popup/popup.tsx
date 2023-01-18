import React, { Children, useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";
import colours from "../../consts/colours";

import Grid from "@mui/material/Grid";
import { SignInPage } from "../../components/onboarding/SignIn.page";

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    width: "100vw",
  },
  parentText: {
    color: "black",
    textAlign: "center",
  },
}));

// ROUTER SHOULD BE HERE
export const PopupComponent = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.parentText}>
          <Grid item>
            <SignInPage />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
