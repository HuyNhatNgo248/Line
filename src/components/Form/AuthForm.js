import SignupForm from "./Signup/SignupForm";
import LoginForm from "./Login/LoginForm";
import { Stack } from "@mui/material";

const AuthForm = (props) => {
  return (
    <Stack
      alignItems="center"
      sx={{ width: "80%", height: "100%", margin: "0 auto" }}
    >
      {props.authType === "signup" ? <SignupForm /> : <LoginForm />}
    </Stack>
  );
};

export default AuthForm;
