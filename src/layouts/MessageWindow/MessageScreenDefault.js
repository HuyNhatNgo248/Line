import { Box, Typography, useTheme } from "@mui/material";
import LogoText from "../../components/LogoText/Logotext";

const MessageScreenDefault = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      <LogoText sx={{ color: theme.palette.black[600] }} />
      <Typography variant="body2" sx={{ color: theme.palette.black[400] }}>
        Start a new conversation!
      </Typography>
    </Box>
  );
};

export default MessageScreenDefault;
