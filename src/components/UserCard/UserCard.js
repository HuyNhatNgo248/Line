import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import UserAvatar from "../UserAvatar/UserAvatar";
import MoreButton from "./MoreButton";
import { ChatHistory } from "../../Context/ChatContext";

const UserCard = (props) => {
  const theme = useTheme();
  const { dispatch } = ChatHistory();

  let activeColor = {};
  if (props.active)
    activeColor = {
      backgroundColor: theme.palette.black[600],
    };

  return (
    <ListItem
      sx={{
        ...activeColor,
        position: "relative",
        cursor: "pointer",
        borderRadius: theme.typography.bdr["lg"],
        "&:hover": {
          backgroundColor: theme.palette.black[600],
          ...activeColor,
        },

        "&:hover .MuiButton-root": {
          visibility: "visible",
        },
      }}
      onMouseEnter={() => {
        dispatch({
          type: "update-hovered-item",
          hoveredItem: props.idx,
        });
      }}
      onClick={props.performAction}
    >
      <ListItemAvatar sx={{ marginRight: theme.spacing(2) }}>
        <UserAvatar pin={props.pin} sx={{ width: "5rem", height: "5rem" }} />
      </ListItemAvatar>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
        }}
      >
        <ListItemText
          primary={props.displayName}
          secondary={props.latestMessage || ""}
          sx={{
            "& span": {
              color: theme.palette.black[100],
            },
            "& p": {
              color: theme.palette.black[400],
            },
          }}
        />
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{
            "& .MuiListItemText-secondary": {
              color: theme.palette.black[400],
              fontSize: theme.typography.fs[12],
            },
          }}
        >
          <ListItemText secondary={props.latestSent} />
          {props.type !== "search" && (
            <MoreButton pin={props.pin} idx={props.idx} />
          )}
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default UserCard;
