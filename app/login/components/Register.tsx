import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const { toast, dismiss, toasts } = useToast();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) {
      return;
    }
    setUsername(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) {
      return;
    }
    setPassword(e.target.value);
  };

  const handleCnfPassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) {
      return;
    }
    setCnfPassword(e.target.value);
  };

  const handleRegister = () => {
    if (username === "" || password === "" || cnfPassword === "") {
      toast({
        title: "Please fill all the fields",
        description: "Username and password are required",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div
        >
          <CardTitle>Register</CardTitle>
        </div>
        <div
        >
          <CardDescription>Create an account here.</CardDescription>
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
              type="text"
              name="username"
              placeholder="John Doe"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div
          >
            <Label htmlFor="password">Create password</Label>
            <Input
              className="rounded-xl"
              required
              id="password"
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div>
            <Label htmlFor="cnfpassword">Re-enter password</Label>
            <Input
              className="rounded-xl"
              required
              id="cnfpassword"
              type="text"
              name="cnfpassword"
              placeholder="Re-enter password"
              value={cnfPassword}
              onChange={handleCnfPassword}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div
        >
          <Button className="w-full rounded-xl" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default register;
