// src/pages/RegisterPage.jsx (or wherever you want to place it)

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
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router"; // Assuming react-router-dom for navigation
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "@/components/ui/sonner"; // For success/error messages
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Import the specific shadcn/ui Form components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axiosClient from "../../axios";
// import { authCheckGlobal } from "../../redux/slice1";
import { useDispatch } from "react-redux";
import { registerGlobal } from "../../redux/slice1";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function RegisterPage({ className, ...props }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const dispatch = useDispatch();

  // 1. Define your Zod validation schema for the signup form
  const signupSchemaValidation = z.object({
    full_name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    gender: z.enum(["male", "female"], {
      message: "You need to select a gender.",
    }),
    email_id: z.email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  // 2. Initialize react-hook-form with Zod resolver and default values
  const form = useForm({
    resolver: zodResolver(signupSchemaValidation),
    defaultValues: {
      full_name: "",
      gender: "",
      email_id: "",
      password: "",
    },
  });

  // 3. Define the submit handler
  function onSubmit(values) {
    // This function is called only if the form data passes Zod validation.
    console.log("Form submitted with valid data:", values);

    // Here you would typically send data to your backend API
    // Example: await yourAuthService.register(values);

    dispatch(registerGlobal(values));

    toast.success("Registered Successfully!", {
      // message: `Welcome back!`,
    });
  }

  return (
    // Outer container for responsiveness and centering
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Toaster></Toaster>
      <div className={cn("w-full max-w-md", className)} {...props}>
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-2">
            {" "}
            {/* Added space-y-2 */}
            <CardTitle className="text-2xl font-bold">
              Getting Started!
            </CardTitle>{" "}
            {/* Increased font size */}
            <CardDescription className="text-base">
              {" "}
              {/* Adjusted font size */}
              Seems you are new here. Let's setup your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Shadcn Form wrapper */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {" "}
                {/* Increased spacing */}
                {/* Full Name Field */}
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Yeyaansh Patel" {...field} />
                      </FormControl>
                      <FormMessage /> {/* Displays validation error message */}
                    </FormItem>
                  )}
                />
                {/* Gender Field */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Gender</FormLabel> */}
                      <FormControl>
                        {/* The RadioGroup is now controlled by React Hook Form */}
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          {/* Option 1: Male */}
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="male" id="male" />
                            </FormControl>
                            <FormLabel htmlFor="male" className="font-normal">
                              Male
                            </FormLabel>
                          </FormItem>

                          {/* Option 2: Female */}
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="female" id="female" />
                            </FormControl>
                            <FormLabel htmlFor="female" className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                        {" "}
                        {/* Adjusted for forgot password link */}
                        <FormLabel>Password</FormLabel>
                        <Link
                          to="#"
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
                  Login {/* Button text matching the image */}
                </Button>
                <div className="text-center text-sm mt-4">
                  {" "}
                  {/* Increased top margin */}
                  Already have an account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="underline underline-offset-4 text-primary"
                  >
                    Log in
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Terms and Privacy Policy */}
        <div
          className="mt-6 text-muted-foreground text-center text-xs text-balance space-x-1" // Added space-x-1
        >
          By clicking continue, you agree to our{" "}
          <Link to="#" className="underline underline-offset-4 text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="#" className="underline underline-offset-4 text-primary">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
