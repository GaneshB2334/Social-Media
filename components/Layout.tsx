"use client";
import React, { ReactNode, Suspense } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import SuspenseLoading from "./SuspenseLoading";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/profile";

  return (
    <>
      {!isAuthPage && <Header />}
      <Suspense fallback={<SuspenseLoading />}>{children}</Suspense>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default Layout;
