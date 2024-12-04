import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Main from "../pages/Main";
// import MenuDrawer from "./MenuDrawer";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? <Main /> : <Navigate to="/" />;
};

export default ProtectedRoute;