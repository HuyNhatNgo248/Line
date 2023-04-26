import ContactSearchBar from "../../components/ContactSearchBar/ContactSearchBar";
import List from "@mui/material/List";

import { Container } from "@mui/material";
import DialButton from "../../components/DialButton/DialButton";
import UserCard from "../../components/UserCard/UserCard";
import { ChatHistory } from "../../Context/ChatContext";
import ContactScreenDefault from "./ContactScreenDefault";

const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

const getTime = (date, latestMessage) => {
  if (!latestMessage) return "";
  const lastSentTime = date ? date.seconds * 1000 : 0;
  const timeDiff = new Date().getTime() - lastSentTime;
  let time = "";

  let nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 1);

  if (timeDiff <= 4 * 60 * 1000) time = "Just now";
  else if (timeDiff > 4 * 60 * 1000 && timeDiff < 6 * 60 * 1000)
    time = "5 mins ago";
  else if (timeDiff > 9 * 60 * 1000 && timeDiff < 11 * 60 * 1000)
    time = "10 mins ago";
  else if (lastSentTime < nextDate)
    time = new Date(lastSentTime).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  else time = new Date(lastSentTime).toLocaleDateString(userLocale);
  return time;
};

const ContactList = (props) => {
  const {
    cardState,
    userCardClickedHandler,
    message: errorMessage,
  } = ChatHistory();

  const { userList, activeUserCard, searchList, searchBarTyped } = cardState;

  let content;

  if (!searchBarTyped)
    content = userList.length ? (
      <List
        sx={{
          width: "100%",
          height: "max-content",
          bgcolor: "background.paper",
          position: "relative",
          backgroundColor: "inherit",
        }}
      >
        {userList
          .sort((a, b) => b[1].date - a[1].date)
          .map(([key, { date, userInfo, latestMessage }], idx) => {
            return (
              <UserCard
                active={idx === activeUserCard}
                idx={idx}
                pin={userInfo.pin}
                displayName={userInfo.displayName}
                latestMessage={latestMessage?.text || ""}
                latestSent={getTime(date, latestMessage)}
                key={key}
                performAction={() => userCardClickedHandler(idx, userList[idx])}
              />
            );
          })}
      </List>
    ) : (
      <ContactScreenDefault
        main="Let's start chatting!"
        secondary="Start a new conversation"
      />
    );
  else {
    content = searchList.length ? (
      <List
        sx={{
          width: "100%",
          height: "max-content",
          bgcolor: "background.paper",
          position: "relative",
          backgroundColor: "inherit",
        }}
      >
        {searchList.map(([key, { date, userInfo, latestMessage }], idx) => (
          <UserCard
            active={idx === activeUserCard}
            type="search"
            idx={idx}
            pin={userInfo.pin}
            displayName={userInfo.displayName}
            latestMessage={latestMessage?.text || ""}
            latestSent={getTime(date, latestMessage)}
            key={key}
            performAction={() => userCardClickedHandler(idx, searchList[idx])}
          />
        ))}
      </List>
    ) : (
      errorMessage
    );
  }

  return (
    <Container
      sx={{
        padding: "0 !important",
        overflowY: "overlay",
        ...props.sx,
      }}
    >
      <ContactSearchBar />
      {content}
      <DialButton
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "80%",
          width: "min-content",
        }}
      />
    </Container>
  );
};

export default ContactList;
