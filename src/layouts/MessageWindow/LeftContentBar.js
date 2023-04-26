import { ButtonGroup, useTheme } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";
import BasicButton from "../../style/BasicButton";
import IconButton from "../../components/IconButton/IconButton";
import { ChatHistory } from "../../Context/ChatContext";

const leftBarButtons = [
  {
    icon: <VolumeDownIcon />,
    tooltip: "Mute chat",
    placement: "bottom-end",
  },
  {
    icon: <OpenInNewOffIcon />,
    tooltip: "Open in separate window",
    placement: "bottom-end",
  },
];

const LeftContentBar = (props) => {
  const theme = useTheme();
  const { cardState } = ChatHistory();
  const { userList, activeUserCard } = cardState;
  const { displayName } = userList[activeUserCard][1].userInfo;
  return (
    <ButtonGroup>
      <BasicButton
        variant="body.2"
        sx={{
          fontSize: `${theme.typography.fs[16]} !important`,
          color: theme.palette.black[100],
          hover: {
            backgroundColor: theme.palette.black[700],
          },
        }}
      >
        {displayName}
      </BasicButton>
      {leftBarButtons.map((el) => (
        <IconButton
          title={el.tooltip}
          placement={el.placement}
          sx={{
            color: theme.palette.black[100],
            hover: {
              color: theme.palette.black[100],
            },
          }}
          key={Math.random()}
        >
          {el.icon}
        </IconButton>
      ))}
    </ButtonGroup>
  );
};

export default LeftContentBar;
