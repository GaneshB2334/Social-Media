import React, { ChangeEvent, useState } from "react";
import { moveLeft, moveRight, moveUp, scaleUp } from "@/app/utils/motion";
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
import { motion } from "framer-motion";
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
        <motion.div
          variants={moveLeft(0, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <CardTitle>Register</CardTitle>
        </motion.div>
        <motion.div
          variants={moveLeft(0.1, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <CardDescription>Create an account here.</CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent className="space-y-2">
        <motion.div>
          <motion.div
            variants={moveLeft(0.2, 0.3)}
            initial="hidden"
            animate="visible"
            className="space-y-1"
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
          </motion.div>
          <motion.div
            variants={moveLeft(0.3, 0.3)}
            initial="hidden"
            animate="visible"
            className="space-y-1"
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
          </motion.div>
          <motion.div
          variants={moveLeft(0.4, 0.3)}
          initial="hidden"
          animate="visible" className="space-y-1">
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
          </motion.div>
        </motion.div>
      </CardContent>
      <CardFooter>
        <motion.div
          variants={moveLeft(0.5, 0.3)}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <Button className="w-full rounded-xl" onClick={handleRegister}>
            Register
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default register;
