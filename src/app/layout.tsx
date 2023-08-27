import "./globals.css";
import "react-multi-carousel/lib/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationBar } from "@/components/domain/navigation-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container space-y-4 mb-4">
          <NavigationBar />

          {children}
        </div>
      </body>
    </html>
  );
}
