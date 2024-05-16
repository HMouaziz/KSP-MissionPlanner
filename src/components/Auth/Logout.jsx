import { useNavigate } from "react-router-dom";
import {LoginPage} from "@/pages/LoginPage/LoginPage.jsx";
import axiosInstance from "@/services/apiService.js";


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axiosInstance.post('/api/v1/auth/logout');
    navigate("/", { replace: true });
  };

  // Automatically logout after 3 seconds
  setTimeout(() => {
    handleLogout(); // Invoke the logout action
  }, 3 * 1000);

  return <LoginPage />;
};

export default Logout;
