import UserSettings from "./UserSettings";
import ChatSettings from "./ChatSettings";
import SettingBar from "../../style/SettingBar";
import { useTheme } from "@mui/material";

const SideBar = (props) => {
  const theme = useTheme();
  return (
    <SettingBar
      sx={{
        backgroundColor: theme.palette.black[800],
        fontSize: theme.typography.fs[28],
        textAlign: "center",
        flexDirection: "column",
        padding: theme.spacing(4, 0, 4, 0),
        borderTopRightRadius: theme.typography.bdr["lg"],
        borderBottomRightRadius: theme.typography.bdr["lg"],
        ...props.sx,
      }}
    >
      <UserSettings />
      <ChatSettings />
    </SettingBar>
  );
};

export default SideBar;
