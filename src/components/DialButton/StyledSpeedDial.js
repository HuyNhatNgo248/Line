import { SpeedDial, speedDialClasses, styled } from "@mui/material";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  [`& .${speedDialClasses.fab}`]: {
    backgroundColor: theme.palette.green[900],
    boxShadow: "none",

    "&:hover": {
      background: theme.palette.green[900],
    },
  },
}));

export default StyledSpeedDial;
