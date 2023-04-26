import { useTheme, Box, Typography } from "@mui/material";

const ContactScreenDefault = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        userSelect: "none",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: `calc(${theme.typography.fs[12]}) + 0.1rem`,
          color: theme.palette.black[200],
          textAlign: "center",
        }}
      >
        {props.main}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: theme.typography.fs[12],
          color: theme.palette.black[400],
        }}
      >
        {props.secondary}
      </Typography>
    </Box>
  );
};

export default ContactScreenDefault;
