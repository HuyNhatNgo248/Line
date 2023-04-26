import React from "react";
import { Stack, useTheme } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoodIcon from "@mui/icons-material/Mood";
import IconButton from "../IconButton/IconButton";

const MessageMenu = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "none",
        "& .MuiButtonBase-root": {
          minWidth: theme.spacing(8),
        },
      }}
    >
      <IconButton title="More" placement="top">
        <MoreVertIcon />
      </IconButton>
      <IconButton title="Reply" placement="top">
        <ReplyIcon />
      </IconButton>
      <IconButton title="React" placement="top">
        <MoodIcon />
      </IconButton>
    </Stack>
  );
};

export default MessageMenu;
