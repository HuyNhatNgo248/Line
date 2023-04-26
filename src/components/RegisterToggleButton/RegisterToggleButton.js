import { Typography, Stack, useTheme } from "@mui/material";
import BasicButton from "../../style/BasicButton";
import useRouteRedirect from "../../hooks/useRouteRedirect";

const RegisterToggleButton = (props) => {
  const theme = useTheme();
  const navigateHandler = useRouteRedirect(`/${props.route}`);

  return (
    <Stack direction="row" alignItems="center">
      <Typography
        sx={{
          fontSize: `calc(${theme.typography.fs[12]} + 0.2rem) !important`,
          color: theme.palette.black[400],
        }}
      >
        {props.text}
      </Typography>
      <BasicButton
        sx={{
          color: theme.palette.black[300],
          padding: 0,
          marginLeft: "-0.4rem",
          fontWeight: theme.typography.fw["bold"],
        }}
        onClick={navigateHandler}
      >
        {props.type}
      </BasicButton>
    </Stack>
  );
};

export default RegisterToggleButton;
