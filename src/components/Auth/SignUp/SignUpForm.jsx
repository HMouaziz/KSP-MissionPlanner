import { Input } from "@/components/ui/input.jsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PasswordStrengthMeter } from "@/components/Auth/PasswordStrengthMeter.jsx";
import { Button } from "@/components/ui/button.jsx";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(12, { message: "Password must be at least 12 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character",
    }),
});

export function SignUpForm({ handleSignUp }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    try {
      const e = handleSignUp(values);
      if (e) {
        form.setError("email", {
          type: "manual",
          message: "A User with this email already exists.",
        });
      }
    } catch (error) {
      if (error.error === "UserAlreadyExists") {
        form.setError("email", {
          type: "manual",
          message: "A User with this email already exists.",
        });
      } else {
        form.setError("form", {
          type: "manual",
          message: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4">
          <div className="grid gap-4">
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
                  <FormLabel className="flex justify-between">
                    Password
                    <button
                      type="button"
                      className="ml-2 text-sm text-amber-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <PasswordStrengthMeter password={password} />
          </div>
          <Button type="submit" className="w-full bg-amber-500">
            Create an account
          </Button>
        </div>
      </form>
    </Form>
  );
}
