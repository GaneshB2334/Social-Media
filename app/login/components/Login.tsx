import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Github } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

const login = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const HandleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" || password === "") {
      toast({
        title: "Please fill all the fields",
        description: "Username and password are required",
        variant: "destructive",
      });
      return;
    }
  };

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length > 15) {
      toast({
        title: "Username too long",
        description: "Username should not exceed 15 characters",
        variant: "destructive",
      });
    } else {
      setUsername(newValue);
    }
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length > 20) {
      toast({
        title: "Password too long",
        description: "Password should not exceed 20 characters",
        variant: "destructive",
      });
    } else {
      setPassword(newValue);
    }
  };

  const { data: session } = useSession();

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <div>
          <CardTitle>Login</CardTitle>
        </div>
        <div>
          <CardDescription>
            Login to your account to access your profile.
          </CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={HandleLogin}>
        <CardContent className="space-y-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-lg">
                Username
              </Label>
              <Input
                className="rounded-xl"
                required
                id="username"
                placeholder="John Doe"
                type="text"
                name="username"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg">
                Password
              </Label>
              <Input
                className="rounded-xl"
                required
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button type="submit" className="w-full rounded-xl">
              Login
            </Button>
          </div>
        </CardFooter>
      </form>
      <p className="w-full text-center">OR</p>
      <div className="w-full flex justify-center my-5">

      <Button onClick={() => signIn('github')}><Github className="mr-2"/> Login with Github</Button>
      </div>
      {session?.user?.email}
    </Card>
  );
};

export default login;
