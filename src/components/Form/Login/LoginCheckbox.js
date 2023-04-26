import { useTheme } from "@mui/material";
import CheckboxLabel from "../../CheckboxLabel/CheckboxLabel";

const LoginCheckbox = (props) => {
  const theme = useTheme();
  return (
    <CheckboxLabel
      label={"Log me in automatically"}
      labelSx={{
        color: theme.palette.black[300],
        ".MuiFormControlLabel-label": {
          fontSize: `calc(${theme.typography.fs[12]} + 0.1rem)!important`,
        },
      }}
    />
  );
};

export default LoginCheckbox;
