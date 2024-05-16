import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card.jsx";
import {NavLink} from "react-router-dom";
import {SignUpForm} from "@/components/Auth/SignUpForm/SignUpForm.jsx";
import hashPassword from "@/auth/hashPassword.js";
import {authService} from "@/services/authService.js";
import generateHMAC from "@/auth/generateHMAC.js";
import {encryptData} from "@/auth/encryptData.js";

export function SignUp() {

  const handleSignUp = async (data) => {
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
      const {requestId, secretKey} = await authService.getSecretKey()
      const hmac = generateHMAC(encryptedData, secretKey);
      //send request
      const response = await authService.registerUser(encryptedData, hmac, requestId)
      console.log(response)
    } catch (error) {
      console.error('Signup failed:', error);
    }
  }

  return (
    <Card className="mx-auto max-w-sm my-24">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm handleSignUp={handleSignUp}/>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <NavLink to="/login" className="underline">
            Sign in
          </NavLink>
        </div>
      </CardContent>
    </Card>
  );
}
