import { useNavigate } from "react-router-dom";
import {LoginPage} from "@/pages/LoginPage/LoginPage.jsx";
import {useAuth} from "@/hooks/useAuth.js";


const Logout = () => {
  const navigate = useNavigate();
  const {clearAuthenticated} = useAuth()

  const handleLogout = () => {
    clearAuthenticated()
    navigate("/", { replace: true });
  };

  // Automatically logout after 3 seconds
  setTimeout(() => {
    handleLogout(); // Invoke the logout action
  }, 3 * 1000);

  return <LoginPage />;
};

export default Logout;
