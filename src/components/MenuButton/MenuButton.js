import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import BasicButton from "../../style/BasicButton";
import StyledMenu from "../../style/StyledMenu";

const MenuButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const menuItemClickHandler = (handler) => {
    handler && handler();
    setAnchorEl(null);
  };

  return (
    <div>
      <BasicButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={props.sx}
      >
        {props.summary}
      </BasicButton>
      <StyledMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: props?.anchorOrigin?.vertical || "top",
          horizontal: props?.anchorOrigin?.horizontal || "right",
        }}
        sx={{
          backgroundColor: "black",
        }}
      >
        {[...Object.entries(props.menuItems)].map(([name, handler]) => (
          <MenuItem
            sx={{ backgroundColor: "black" }}
            key={Math.random()}
            onClick={(event) => {
              event.stopPropagation();
              menuItemClickHandler.call(this, handler);
            }}
          >
            {name}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default MenuButton;
