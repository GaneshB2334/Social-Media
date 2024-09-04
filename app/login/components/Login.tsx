import { moveLeft, moveRight, moveUp, scaleUp } from "@/app/utils/motion";
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
import { motion } from "framer-motion";
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
        <motion.div
          variants={moveRight(0, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <CardTitle>Login</CardTitle>
        </motion.div>
        <motion.div
          variants={moveRight(0.1, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <CardDescription>
            Login to your account to access your profile.
          </CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent className="space-y-2">
        <motion.div>
          <motion.div
            variants={moveRight(0.2, 0.3)}
            initial="hidden"
            animate="visible"
            className="space-y-1"
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
          </motion.div>
          <motion.div
            variants={moveRight(0.3, 0.3)}
            initial="hidden"
            animate="visible"
            className="space-y-1"
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
          </motion.div>
        </motion.div>
      </CardContent>
      <CardFooter>
        <motion.div
          variants={moveRight(0.4, 0.3)}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <Button onClick={HandleLogin} className="w-full rounded-xl">
            Login
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default login;
