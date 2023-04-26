import { TextField, useTheme } from "@mui/material";
import StyledTextField from "../../style/StyledTextField";

const RegularTextField = (props, ref) => {
  const theme = useTheme();
  const textEnteredHandler = (e) => {
    props.inputChange(e.target.value);
  };
  const content = (
    <TextField
      error={props.errorStyle}
      defaultValue={props.value}
      autoFocus={!!props.value}
      label={props.label}
      autoComplete="off"
      type={props.type}
      onChange={textEnteredHandler}
      onFocus={props.onFocus || (() => {})}
      sx={{
        "&  .MuiOutlinedInput-input": {
          color: theme.palette.black[100],
        },
      }}
    />
  );
  //no error case
  return props.errorStyle ? (
    content
  ) : (
    <StyledTextField>{content}</StyledTextField>
  );
};

export default RegularTextField;
