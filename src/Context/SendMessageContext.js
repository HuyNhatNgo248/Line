import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChatHistory } from "./ChatContext";
import { db } from "../firebase";
import {
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { UserAuth } from "./AuthContext";

const SendMessageContext = createContext({});

export const SendMessageContextProvider = ({ children }) => {
  const [messageList, setMessageList] = useState([]);
  const { cardState } = ChatHistory();
  const { activeUserCard, userList } = cardState;
  const { user } = UserAuth();

  useEffect(() => {
    const fetchMessages = () => {
      const unsub = onSnapshot(
        doc(db, "chats", userList[activeUserCard][0]),
        (doc) => {
          doc.exists() && setMessageList(doc.data().messages);
        }
      );
      return () => unsub();
    };
    userList[activeUserCard] && fetchMessages();
  }, [activeUserCard, userList]);

  const _updateMessageList = useCallback(
    async (type, message) => {
      const pro1 = updateDoc(doc(db, "chats", userList[activeUserCard][0]), {
        messages: arrayUnion({
          id: uuid(),
          type,
          text: message,
          senderId: user.uid,
          date: Timestamp.now(),
        }),
      });

      const pro2 = updateDoc(doc(db, "userChats", user.uid), {
        [`${userList[activeUserCard][0]}.latestMessage`]: {
          text: type === "sticker" ? "sticker" : message,
        },
        [`${userList[activeUserCard][0]}.date`]: serverTimestamp(),
      });

      const pro3 = updateDoc(
        doc(db, "userChats", userList[activeUserCard][1].userInfo.uid),
        {
          [`${userList[activeUserCard][0]}.latestMessage`]: {
            text: type === "sticker" ? "sticker" : message,
          },
          [`${userList[activeUserCard][0]}.date`]: serverTimestamp(),
        }
      );

      await Promise.all([pro1, pro2, pro3]);
    },
    [activeUserCard, user.uid, userList]
  );

  const textMessageSubmitHandler = useCallback(
    async (message) => {
      if (message.trim().length === 0) return;
      _updateMessageList("text", message);
    },
    [_updateMessageList]
  );

  const stickerMessageSubmitHandler = useCallback(
    async (message) => {
      _updateMessageList("sticker", message);
    },
    [_updateMessageList]
  );

  const clearTextField = (ref) => {
    ref.current.value = "";
  };

  return (
    <SendMessageContext.Provider
      value={{
        messageList,
        textMessageSubmitHandler,
        stickerMessageSubmitHandler,
        clearTextField,
      }}
    >
      {children}
    </SendMessageContext.Provider>
  );
};

export const SendMessage = () => {
  return useContext(SendMessageContext);
};
