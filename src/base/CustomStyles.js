import { Fragment } from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";

const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      html: {
        fontSize: "62.5%",
      },
      "*::before, *::after": {
        padding: 0,
        margin: 0,
        boxSizing: "inherit",
      },

      body: {
        boxSizing: "border-box",
        minHeight: "100vh",
        overflow: "hidden",
        margin: 0,
      },

      "img, picture, svg, video": {
        display: "block",
        maxWidth: "100%",
      },

      "input,textarea,button,select": {
        font: "inherit",
      },

      a: {
        textDecoration: "none",
      },

      "li ": {
        listStyle: "none",
      },
      input: {
        backgroundColor: "inherit",
        border: "none",
      },
      button: {
        backgroundColor: "inherit",
        border: "none",
        color: "inherit",
      },
      /* ===== Scrollbar CSS ===== */
      /* Firefox */
      "*": {
        scrollbarWidth: "auto",
        scrollbarColor: "#555 #717171",
      },
      /* Chrome, Edge, and Safari */
      "*::-webkit-scrollbar": {
        width: "1rem",
      },
      "*::-webkit-scrollbar-track ": {
        background: "inherit",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#717171",
        borderRadius: " 10px",
        border: "0px solid #ffffff",
      },
    }}
  />
);

let theme = createTheme({
  typography: {
    fontFamily: ["lato", "sans-serif"].join(","),
    htmlFontSize: 10,
    fs: {
      4: "0.4rem",
      8: "0.8rem",
      12: "1.2rem",
      16: "1.6rem",
      20: "2rem",
      24: "2.4rem",
      28: "2.8rem",
      32: "3.2rem",
      36: "3.6rem",
      40: "4rem",
      44: "4.4rem",
    },

    fw: {
      thin: 100,
      light: 300,
      regular: 400,
      bold: 700,
      black: 900,
    },
    bdr: {
      xs: "0.5rem",
      sm: "1rem",
      md: "2rem",
      lg: "3rem",
      xl: "4rem",
    },
  },
  palette: {
    green: {
      900: "#06c755",
      800: "#22cd68",
      700: "#3dd37b",
      600: "#59da8e",
      500: "#75e0a1",
      400: "#90e6b3",
      300: "#acecc6",
      200: "#c8f3d9",
      100: "#e3f9ec",
    },
    black: {
      900: "#000",
      800: "#1c1c1c",
      700: "#393939",
      600: "#555555",
      500: "#717171",
      400: "#8e8e8e",
      300: "#aaaaaa",
      200: "#c6c6c6",
      100: "#e3e3e3",
    },

    border: {
      main: "#555",
    },
    tonalOffset: 0.2,
    contrastThreshold: 4.5,
  },

  spacing: 4,
  components: {
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

theme = createTheme(theme, {
  customTooltip: {
    backgroundColor: theme.palette.black[100],
    color: theme.palette.black[800],
    fontSize: theme.typography.fs[12],
    padding: theme.spacing(2),
  },
});

theme = responsiveFontSizes(theme);

const CustomStyles = ({ children }) => {
  return (
    <Fragment>
      {inputGlobalStyles}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  );
};

export default CustomStyles;
