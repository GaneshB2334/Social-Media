import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import SuspenseLoading from "@/components/SuspenseLoading";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media",
  description: "By Ganesh Bastapure",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className + " relative overflow-hidden"}>
        <SessionProvider session={session}>
          <Suspense fallback={<SuspenseLoading />}>
            <Layout children={children} />
            <Toaster />
          </Suspense>
        </SessionProvider>
      </body>
    </html>
  );
}
