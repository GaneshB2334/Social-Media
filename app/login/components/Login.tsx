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
import { ChangeEvent, useState } from "react";

const login = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const HandleLogin = () => {
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

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <div
        >
          <CardTitle>Login</CardTitle>
        </div>
        <div
        >
          <CardDescription>
            Login to your account to access your profile.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <div
          >
            <Label htmlFor="username">Username</Label>
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
          <div
          >
            <Label htmlFor="password">Password</Label>
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
        <div
        >
          <Button onClick={HandleLogin} className="w-full rounded-xl">
            Login
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default login;
