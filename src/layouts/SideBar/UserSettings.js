import { ButtonGroup, useTheme } from "@mui/material";
import IconButton from "../../components/IconButton/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useReducer } from "react";

const connectionAttributes = {
  activeButton: 1,
  buttons: [
    {
      icon: <PersonIcon />,
      tooltip: "Friends",
      active: false,
    },
    {
      icon: <MessageIcon />,
      tooltip: "Chats",
      active: true, //default
    },
    {
      icon: <PersonAddIcon />,
      tooltip: "Add friends",
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  if (state.activeButton === action.idx) return state;

  let newState = { ...state };

  //set the previous active button to false
  newState.buttons[state.activeButton].active = false;

  //set the new active button to true
  newState.buttons[action.idx].active = true;

  //update the active button index
  newState.activeButton = action.idx;

  return newState;
};

const UserSettings = (props) => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, connectionAttributes);

  return (
    <ButtonGroup
      sx={{
        flexDirection: "column",
        gap: theme.spacing(5),
      }}
    >
      {state.buttons.map((el, idx) => {
        let colorActive = {};
        if (el.active) colorActive = { color: theme.palette.black[100] };
        return (
          <IconButton
            title={el.tooltip}
            performAction={() => dispatch({ idx })}
            placement={"right-end"}
            sx={{
              ...colorActive,
              hover: {
                color: theme.palette.black[100],
              },
            }}
            key={Math.random()}
          >
            {el.icon}
          </IconButton>
        );
      })}
    </ButtonGroup>
  );
};

export default UserSettings;
