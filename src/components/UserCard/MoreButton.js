import MenuButton from "../MenuButton/MenuButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import Draggable from "react-draggable";
import { useTheme, Modal, Typography, Box, Stack } from "@mui/material";
import BasicButton from "../../style/BasicButton";
import { UserAuth } from "../../Context/AuthContext";
import { doc, deleteDoc, updateDoc, deleteField } from "firebase/firestore";
import { ChatHistory } from "../../Context/ChatContext";
import { db } from "../../firebase";
const UseCardModal = (props) => {
  const theme = useTheme();
  const { cardState, dispatch } = ChatHistory();
  const { user } = UserAuth();

  const modalClickHandler = (event) => {
    event.stopPropagation();
  };

  const cancelButtonHandler = (event) => {
    props.handleClose(false);
  };

  const mainButtonHandler = async (type, idx) => {
    // type === "Hide" && dispatch({});
    props.handleClose(false);
    if (type === "Delete") {
      const pro1 = deleteDoc(doc(db, "chats", cardState.userList[idx][0]));
      const pro2 = updateDoc(doc(db, "userChats", user.uid), {
        [cardState.userList[idx][0]]: deleteField(),
      });
      const pro3 = updateDoc(
        doc(db, "userChats", cardState.userList[idx][1].userInfo.uid),
        {
          [cardState.userList[idx][0]]: deleteField(),
        }
      );

      if (idx === cardState.activeUserCard) {
        dispatch({
          type: "update-display-chat-window",
          displayChatWindow: false,
        });
        dispatch({
          type: "update-active-card",
          activeUserCard: -1,
        });
      }

      await Promise.all([pro1, pro2, pro3]);
    }
  };

  return (
    <Draggable>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        onClick={modalClickHandler}
        hideBackdrop
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25rem",
            backgroundColor: theme.palette.black[800],
            borderRadius: theme.typography.bdr["sm"],
            padding: theme.spacing(6, 8),
          }}
        >
          <Typography
            sx={{
              color: theme.palette.black[100],
              textAlign: "center",
              fontSize: `${theme.typography.fs[12]} !important`,
              fontWeight: theme.typography.fontWeightLight,
            }}
            id="modal-modal-description"
            variant="body2"
          >
            {props.description}
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={{ xs: 1, sm: 2 }}
            mt={5}
          >
            <BasicButton
              onClick={cancelButtonHandler}
              sx={{
                backgroundColor: theme.palette.black[500],
                color: theme.palette.black[100],
                hover: { backgroundColor: theme.palette.black[500] },
              }}
            >
              Cancel
            </BasicButton>
            <BasicButton
              onClick={mainButtonHandler.bind(this, props.name, props.idx)}
              sx={{
                backgroundColor: theme.palette.green[900],
                color: theme.palette.black[100],
                hover: { backgroundColor: theme.palette.green[900] },
              }}
            >
              {props.name}
            </BasicButton>
          </Stack>
        </Box>
      </Modal>
    </Draggable>
  );
};

const MoreButton = (props) => {
  const [hideChatModal, setHideChatModal] = useState(false);
  const [deleteChatModal, setDeleteChatModal] = useState(false);

  const hideChatHandler = () => {
    setHideChatModal(true);
  };

  const deleteChatHandler = () => {
    setDeleteChatModal(true);
  };

  const pinChatHandler = () => {};

  return (
    <>
      <MenuButton
        sx={{ minWidth: 0, padding: 0, zIndex: 100, visibility: "hidden" }}
        summary={<MoreHorizIcon />}
        menuItems={{
          [`${props.pin ? "Unpin" : "Pin"} chat`]: pinChatHandler,
          Hide: hideChatHandler,
          Delete: deleteChatHandler,
        }}
      />
      {hideChatModal && (
        <UseCardModal
          idx={props.idx}
          name="Hide"
          open={hideChatModal}
          handleClose={setHideChatModal}
          description="Hiding chats doesn't delete their messages"
        />
      )}
      {deleteChatModal && (
        <UseCardModal
          idx={props.idx}
          name="Delete"
          open={deleteChatModal}
          handleClose={setDeleteChatModal}
          description="If you delete this chat from your chat list, you won't be able to restore its chat history. Delete this chat?"
        />
      )}
    </>
  );
};

export default MoreButton;
