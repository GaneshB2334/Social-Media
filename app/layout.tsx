import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import SuspenseLoading from "@/components/SuspenseLoading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media",
  description: "By Ganesh Bastapure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " relative overflow-hidden"}>
        <Suspense fallback={<SuspenseLoading />}>
          <Layout children={children} />
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
