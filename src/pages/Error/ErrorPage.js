import {
  Stack,
  Typography,
  useTheme,
  Container,
  ButtonGroup,
} from "@mui/material";
import BasicButton from "../../style/BasicButton";
import useRouteRedirect from "../../hooks/useRouteRedirect";

const ErrorPage = (props) => {
  const navigateBackHandler = useRouteRedirect(-1);
  const navigateHomeHandler = useRouteRedirect("/");

  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.black[800],
        width: "100%",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(0, 6, 0, 6),
          alignItems: "center",
        }}
      >
        <Typography
          align="center"
          variant="h2"
          color={theme.palette.black[100]}
          gutterBottom
          sx={{
            color: theme.palette.black[100],
            [theme.breakpoints.down(400)]: {
              fontSize: theme.typography.fs[28],
            },
            [theme.breakpoints.down(350)]: {
              fontSize: theme.typography.fs[24],
            },
          }}
        >
          404. Page not found
        </Typography>
        <Typography
          align="center"
          variant="h6"
          fontWeight={theme.typography.fontWeightLight}
          color={theme.palette.black[400]}
          gutterBottom
          sx={{
            [theme.breakpoints.down(400)]: {
              fontSize: theme.typography.fs[16],
            },
            [theme.breakpoints.down(350)]: {
              fontSize: theme.typography.fs[12],
            },
          }}
        >
          The page either does not exist, or you have no network connection.
        </Typography>
        <ButtonGroup>
          <BasicButton onClick={navigateHomeHandler}>
            <Typography
              color={theme.palette.black[400]}
              fontWeight={theme.typography.fontWeightLight}
              variant="h6"
              sx={{
                "&:hover": {
                  color: `${theme.palette.black[100]} !important`,
                },
              }}
            >
              Home
            </Typography>
          </BasicButton>
          <BasicButton onClick={navigateBackHandler}>
            <Typography
              color={theme.palette.black[400]}
              fontWeight={theme.typography.fontWeightLight}
              variant="h6"
              sx={{
                "&:hover": {
                  color: `${theme.palette.black[100]} !important`,
                },
              }}
            >
              Back
            </Typography>
          </BasicButton>
        </ButtonGroup>
      </Container>
    </Stack>
  );
};

export default ErrorPage;
