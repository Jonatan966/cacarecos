import "./globals.css";
import "react-multi-carousel/lib/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NavigationBar } from "@/components/domain/navigation-bar";
import { CartContextProvider } from "@/components/providers/cart-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cacarecos",
  description: "Sua lojinha favorita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body className={inter.className}>
          <CartContextProvider>
            <div className="container space-y-4 mb-4">
              <NavigationBar />

              {children}
            </div>
          </CartContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
