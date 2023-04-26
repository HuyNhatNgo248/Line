import { Box, Stack, useTheme } from "@mui/material";

const AuthLayout = (props) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.black[800],
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "max(40rem, 50rem)",
          height: "min(55rem, 70rem)",

          [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100%",
          },

          [theme.breakpoints.up("sm")]: {
            borderRadius: "1rem",
          },

          backgroundColor: theme.palette.black[700],
        }}
      >
        {props.children}
      </Box>
    </Stack>
  );
};

export default AuthLayout;
