import { Stack } from "@mui/material";
const SettingBar = (props) => {
  return (
    <Stack
      className={props.className}
      justifyContent="space-between"
      direction="row"
      sx={{
        width: "100%",
        ...props.sx,
      }}
    >
      {props.children}
    </Stack>
  );
};

export default SettingBar;
