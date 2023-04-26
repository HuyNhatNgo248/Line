import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SmsIcon from "@mui/icons-material/Sms";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CropFreeIcon from "@mui/icons-material/CropFree";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import StyledSpeedDial from "./StyledSpeedDial";
import MessageIcon from "@mui/icons-material/Message";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { SpeedDialAction } from "@mui/material";
import { useTheme } from "@mui/material";
const actions = [
  { icon: <SmsIcon />, tooltip: "New chat", placement: "left" },
  { icon: <QrCode2Icon />, tooltip: "My QR code", placement: "left" },
  { icon: <CropFreeIcon />, tooltip: "Crop", placement: "left" },
  { icon: <VolumeMuteIcon />, tooltip: "Mute", placement: "left" },
];

const DialButton = (props) => {
  const theme = useTheme();

  return (
    <StyledSpeedDial
      ariaLabel="SpeedDial basic"
      sx={props.sx}
      icon={
        <SpeedDialIcon
          icon={<MessageIcon />}
          openIcon={<MarkUnreadChatAltIcon />}
        />
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={Math.random()}
          icon={action.icon}
          tooltipTitle={action.tooltip}
          slotProps={{
            tooltip: {
              sx: theme.customTooltip,
            },
          }}
        />
      ))}
    </StyledSpeedDial>
  );
};

export default DialButton;
