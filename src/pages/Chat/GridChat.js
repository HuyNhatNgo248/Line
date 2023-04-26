import { Box, useTheme } from "@mui/material";

const GridChat = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "7rem 1fr",
        backgroundColor: theme.palette.black[700],
        width: "100% !important",
        height: "100vh !important",
        padding: "0 !important",
        overflow: "hidden",
      }}
    >
      {props.children}
    </Box>
  );
};

export default GridChat;
