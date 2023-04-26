import { List, Box } from "@mui/material";
import { useRef, useEffect } from "react";
import Message from "../../components/Message/Message";
import { SendMessage } from "../../Context/SendMessageContext";
import { useTheme } from "@mui/material";

const MessageDisplay = (props) => {
  const messagesEndRef = useRef(null);
  const { messageList } = SendMessage();
  const theme = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <Box
      sx={{
        overflowY: "hidden",
        "&:hover": {
          overflowY: "overlay",
        },
      }}
    >
      <List
        sx={{
          margin: theme.spacing(2, 4, 2, 4),
        }}
      >
        {messageList.map(({ text, id, type, senderId }) => {
          const content =
            type === "sticker" ? <img src={text} alt="sticker" /> : text;

          return (
            <Message
              key={id}
              type={type}
              message={content}
              senderId={senderId}
            />
          );
        })}
        <div ref={messagesEndRef}></div>
      </List>
    </Box>
  );
};

export default MessageDisplay;
