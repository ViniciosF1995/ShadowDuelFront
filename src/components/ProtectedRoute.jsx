import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// import MenuDrawer from "./MenuDrawer";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? <Navigate to="/batalhas" /> : <Navigate to="/" />;
};

export default ProtectedRoute;