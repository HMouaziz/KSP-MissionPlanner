import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { NavLink } from "react-router-dom";
import { SignUpForm } from "@/components/Auth/SignUp/SignUpForm.jsx";
import { useAuth } from "@/hooks/useAuth.js";

export function SignUp() {
  const { registerUser, loginUser } = useAuth();

  const handleSignUp = async (formData) => {
    try {
      await registerUser(formData);
      setTimeout(async () => {
        await loginUser(formData);
      }, 1000);
    } catch (error) {
      if (error.message === "UserAlreadyExists") {
        return { error: "UserAlreadyExists" };
      } else {
        console.error("Unexpected error:", error);
        throw error;
      }
    }
  };

  return (
    <Card className="mx-auto max-w-sm my-24">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm handleSignUp={handleSignUp} />
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
