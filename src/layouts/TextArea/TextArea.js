import { Container, TextField, useTheme } from "@mui/material";
import SettingBar from "../../style/SettingBar";
import TextFeature from "./TextFeature";
import Sticker from "./Sticker";
import { useRef } from "react";
import { SendMessage } from "../../Context/SendMessageContext";
import { ChatHistory } from "../../Context/ChatContext";

const TextArea = (props) => {
  const theme = useTheme();
  const messageRef = useRef();
  const { textMessageSubmitHandler, clearTextField } = SendMessage();
  const { dispatch } = ChatHistory();

  const submitHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      textMessageSubmitHandler(messageRef.current.value);
      clearTextField(messageRef);
      dispatch({
        type: "move-top",
      });
    }
  };

  return (
    <Container
      sx={{
        padding: "0 !important",
        margin: "0 !important",
      }}
    >
      <TextField
        inputRef={messageRef}
        multiline
        onKeyDown={submitHandler}
        sx={{
          "& fieldset": { border: "none" },
          width: "100%",
          height: "100%",
          wordWrap: "break-word",
          backgroundColor: "inherit",
          minHeight: 0,
          overflow: "hidden",
          "&:hover": {
            overflow: "overlay",
          },
          "& .MuiInputBase-inputMultiline": {
            color: theme.palette.black[100],
            fontWeight: theme.typography.fontWeightLight,
          },
          borderTop: `solid 1px ${theme.palette.black[600]}`,
        }}
        id="outlined-search"
        placeholder="Search chats and messages"
        type="text"
        autoComplete="off"
        variant="outlined"
      />
      <SettingBar
        sx={{
          position: "absolute",
          bottom: 0,
          padding: theme.spacing(2, 0, 2, 0),
          marginLeft: `-${theme.spacing(2)}`,
        }}
      >
        <TextFeature />
        <Sticker />
      </SettingBar>
    </Container>
  );
};

export default TextArea;
