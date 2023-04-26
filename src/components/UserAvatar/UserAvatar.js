import { Avatar, Badge, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PushPinIcon from "@mui/icons-material/PushPin";

const UserAvatar = (props) => {
  const theme = useTheme();
  const profilePic = props.url ? (
    <Avatar src={props.url} alt="user profile" />
  ) : (
    <PersonIcon
      sx={{
        ...props.sx,
        backgroundColor: theme.palette.black[400],
        color: theme.palette.black[200],
        borderRadius: "50%",
      }}
    />
  );

  const content = (
    <Badge
      overlap="circular"
      sx={{
        ...props.sx,
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        props.pin && (
          <PushPinIcon
            sx={{
              width: theme.spacing(4),
              height: theme.spacing(4),
              border: `2px solid transparent`,
              borderRadius: "50%",
              backgroundColor: theme.palette.green[700],
              fontSize: `${theme.typography.fs[12]} !important`,
              transform: "rotate(25deg)",
              color: theme.palette.black[100],
            }}
          />
        )
      }
    >
      {profilePic}
    </Badge>
  );
  return content;
};

export default UserAvatar;
