import LeftContentBar from "./LeftContentBar";
import RightContentBar from "./RightContentBar";
import { useTheme } from "@emotion/react";
import SettingBar from "../../style/SettingBar";

const FeatureBar = (props) => {
  const theme = useTheme();

  return (
    <SettingBar
      sx={{
        padding: theme.spacing(2),
        backgroundColor: theme.palette.black[700],

        ...props.sx,
      }}
    >
      <LeftContentBar />
      <RightContentBar />
    </SettingBar>
  );
};

export default FeatureBar;
