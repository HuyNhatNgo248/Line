import { useNavigate } from "react-router-dom";

const useRouteRedirect = (path) => {
  const navigate = useNavigate();

  return () => navigate(path);
};

export default useRouteRedirect;
