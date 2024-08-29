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

const login = () => {
  const { toast } = useToast();

  const HandleLogin = () => {
        toast({
          variant: "default",
          title: "Login Successful",
          description: "You have successfully logged in.",
        })
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
          variants={moveLeft(0, 0.3)}
          initial="hidden"
          animate="visible"
        >
          <CardDescription>
            Login to your account to access your profile.
          </CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent className="space-y-2">
        <motion.div
          variants={scaleUp(0, 0.3, 25)}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
              className="rounded-xl"
              required
              id="username"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              className="rounded-xl"
              required
              id="password"
              placeholder="Password"
              type="password"
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
          <Button onClick={HandleLogin} className="w-full rounded-xl">
            Login
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default login;
