import IconButton from "../IconButton/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { TextField, useTheme, Stack } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { ChatHistory } from "../../Context/ChatContext";
import { UserAuth } from "../../Context/AuthContext";

const ContactSearchBar = (props) => {
  const theme = useTheme();
  const { user } = UserAuth();
  const { searchBarRef, dispatch, displaySearchBarStatus, getStatus } =
    ChatHistory();

  const userInputHandler = async (e) => {
    const value = e.target.value;

    const q = query(collection(db, "users"), where("displayName", "==", value));

    try {
      const querySnapshot = await getDocs(q);

      displaySearchBarStatus({
        userNotFound: !querySnapshot._snapshot.docChanges.length,
        userInput: value,
      });

      const res = [];
      querySnapshot.forEach((doc) => {
        res.push(doc.data());
      });

      dispatch({
        type: "add-search-card",
        searchList: res.map((doc) => {
          const combinedId =
            user.uid > doc.uid ? user.uid + doc.uid : doc.uid + user.uid;

          return [
            combinedId,
            {
              userInfo: {
                uid: doc.uid,
                displayName: doc.displayName,
              },
            },
          ];
        }),
      });

      dispatch({
        type: "update-searchbar-typed",
        searchBarTyped: !!value.length,
      });
    } catch (error) {
      getStatus({
        main: "Opps",
        secondary: "Something went wrong",
      });
    }
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        padding: theme.spacing(2, 0, 2, 3),
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        sx={{
          width: "100%",
          boxShadow: "none",
          backgroundColor: theme.palette.black[600],
          borderRadius: "0.5rem",
        }}
      >
        <IconButton
          sx={{
            padding: theme.spacing(0, 2, 0, 4),
            minWidth: "min-content",
          }}
        >
          <SearchIcon />
        </IconButton>
        <TextField
          inputRef={searchBarRef}
          onChange={userInputHandler}
          sx={{
            "& fieldset": { border: "none" },
            width: "100%",
            input: {
              color: theme.palette.black[100],
              fontWeight: theme.typography.fontWeightLight,
              fontSize: `calc(${theme.typography.fs[16]} - 0.2rem)`,
              padding: theme.spacing(2.5, 2.5, 2.5, 0),
            },
          }}
          id="outlined-search"
          placeholder="Search users"
          type="text"
          autoComplete="off"
          variant="outlined"
        />
      </Stack>

      <IconButton
        title="Time received"
        placement="bottom-end"
        sx={{
          color: theme.palette.black[100],
          hover: {
            color: theme.palette.black[100],
          },
        }}
      >
        <SwapVertIcon />
      </IconButton>
    </Stack>
  );
};

export default ContactSearchBar;
