import { Stack, useTheme, Box } from "@mui/material";
import LogoText from "../../LogoText/Logotext";
import LoginSmartphoneButton from "./LoginSmartphoneButton";

import PasswordTextField from "../../PasswordTextField/PasswordTextField";
import RegularTextField from "../../RegularTextField/RegularTextField";
import LoginCheckbox from "./LoginCheckbox";
import ResetPasswordButton from "./ResetPasswordButton";
import WarningMessage from "../../WarningMessage/WarningMessage";
import AuthButton from "../AuthButton";

import { useState, useEffect } from "react";
import RegisterToggleButton from "../../RegisterToggleButton/RegisterToggleButton";
import useInput from "./../../../hooks/useInput";
import useRouteRedirect from "../../../hooks/useRouteRedirect";
import { UserAuth } from "../../../Context/AuthContext";

const LoginForm = (props) => {
  const theme = useTheme();
  const navigate = useRouteRedirect("/chats");
  const [errorSubmission, setErrorSubmission] = useState("");
  const { login } = UserAuth();

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const {
    enteredValue: enteredEmail,
    errorMessage: emailErrorMessage,
    valueChangeHandler: emailChangeHandler,
  } = useInput("email");

  const {
    enteredValue: enteredPassword,
    errorMessage: passwordErrorMessage,
    valueChangeHandler: passwordChangeHandler,
  } = useInput("password", false);

  useEffect(() => {
    setButtonDisabled(
      !(
        enteredEmail.length &&
        enteredPassword.length &&
        !emailErrorMessage.length
      )
    );
  }, [enteredEmail, enteredPassword, emailErrorMessage]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(enteredEmail, enteredPassword);
      navigate();
    } catch (error) {
      setErrorSubmission(
        "Email address or password is either incorrect or not registered with LINE"
      );
    }
  };

  return (
    <>
      <LogoText
        sx={{ marginTop: theme.spacing(15), marginBottom: theme.spacing(7) }}
      />
      <Box
        component={"form"}
        onSubmit={submitHandler}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(3),
        }}
      >
        <RegularTextField
          inputChange={emailChangeHandler}
          errorStyle={Boolean(emailErrorMessage)}
          value={enteredEmail}
          label={"Email address"}
          type="email"
        />

        <PasswordTextField
          inputChange={passwordChangeHandler}
          errorStyle={Boolean(passwordErrorMessage)}
          value={enteredPassword}
          label={"Password"}
        />

        <AuthButton disabled={buttonDisabled} name="Login" />

        <Stack direction="row" justifyContent="space-between">
          <LoginCheckbox />
          <ResetPasswordButton />
        </Stack>

        <RegisterToggleButton
          text={"Don't have an account? "}
          type={"Signup"}
          route={"signup"}
        />

        {emailErrorMessage && (
          <WarningMessage>{emailErrorMessage}</WarningMessage>
        )}

        {passwordErrorMessage && (
          <WarningMessage>{passwordErrorMessage}</WarningMessage>
        )}

        {errorSubmission && <WarningMessage>{errorSubmission}</WarningMessage>}
      </Box>
      <LoginSmartphoneButton />
    </>
  );
};

export default LoginForm;
