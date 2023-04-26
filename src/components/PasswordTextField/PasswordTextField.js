import { InputAdornment, IconButton, useTheme, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import StyledTextField from "../../style/StyledTextField";
import { useState } from "react";

const PasswordTextField = (props, ref) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const textEnteredHandler = (e) => {
    props.inputChange(e.target.value);
  };

  const content = (
    <TextField
      error={props.errorStyle}
      defaultValue={props.value}
      autoFocus={!!props.value}
      label={props.label || "Password"}
      autoComplete="off"
      onChange={textEnteredHandler}
      sx={{
        "&  .MuiOutlinedInput-input": {
          color: theme.palette.black[100],
        },
      }}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff sx={{ color: theme.palette.black[500] }} />
              ) : (
                <Visibility sx={{ color: theme.palette.black[500] }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
  return props.errorStyle ? (
    content
  ) : (
    <StyledTextField>{content}</StyledTextField>
  );
};

export default PasswordTextField;
