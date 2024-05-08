import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { NavLink } from "react-router-dom";
import {SignUpForm} from "@/components/Auth/SignUpForm/SignUpForm.jsx";

export function SignUp() {

  const handleSignUp = (data) => {
    //split data

    //hash password

    //format data
    const userData = JSON.stringify({ username: 'user', password: 'pass' });
    //set up HMAC
    const secretKey = 'your_secret_key'; // This should be securely shared and stored

    const hmac = generateHMAC(userData, secretKey);
    //send request
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
