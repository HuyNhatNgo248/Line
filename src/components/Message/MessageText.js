import { Box, useTheme, ListItemText } from "@mui/material";

const MessageText = (props) => {
  const theme = useTheme();
  const backgroundColor = props.isReceived
    ? theme.palette.black[600]
    : theme.palette.green[500];

  const color = props.isReceived
    ? theme.palette.black[100]
    : theme.palette.black[800];

  return (
    <Box
      sx={{
        display: "inline-block",
        backgroundColor: props.type === "sticker" ? "inherit" : backgroundColor,
        padding: theme.spacing(1, 3, 1, 3),
        borderRadius: theme.typography.bdr["md"],
        maxWidth: "75%",
        "& img": {
          width: "14rem",
          height: "14rem",
          objectFit: "cover",
        },
      }}
    >
      <ListItemText
        primary={props.message}
        sx={{
          ".MuiTypography-root": {
            color: color,
            fontWeight: `${theme.typography.fontWeightLight} !important`,
            wordWrap: "break-word",
          },
        }}
      />
    </Box>
  );
};

export default MessageText;
