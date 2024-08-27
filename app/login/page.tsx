"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./components/Login";
import Register from "./components/Register";

import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const { toast } = useToast();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 rounded-full">
          <TabsTrigger className="rounded-full" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="rounded-full" value="register">
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
