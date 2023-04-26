import BasicButton from "../../../UI/BasicButton";
import { useTheme } from "@mui/material";

const LoginButton = (props) => {
  const theme = useTheme();
  return (
    <BasicButton
      disabled={props.disabled}
      sx={{
        width: "100%",
        height: theme.spacing(12),
        fontSize: `${theme.typography.fs[16]} !important`,
        ...props.sx,
      }}
    >
      Log in
    </BasicButton>
  );
};

export default LoginButton;
