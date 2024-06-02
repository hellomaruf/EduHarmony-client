import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Utils/Spinner";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return <Spinner />;
  }
  return <Navigate to="/signIn" state={location.pathname} replace="true" />;
}

export default PrivateRoute;
