"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validEmail = "skillshare@gmail.com";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
      setErrorMessage(""); // Clear error message
      router.push("/feed"); // Redirect to the profile page
    } else {
      setErrorMessage("Invalid email or password!"); // Show error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* Sign In Form */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-xl font-bold">Sign In</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-center">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </CardFooter>
      </Card>

      {/* Error Message Card */}
      {errorMessage && (
        <Card className="w-full max-w-md bg-red-50 border border-red-300 text-red-600">
          <CardContent>
            <p>{errorMessage}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
