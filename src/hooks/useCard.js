import { useReducer } from "react";

const setCard = (state, lst) => {
  state.userList = lst;
  return { ...state };
};

const moveCardTop = (state) => {
  const { userList } = state;
  const user = userList.splice(state.activeUserCard, 1);
  let i;
  const len = userList.length;
  for (i = 0; i < len; i++) if (!userList[i][1].userInfo.pin) break;
  userList.splice(i, 0, ...user);
  state.activeUserCard = i;
  return state;
};

// const hideCard = (state) => {
//   const { userList } = state;
//   userList.splice(state.hoveredItem, 1);
//   state.hoveredItem = -1;
//   if (state.activeUserCard === state.hoveredItem) {
//     state.chatWindow = null;
//     state.activeUserCard = -1;
//   }
//   return { ...state };
// };

// const togglePin = (state) => {
//   const { userList } = state;
//   const prevPin = userList[hoveredItem][1].pin;
//   userList[hoveredItem][1].pin = !prevPin;
//   const item = userList.splice(state.hoveredItem, 1);

//   if (!prevPin) {
//     //pin
//     const len = userList.length;
//     let i;
//     for (i = 0; i < len; i++) if (!userList[i][1].pin) break;
//     userList.splice(i, 0, ...item);
//     if (state.activeUserCard === state.hoveredItem) state.activeUserCard = i;
//   } else {
//     //unpin
//     let unpinnedList = userList.filter((el) => !el[1].pin);
//     let pinnedList = userList.filter((el) => el[1].pin);
//     unpinnedList.push(...item);
//     unpinnedList.sort((a, b) => b.lastSentTimeStamp - a.lastSentTimeStamp);
//     userList = pinnedList.concat(unpinnedList);
//   }
//   return { ...state };
// };

const setSearchCard = (state, searchList) => {
  state.searchList = searchList;
  return { ...state };
};

const updateField = (state, action, field) => {
  state[field] = action[field];
  return state;
};

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "add-card":
      newState = setCard(state, action.userList);
      break;
    case "add-search-card":
      newState = setSearchCard(state, action.searchList);
      break;
    case "move-top":
      newState = moveCardTop(state);
      break;
    case "hide-card":
      //   newState = hideCard(state);
      //   break;
      // case "toggle-pin":
      //   newState = togglePin(state);
      break;

    case "update-active-card":
      newState = updateField(state, action, "activeUserCard");
      break;
    case "update-display-chat-window":
      newState = updateField(state, action, "displayChatWindow");
      break;
    case "update-searchbar-typed":
      newState = updateField(state, action, "searchBarTyped");
      break;
    default:
      newState = state;
  }

  return newState;
};

const INITIAL_STATE = {
  activeUserCard: -1,
  userList: [],
  searchList: [],
  displayChatWindow: false,
  searchBarTyped: false,
};

const useCard = () => {
  const [cardState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return [cardState, dispatch];
};

export default useCard;
