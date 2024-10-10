"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./components/Login";
import Register from "./components/Register";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 rounded-lg">
          <TabsTrigger className="rounded-lg" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="rounded-lg" value="register">
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
