import FeatureBar from "./FeatureBar";
import TextArea from "../TextArea/TextArea";
import MessageDisplay from "./MessageDisplay";
import MessageScreenDefault from "./MessageScreenDefault";
import { ChatHistory } from "../../Context/ChatContext";
import { Box } from "@mui/material";

const MessageWindow = (props) => {
  const { cardState } = ChatHistory();
  const { displayChatWindow } = cardState;

  let content = <MessageScreenDefault />;

  if (displayChatWindow) {
    content = (
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: `min-content 50rem 15rem`,
        }}
      >
        <FeatureBar sx={{ height: "4rem" }} />
        <MessageDisplay />
        <TextArea />
      </Box>
    );
  }

  return content;
};

export default MessageWindow;
