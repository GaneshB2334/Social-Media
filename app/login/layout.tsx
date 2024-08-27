"use client"
import React, { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen">
      {children}
    </div>
  );
};

export default LoginLayout;
