import BasicButton from "../../../style/BasicButton";
import { useTheme, Typography } from "@mui/material";

const ResetPasswordButton = (props) => {
  const theme = useTheme();
  return (
    <BasicButton
      sx={{
        color: theme.palette.black[300],
      }}
    >
      <Typography
        sx={{
          fontSize: `calc(${theme.typography.fs[12]} + 0.2rem) !important`,
        }}
        variant={"caption"}
      >
        Reset password
      </Typography>
    </BasicButton>
  );
};

export default ResetPasswordButton;
