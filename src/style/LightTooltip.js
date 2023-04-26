import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: theme.customTooltip,
}));

export default LightTooltip;
