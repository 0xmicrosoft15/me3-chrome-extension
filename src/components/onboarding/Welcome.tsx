import React, { Dispatch, SetStateAction } from "react";
import { makeStyles } from "tss-react/mui";
import { Theme, Grid, Typography, Button } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";

import colours from "../../consts/colours";
import { SIGN_UP_PAGE_STEPS } from "./OnboardingConsts";
import onboardImage from "../../assets/images/coins/onboard_coins_no_bg.png";
import logo from "../../assets/images/logo/logo.png";
import GoogleButton, {
  performGoogleSignIn,
  SignInWithGoogleButton,
} from "../../services/google";

const useStyles = makeStyles()((theme: Theme) => ({
  parent: {
    background: `linear-gradient(45deg, #160e25 100%, #160e25 5%)`,
    height: "100vh",
    width: "100vw",
  },
  parentText: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textAlign: "center",
  },
  onboardImg: {
    width: "auto",
    height: "50vh",
  },
  logoImg: {
    height: "5vh",
    marginBottom: "8px",
  },
  subtitle: {
    color: colours.neutral60,
    marginBottom: "8px",
  },
  button: {
    width: "90vw",
  },
}));

interface WelcomeProps {
  setUserStep: Dispatch<SetStateAction<SIGN_UP_PAGE_STEPS>>;
}

export const WelcomeComponent = ({ setUserStep }: WelcomeProps) => {
  const { classes } = useStyles();

  return (
    <>
      <Grid
        container
        flexDirection="column"
        justifyContent="space-around"
        className={classes.parent}
      >
        <Grid item>
          <img
            src={onboardImage}
            className={classes.onboardImg}
            alt="Me3 Wallet"
          />
        </Grid>
        <Grid item>
          <img src={logo} className={classes.logoImg} />
          <Typography variant="body1" className={classes.parentText}>
            One wallet needed everywhere
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.subtitle}>
            By continuing, you agree to Me3's Terms of Use and Privacy Policy.
          </Typography>
          <SignInWithGoogleButton handleClick={performGoogleSignIn} />
        </Grid>
      </Grid>
    </>
  );
};
