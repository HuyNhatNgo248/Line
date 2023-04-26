import { Button, styled } from "@mui/material";

const BasicButton = styled(Button)(({ theme, sx }) => {
  const hoverStyles = sx?.hover;
  const styles = sx || {};
  return {
    "&": {
      //general styles
      color: theme.palette.black[500],
      textTransform: "capitalize",
      border: "none",
      //styles to override
      ...styles,

      "&:hover": {
        //general styles
        border: "none",
        backgroundColor: "inherit",
        color: theme.palette.black[100],
        //styles to override
        ...hoverStyles,
      },
    },
  };
});

export default BasicButton;
