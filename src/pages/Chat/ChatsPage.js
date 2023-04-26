import GridChat from "./GridChat";
import TopBar from "../../layouts/TopBar/TopBar";
import SideBar from "../../layouts/SideBar/SideBar";
import ContactList from "../../layouts/ContactList/ContactList";
import MessageWindow from "../../layouts/MessageWindow/MessageWindow";
import { Resizable } from "re-resizable";
import { useMediaQuery, useTheme, Box } from "@mui/material";
import { ChatContextProvider } from "../../Context/ChatContext";
import { SendMessageContextProvider } from "../../Context/SendMessageContext";

const ChatsPage = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const topBarHeight = "5rem";
  return (
    <ChatContextProvider>
      <GridChat>
        <SideBar />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TopBar sx={{ height: topBarHeight }} />
          <Box
            sx={{
              display: "grid",
              [theme.breakpoints.up("md")]: {
                gridTemplateColumns: "auto 1fr",
              },
              [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "1fr",
              },
              gridTemplateRows: "1fr",
              height: "100%",
            }}
          >
            <Resizable
              style={{ zIndex: 1 }}
              minWidth={matches ? 350 : "100%"}
              maxWidth={matches ? 500 : "100%"}
              enable={{
                top: false,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
            >
              <ContactList
                sx={{
                  height: `calc(100vh - ${topBarHeight})`,
                  [theme.breakpoints.up("md")]: {
                    borderRight: `solid 1px ${theme.palette.black[600]}`,
                  },
                }}
              />
            </Resizable>

            {matches && (
              <Resizable
                enable={{
                  top: false,
                  right: false,
                  bottom: false,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
              >
                <Box sx={{ height: "100%" }}>
                  <SendMessageContextProvider>
                    <MessageWindow />
                  </SendMessageContextProvider>
                </Box>
              </Resizable>
            )}
          </Box>
        </Box>
      </GridChat>
    </ChatContextProvider>
  );
};

export default ChatsPage;
