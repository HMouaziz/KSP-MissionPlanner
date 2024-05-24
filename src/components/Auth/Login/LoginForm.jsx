import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button.jsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.jsx";
import { Input } from "@/components/ui/input.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginForm = ({handleLogIn}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await handleLogIn(values);
      navigate("/", { replace: true });
    } catch (error) {
      if (error.message === 'UserNotFound') {
        form.setError('email', { type: 'manual', message: 'User does not exist. Please check your email and try again.' });
      } else if (error.message === 'PasswordMismatch') {
        form.setError('password', { type: 'manual', message: 'Incorrect password. Please try again.' });
      } else {
        form.setError('form', { type: 'manual', message: 'An unexpected error occurred. Please try again later.' });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex justify-between'>Password
                    <button
                      type="button"
                      className="ml-2 text-sm text-amber-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </FormLabel>
                  <FormControl>
                    <Input type={showPassword ? "text" : "password"} placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full bg-amber-500">Log In</Button>
        </div>
      </form>
    </Form>
  );
};