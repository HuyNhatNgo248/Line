import { useTheme } from "@mui/material";
import BasicButton from "../../style/BasicButton";

const AuthButton = (props) => {
  const theme = useTheme();

  const buttonStyle = props.disabled
    ? {
        backgroundColor: theme.palette.black[300],
        color: `${theme.palette.black[100]} !important`,
      }
    : {
        backgroundColor: theme.palette.green[900],
        color: `${theme.palette.black[100]} !important`,
        hover: {
          backgroundColor: theme.palette.green[800],
        },
      };

  return (
    <BasicButton
      disabled={props.disabled}
      sx={{
        width: "100%",
        height: theme.spacing(12),
        fontSize: `${theme.typography.fs[16]} !important`,
        ...buttonStyle,
        ...props.sx,
      }}
      type="submit"
    >
      {props.name}
    </BasicButton>
  );
};

export default AuthButton;
