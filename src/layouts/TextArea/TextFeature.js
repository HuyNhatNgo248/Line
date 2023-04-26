import { ButtonGroup, useTheme } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CropIcon from "@mui/icons-material/Crop";
import IconButton from "../../components/IconButton/IconButton";

const rightBarButtons = [
  {
    icon: <AttachFileIcon />,
    tooltip: "Send file",
    placement: "top",
  },
  {
    icon: <BookmarkIcon />,
    tooltip: "Keep",
    placement: "top",
  },
  {
    icon: <CropIcon />,
    tooltip: "Capture screen",
    placement: "top",
  },
];

const TextFeature = (props) => {
  const theme = useTheme();
  return (
    <ButtonGroup>
      {rightBarButtons.map((el) => (
        <IconButton
          title={el.tooltip}
          placement={el.placement}
          sx={{
            paddingLeft: theme.spacing(5),
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

export default TextFeature;
