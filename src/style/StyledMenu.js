import { styled, Menu } from "@mui/material";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiList-root": {
    backgroundColor: theme.palette.black[600],
    border: "none",

    "& .MuiMenuItem-root": {
      fontSize: theme.typography.fs[12],
      color: theme.palette.black[100],
    },
  },
}));

export default StyledMenu;
