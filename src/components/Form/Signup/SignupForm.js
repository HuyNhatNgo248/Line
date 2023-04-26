import { useTheme, Box, TextField } from "@mui/material";
import LogoText from "../../LogoText/Logotext";

import PasswordTextField from "../../PasswordTextField/PasswordTextField";
import RegularTextField from "../../RegularTextField/RegularTextField";
import WarningMessage from "../../WarningMessage/WarningMessage";
import AuthButton from "../AuthButton";

import { useState, useEffect } from "react";
import RegisterToggleButton from "../../RegisterToggleButton/RegisterToggleButton";
import useInput from "./../../../hooks/useInput";
import useMatchingPassword from "../../../hooks/useMatchingPassword";
import useRouteRedirect from "../../../hooks/useRouteRedirect";
import { UserAuth } from "../../../Context/AuthContext";
import StyledTextField from "../../../style/StyledTextField";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const SignupForm = (props) => {
  const theme = useTheme();
  const navigate = useRouteRedirect("/chats");

  const { createUser } = UserAuth();

  const [errorSubmission, setErrorSubmission] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [userName, setUserName] = useState("");

  const {
    enteredValue: enteredEmail,
    errorMessage: emailErrorMessage,
    valueChangeHandler: emailChangeHandler,
  } = useInput("email");

  const {
    enteredValue: enteredPassword,
    errorMessage: passwordErrorMessage,
    valueChangeHandler: passwordChangeHandler,
  } = useInput("password", true);

  const {
    matchingPassword,
    errorMessage: passwordConfirmedErrorMessage,
    valueChangeHandler: passwordConfirmedChangeHandler,
    mainPasswordHandler,
  } = useMatchingPassword();

  useEffect(() => {
    setButtonDisabled(
      !(
        userName &&
        enteredEmail &&
        enteredPassword &&
        matchingPassword &&
        !emailErrorMessage &&
        !passwordErrorMessage &&
        matchingPassword === enteredPassword
      )
    );
  }, [
    userName,
    enteredEmail,
    enteredPassword,
    emailErrorMessage,
    matchingPassword,
    passwordErrorMessage,
  ]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser(enteredEmail, enteredPassword);
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: userName,
        email: enteredEmail,
      });

      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate();
    } catch (e) {
      setErrorSubmission("Something went wrong, please try again");
      console.log(e.message);
    }
  };

  return (
    <>
      <LogoText
        sx={{ marginTop: theme.spacing(10), marginBottom: theme.spacing(7) }}
      />

      <Box
        component={"form"}
        onSubmit={submitHandler}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(4),
        }}
      >
        <StyledTextField>
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="off"
            label="Username"
          />
        </StyledTextField>

        <RegularTextField
          inputChange={emailChangeHandler}
          errorStyle={!!emailErrorMessage}
          value={enteredEmail}
          label={"Email address"}
          type="email"
        />

        <PasswordTextField
          inputChange={passwordChangeHandler}
          errorStyle={!!passwordErrorMessage}
          value={enteredPassword}
          label={"Password"}
        />

        <RegularTextField
          inputChange={passwordConfirmedChangeHandler}
          errorStyle={!!passwordConfirmedErrorMessage}
          value={matchingPassword}
          label={"Confirm password"}
          type="password"
          onFocus={() => mainPasswordHandler(enteredPassword)}
        />

        <AuthButton disabled={buttonDisabled} name="Signup" />

        <RegisterToggleButton
          text={"Already have an account? "}
          type={"Login"}
          route={"login"}
        />

        {emailErrorMessage && (
          <WarningMessage>{emailErrorMessage}</WarningMessage>
        )}

        {passwordErrorMessage && (
          <WarningMessage>{passwordErrorMessage}</WarningMessage>
        )}
        {passwordConfirmedErrorMessage && (
          <WarningMessage>{passwordConfirmedErrorMessage}</WarningMessage>
        )}
        {errorSubmission && <WarningMessage>{errorSubmission}</WarningMessage>}
      </Box>
    </>
  );
};

export default SignupForm;
