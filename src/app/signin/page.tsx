import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-xl font-bold">Sign In</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
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
    </div>
  );
}
