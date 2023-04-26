import { ButtonGroup, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "../../components/IconButton/IconButton";

const rightBarButtons = [
  {
    icon: <SearchIcon />,
    tooltip: "Search",
    placement: "bottom-start",
  },
  {
    icon: <CallIcon />,
    tooltip: "Call",
    placement: "bottom-start",
  },
  {
    icon: <EditNoteIcon />,
    tooltip: "Notes",
    placement: "bottom-start",
  },
  {
    icon: <MoreVertIcon />,
    tooltip: "Settings",
    placement: "bottom-start",
  },
];

const RightContentBar = (props) => {
  const theme = useTheme();
  return (
    <ButtonGroup>
      {rightBarButtons.map((el) => (
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

export default RightContentBar;
