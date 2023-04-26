import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import IconButton from "../../components/IconButton/IconButton";
import { useTheme } from "@emotion/react";
import { ButtonGroup } from "@mui/material";
import BasicButton from "../../style/BasicButton";
const TopBar = (props) => {
  const theme = useTheme();
  return (
    <ButtonGroup
      sx={{
        fontSize: "inherit",
        paddingLeft: theme.spacing(2),
        borderBottom: `solid 1px ${theme.palette.black[600]}`,
        ...props.sx,
      }}
    >
      <BasicButton>All</BasicButton>

      <BasicButton>Friends</BasicButton>

      <IconButton sx={{ color: theme.palette.black[400] }}>
        <DisplaySettingsIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default TopBar;
