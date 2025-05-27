import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUp() {
  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" type="text" placeholder="John" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" type="text" placeholder="Doe" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                Create
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="sign-in" className="underline underline-offset-4">
              Sign in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
