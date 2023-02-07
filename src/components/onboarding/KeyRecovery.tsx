import React, { Dispatch, SetStateAction } from "react";
import { makeStyles } from "tss-react/mui";
import { Theme, Grid } from "@mui/material";
import colours from "../../consts/colours";
import { SIGN_UP_PAGE_STEPS } from "./OnboardingConsts";

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    height: "100%",
    width: "100%",
  },
  parentText: {
    color: "green",
    textAlign: "center",
  },
}));

interface KeyRecoveryProps {
  setUserStep: Dispatch<SetStateAction<SIGN_UP_PAGE_STEPS>>;
}

export const KeyRecoveryComponent = ({ setUserStep }: KeyRecoveryProps) => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.parentText}>
          <Grid item>KeyRecoveryComponent</Grid>
        </Grid>
      </div>
    </>
  );
};
