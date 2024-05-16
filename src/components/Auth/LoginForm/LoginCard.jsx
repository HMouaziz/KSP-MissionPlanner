import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { NavLink } from "react-router-dom";
import {LoginForm} from "@/components/Auth/LoginForm/LoginForm.jsx";
import hashPassword from "@/auth/hashPassword.js";
import {encryptData} from "@/auth/encryptData.js";
import {authService} from "@/services/authService.js";
import generateHMAC from "@/auth/generateHMAC.js";
import axiosInstance from "@/services/apiService.js";

export function LoginCard() {

  const handleLogIn = async (data) => {
    try {
      //split data
      const {email, password} = data
      //hash password
      const hashedPassword = hashPassword(password);
      //format data
      const userData = {email, password: hashedPassword};
      // Encrypt data
      const encryptedData = await encryptData(JSON.stringify(userData));
      //set up HMAC
      const { requestId, secretKey } = await authService.getSecretKey();
      const hmac = generateHMAC(userData, secretKey);
      //send request
      await axiosInstance.post('/api/v1/auth/signup', {data: encryptedData}, {
        headers: {
          'x-hmac': hmac,
          'requestId': requestId,
        },
      })
    } catch (error) {
      console.error('Signup failed:', error);
    }
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
