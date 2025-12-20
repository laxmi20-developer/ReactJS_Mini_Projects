import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RoleRoute({ allowedRoles }) {
  const { role } = useAuth();

  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" replace />
  );
}

export default RoleRoute;
