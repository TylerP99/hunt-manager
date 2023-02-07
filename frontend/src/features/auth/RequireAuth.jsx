import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentToken } from "./authSlice";

function RequireAuth() {

  const token = useSelector(getCurrentToken);
  const location = useLocation();  

  return (
    token ? <Outlet/>
          : <Navigate to="/login" state={{from: location}} replace />
  )
}

export default RequireAuth