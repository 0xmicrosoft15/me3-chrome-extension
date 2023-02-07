import React, { useEffect, useRef, useState } from "react";
import { Theme, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

import { GOOGLE_CONSOLE_APP_CLIENT_ID } from "./google-credentials";

import colours from "../../consts/colours";

const useStyles = makeStyles()((theme: Theme) => ({
  button: {
    backgroundColor: colours.white,
    color: theme.palette.primary.main,
    width: "90vw",
    "&:hover": {
      backgroundColor: colours.purple_color80,
    },
  },
}));

export const InitialiseGoogleProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  useEffect(() => {});

  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CONSOLE_APP_CLIENT_ID}>
        {children}
      </GoogleOAuthProvider>
    </>
  );
};

export const performGoogleSignIn = () => {
  console.info("pressed performGoogleSignIn");
  useGoogleLogin({
    onSuccess: (credentialRes) => {
      console.info("Success!", credentialRes);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
};

export const SignInWithGoogleButton = ({
  handleClick,
}: {
  handleClick: () => void;
}): JSX.Element => {
  const { classes } = useStyles();
  // const GeneratedButton = createButton(config);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        className={classes.button}
      >
        Sign in with Google
      </Button>
    </>
  );
};
