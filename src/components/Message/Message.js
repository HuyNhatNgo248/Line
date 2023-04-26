import { ListItem, ListItemAvatar, useTheme } from "@mui/material";
import MessageText from "./MessageText";
import MessageMenu from "./MessageMenu";
import UserAvatar from "../UserAvatar/UserAvatar";
import { UserAuth } from "../../Context/AuthContext";

const Message = (props) => {
  const theme = useTheme();
  const { user } = UserAuth();

  const isReceived = user.uid !== props.senderId;

  let content = (
    <>
      <MessageMenu />
      <MessageText
        type={props.type}
        message={props.message}
        isReceived={isReceived}
      />
      <ListItemAvatar sx={{ minWidth: 0 }}>
        <UserAvatar sx={{ width: "3rem", height: "3rem" }} />
      </ListItemAvatar>
    </>
  );

  if (isReceived) {
    content = (
      <>
        <ListItemAvatar sx={{ minWidth: 0 }}>
          <UserAvatar sx={{ width: "3rem", height: "3rem" }} />
        </ListItemAvatar>
        <MessageText
          type={props.type}
          message={props.message}
          isReceived={isReceived}
        />
        <MessageMenu />
      </>
    );
  }

  return (
    <ListItem
      sx={{
        gap: "1rem",
        padding: theme.spacing(1.5, 0, 0, 0),
        justifyContent: isReceived ? "flex-start" : "flex-end",
        "&:hover .MuiStack-root:first-of-type": {
          display: "inline-block",
        },
      }}
    >
      {content}
    </ListItem>
  );
};

export default Message;
