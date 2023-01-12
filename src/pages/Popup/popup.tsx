import React from "react";
import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";
import colours from "../../consts/colours";

import Grid from "@mui/material/Grid";

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "600px",
    width: "400px",
  },
  parentText: {
    color: colours.black,
    textAlign: "center",
  },
}));

export const PopupComponent = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container className={classes.parentText}>
          <Grid item>
            This is the main component to contain navBar and tabBar
          </Grid>
        </Grid>
      </div>
    </>
  );
};
