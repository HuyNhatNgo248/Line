import { ButtonGroup, useTheme } from "@mui/material";
import IconButton from "../../components/IconButton/IconButton";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CropIcon from "@mui/icons-material/Crop";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuButton from "../../components/MenuButton/MenuButton";
import LightTooltip from "../../style/LightTooltip";
import { UserAuth } from "../../Context/AuthContext";
import useRouteRedirect from "../../hooks/useRouteRedirect";

const settingAttributes = [
  {
    icon: <VideoCallIcon />,
    tooltip: "Meeting",
    placement: "right-end",
  },
  {
    icon: <CropIcon />,
    tooltip: "Capture screen",
    placement: "right-end",
  },
  {
    icon: <VolumeDownIcon />,
    tooltip: "Mute all notifications",
    placement: "right-end",
  },
  {
    icon: <BookmarkIcon />,
    tooltip: "Keep",
    placement: "right-end",
  },
];

const ChatSettings = (props) => {
  const theme = useTheme();
  const { logout } = UserAuth();
  const navigate = useRouteRedirect("/");

  const handleLogout = async () => {
    try {
      await logout();
      navigate();
      console.log("You are logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ButtonGroup
      sx={{
        flexDirection: "column",
        gap: theme.spacing(2),
      }}
    >
      {settingAttributes.map((el) => (
        <IconButton
          title={el.tooltip}
          placement={el.placement}
          sx={{
            hover: {
              color: theme.palette.black[100],
            },
          }}
          key={Math.random()}
        >
          {el.icon}
        </IconButton>
      ))}

      <MenuButton
        sx={{
          padding: 0,
          hover: {
            backgroundColor: "inherit",
          },
        }}
        summary={
          <LightTooltip title={"Settings"} placement={"right-end"}>
            <MoreHorizIcon />
          </LightTooltip>
        }
        menuItems={{
          Settings: undefined,
          Help: undefined,
          "About LINE": undefined,
          "Log out": handleLogout,
        }}
      />
    </ButtonGroup>
  );
};

export default ChatSettings;
