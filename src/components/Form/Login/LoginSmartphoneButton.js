import { useTheme, Typography } from "@mui/material";
import BasicButton from "../../../style/BasicButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LoginSmartphoneButton = (props) => {
  const theme = useTheme();
  return (
    <BasicButton
      sx={{
        color: theme.palette.black[300],
        fontSize: `calc(${theme.typography.fs[12]} + 0.1rem) !important`,
        alignSelf: "flex-start",
        justifySelf: "flex-end",
        marginTop: "auto",
        padding: theme.spacing(0, 0, 4, 0),
        textTransform: "none",
      }}
    >
      <Typography
        variant={"caption"}
        sx={{
          fontSize: `calc(${theme.typography.fs[12]} + 0.2rem) !important`,
        }}
      >
        Log in with my smartphone
      </Typography>
      {<KeyboardArrowRightIcon />}
    </BasicButton>
  );
};

export default LoginSmartphoneButton;
