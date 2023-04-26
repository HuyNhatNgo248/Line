import TagFacesIcon from "@mui/icons-material/TagFaces";
import IconButton from "../../components/IconButton/IconButton";
import { Box, ButtonGroup, useTheme } from "@mui/material";
import { UnifiedComponent } from "stipop-react-sdk";
import { useState } from "react";

import Draggable from "react-draggable";
import { SendMessage } from "../../Context/SendMessageContext";
import { ChatHistory } from "../../Context/ChatContext";

const rightBarButtons = [
  {
    icon: <TagFacesIcon />,
    tooltip: "Stickers",
    placement: "top",
  },
];

const StickerSearch = (props) => {
  const theme = useTheme();
  const { stickerMessageSubmitHandler } = SendMessage();
  const { dispatch } = ChatHistory();

  const stickerClickHandler = ({ url }) => {
    stickerMessageSubmitHandler(url);
    dispatch({
      type: "move-top",
    });
    props.setOpen(false);
  };
  return (
    <Draggable>
      <Box
        sx={{
          zIndex: 1,
          position: "absolute",
          top: "-1000%",
          right: "10%",
          fontSize: theme.typography.fs[16],
          fontFamily: "sans-serif",
          fontWeight: theme.typography.fontWeightLight,
        }}
      >
        <UnifiedComponent
          loadingColor={theme.palette.green[700]}
          stickerClick={stickerClickHandler}
          storeClick={() => {}} // true
          backgroundColor={theme.palette.black[800]}
          scroll={false}
          size={{
            height: 500,
            imgSize: 90,
          }}
          border={{
            border: "none",
            radius: {
              leftTop: 15,
              rightTop: 15,
              leftBottom: 15,
              rightBottom: 15,
            },
          }}
          menu={{
            backgroundColor: theme.palette.black[700],
            bottomLine: "none",
            selectedLine: `solid 2px ${theme.palette.black[200]}`,
          }}
          input={{
            radius: 10,
            backgroundColor: theme.palette.black[700],
            color: theme.palette.black[200],
            border: "none",
            search: theme.palette.black[200],
          }}
          params={{
            apikey: "c6e0d703e56434eb324311b8bf2db4a1",
            userId: "huyngo248",
          }}
        />
      </Box>
    </Draggable>
  );
};

const Sticker = (props) => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const theme = useTheme();

  return (
    <>
      {open && <StickerSearch setOpen={setOpen} />}
      <ButtonGroup>
        {rightBarButtons.map((el) => (
          <IconButton
            performAction={clickHandler}
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
    </>
  );
};

export default Sticker;
