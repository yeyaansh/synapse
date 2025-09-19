// src/pages/LoginPage.jsx

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router"; // Use react-router-dom
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"; // Using sonner as per your register page

// Import the specific shadcn/ui Form components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Toaster } from "../../components/ui/sonner";
import { useDispatch, useSelector } from "react-redux";
import { loginGlobal } from "../../redux/slice1";
import { useEffect } from "react";

export default function LoginPage({ className, ...props }) {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) navigate("/");
  // }, [isAuthenticated]);

  const dispatch = useDispatch();
  // 1. Define your Zod validation schema for the login form
  const loginSchemaValidation = z.object({
    email_id: z.email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(1, {
      // For login, we just need to ensure it's not empty
      message: "Password is required.",
    }),
  });

  // 2. Initialize react-hook-form with the new schema
  const form = useForm({
    resolver: zodResolver(loginSchemaValidation),
    defaultValues: {
      email_id: "",
      password: "",
    },
  });

  // 3. Define the submit handler for login
  function onSubmit(values) {
    // This function is called only if the form data passes Zod validation.
    console.log("Login form submitted with valid data:", values);

    // Here you would typically send data to your backend for authentication
    // Example: const user = await yourAuthService.login(values);
    dispatch(loginGlobal(values)).then(navigate("/dashboard/home"))

    toast.success("Login Successful!", {
      description: `Welcome back!`,
    });
  }

  return (
    // Outer container for responsiveness and centering
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      {/* <Toaster></Toaster> */}
      <div className={cn("w-full max-w-md", className)} {...props}>
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
            <CardDescription className="text-base">
              Please enter your details to log in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Shadcn Form wrapper */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Email Address Field */}
                <FormField
                  control={form.control}
                  name="email_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="amisha@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          to="/auth/forgot-password" // Updated link for forgot password
                          className="text-sm underline-offset-4 hover:underline text-primary"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="************"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Login
                </Button>

                <div className="text-center text-sm mt-4">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register" // Link to the register page
                    className="underline underline-offset-4 text-primary"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
