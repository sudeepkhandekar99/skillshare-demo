"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add actual signup logic, e.g., API call.
    // Redirect to subscription page
    router.push("/subscription");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-xl font-bold">Sign Up</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-center">
          Already have an account? <a href="/signin" className="text-blue-500">Sign In</a>
        </CardFooter>
      </Card>
    </div>
  );
}
