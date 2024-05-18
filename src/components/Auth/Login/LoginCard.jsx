import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { NavLink } from "react-router-dom";
import {LoginForm} from "@/components/Auth/Login/LoginForm.jsx";
import {authService} from "@/services/authService.js";
import {useAuth} from "@/hooks/useAuth.js";
import {encryptData, generateHMAC, hashPassword} from "@/utils/authentication.js";

export function LoginCard() {
  const {checkAuth, loginUser} = useAuth()

  const handleLogIn = async (formData) => {
    await loginUser(formData);
    await checkAuth();
  }
  return (
    <Card className="mx-auto max-w-sm my-24">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm handleLogIn={handleLogIn}/>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <NavLink to="/register" className="underline">
            Sign up
          </NavLink>
        </div>
      </CardContent>
    </Card>
  );
}
