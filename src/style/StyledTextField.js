import { styled, Box } from "@mui/material";

const StyledTextField = styled(Box)(({ theme }) => {
  const color = theme.palette;

  return {
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& label.Mui-focused": {
      color: color.green[400],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: color.black[400],
    },
    "&  .MuiInputLabel-root": {
      color: color.black[500],
    },
    "&  .MuiOutlinedInput-input": {
      color: color.black[100],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: color.black[500],
      },
      "&:hover fieldset": {
        borderColor: color.black[500],
      },
      "&.Mui-focused fieldset": {
        borderColor: color.green[500],
      },
    },
  };
});

export default StyledTextField;
