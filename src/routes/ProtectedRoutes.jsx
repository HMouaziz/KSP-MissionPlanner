import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "@/hooks/useAuth.js";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/401" replace />;
  }

  return <Outlet />;
};
