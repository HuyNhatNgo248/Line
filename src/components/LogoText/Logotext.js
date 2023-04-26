import { Typography, useTheme } from "@mui/material";

const LogoText = (props) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h3"
      sx={{
        fontWeight: theme.typography.fw["bold"],
        color: theme.palette.green[900],
        [theme.breakpoints.only("md")]: {
          fontSize: theme.typography.fs[44],
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.typography.fs[36],
        },
        ...props.sx,
      }}
    >
      Line
    </Typography>
  );
};

export default LogoText;
