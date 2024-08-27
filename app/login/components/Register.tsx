import React from "react";
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

const register = () => {
  return (
    <Card>
      <CardHeader>
        <motion.div
          variants={moveRight(0, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <CardTitle>Register</CardTitle>
        </motion.div>
        <motion.div
          variants={moveLeft(0, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <CardDescription>Create an account here.</CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent className="space-y-2">
        <motion.div
          variants={scaleUp(0, 0.3, 25)}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-1">
            <Label htmlFor="r-username">Username</Label>
            <Input
              className="rounded-xl"
              required
              id="r-username"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="r-password">Create password</Label>
            <Input
              className="rounded-xl"
              required
              id="r-password"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="r-cnfpassword">Re-enter password</Label>
            <Input
              className="rounded-xl"
              required
              id="r-cnfpassword"
              type="text"
            />
          </div>
        </motion.div>
      </CardContent>
      <CardFooter>
        <motion.div
          variants={moveUp(0, 0.3)}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <Button className="w-full rounded-xl">Register</Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default register;
