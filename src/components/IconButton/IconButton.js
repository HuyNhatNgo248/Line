import LightTooltip from "../../style/LightTooltip";
import { useTheme } from "@mui/material";
import BasicButton from "../../style/BasicButton";

const IconButton = (props) => {
  const theme = useTheme();

  const clickHandler = () => {
    props.performAction && props.performAction();
  };

  //extract hover styles and remove it from props.sx object
  const hoverStyles = props?.sx?.hover;
  const styles = props.sx || {};

  const sx = {
    //general styles
    color: theme.palette.black[500],
    //styles to override
    ...styles,

    "&:hover": {
      //general styles
      backgroundColor: "inherit",

      //styles to override
      ...hoverStyles,
    },
  };

  return (
    <LightTooltip title={props.title} placement={props.placement || "top-end"}>
      <BasicButton
        onClick={clickHandler}
        sx={sx}
        variant={props.variant || "text"}
      >
        {props.children}
      </BasicButton>
    </LightTooltip>
  );
};

export default IconButton;
