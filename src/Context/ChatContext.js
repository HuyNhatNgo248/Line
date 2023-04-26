import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import ContactScreenDefault from "../layouts/ContactList/ContactScreenDefault";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "./AuthContext";

import useCard from "../hooks/useCard";

const ChatContext = createContext({});

export const ChatContextProvider = ({ children }) => {
  const searchBarRef = useRef();

  const [cardState, dispatch] = useCard();

  const { user } = UserAuth();

  const [message, setMessage] = useState(
    <ContactScreenDefault
      main={"Let's start chatting!"}
      secondary={"Start a new conversation!"}
    />
  );

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", user.uid),
        { includeMetadataChanges: true },
        (doc) => {
          !doc.metadata.hasPendingWrites &&
            dispatch({
              type: "add-card",
              userList: Object.entries(doc.data()),
            });
        }
      );
      return () => unsub();
    };

    user.uid && getChats();
  }, [user.uid, dispatch]);

  const navigate = useNavigate();

  const userCardClickedHandler = async (idx, card) => {
    dispatch({
      type: "update-active-card",
      activeUserCard: idx,
    });

    dispatch({
      type: "update-display-chat-window",
      displayChatWindow: true,
    });

    dispatch({
      type: "update-searchbar-typed",
      searchBarTyped: false,
    });

    const searchUser = card[1].userInfo;

    const combinedId =
      user.uid > searchUser.uid
        ? user.uid + searchUser.uid
        : searchUser.uid + user.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", user.uid), {
          [`${combinedId}.userInfo`]: {
            uid: searchUser.uid,
            displayName: searchUser.displayName,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });

        const currentUser = (await getDoc(doc(db, "users", user.uid))).data();

        await updateDoc(doc(db, "userChats", searchUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }
    } catch (error) {}

    if (searchBarRef.current) searchBarRef.current.value = "";

    navigate(`/chats/${slugify(card[1].userInfo.displayName)}`);
  };

  const displaySearchBarStatus = useCallback(
    ({ userNotFound, userInput }) => {
      if (userNotFound && userInput) {
        dispatch({
          type: "add-search-card",
          searchList: [],
        });

        setMessage(
          getStatus({ main: `"${userInput}"`, secondary: "No users found" })
        );
      } else if (!userInput) setMessage(null);
    },
    [dispatch]
  );

  const getStatus = ({ main, secondary }) => {
    return <ContactScreenDefault main={main} secondary={secondary} />;
  };

  return (
    <ChatContext.Provider
      value={{
        cardState,
        dispatch,
        message,
        searchBarRef,
        displaySearchBarStatus,
        getStatus,
        userCardClickedHandler,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatHistory = () => {
  return useContext(ChatContext);
};
