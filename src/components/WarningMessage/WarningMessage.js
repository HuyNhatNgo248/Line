import { Typography, useTheme } from "@mui/material";

const WarningMessage = (props) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        color: theme.palette.error.main,
        fontSize: `${theme.typography.fs[12]} !important`,
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default WarningMessage;
