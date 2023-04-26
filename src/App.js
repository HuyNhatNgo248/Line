import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import ChatsPage from "./pages/Chat/ChatsPage";
import AuthPage from "./pages/Auth/AuthPage";
import CustomStyles from "./base/CustomStyles";
import ErrorPage from "./pages/Error/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <AuthPage authType="login" />,
        },
        {
          path: "/login",
          element: <AuthPage authType="login" />,
        },
        {
          path: "/signup",
          element: <AuthPage authType="signup" />,
        },
        {
          path: "/chats",
          element: (
            <ProtectedRoutes>
              <ChatsPage />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/chats/:username",
          element: (
            <ProtectedRoutes>
              <ChatsPage />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
      <CustomStyles>
        <RouterProvider router={router} />
      </CustomStyles>
    </AuthContextProvider>
  );
}

export default App;
