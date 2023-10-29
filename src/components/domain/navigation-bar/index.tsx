"use client";

import { ShoppingBag, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";

export function NavigationBar() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      router.push(`/products?term=${event.currentTarget.value}`);
    }
  }

  return (
    <header className="flex items-center gap-2 py-2">
      <Link href="/">
        <h1 className="font-bold text-xl">Cacarecos</h1>
      </Link>
      <Input
        placeholder="Digite para pesquisar um produto"
        className="flex-1"
        onKeyDown={handleSearch}
      />

      <Link href="/cart">
        <Button size="icon" variant="ghost">
          <ShoppingBag />
        </Button>
      </Link>
      {isSignedIn ? (
        <>
          <Link href="/orders">
            <Button size="icon" variant="ghost">
              <Truck />
            </Button>
          </Link>

          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <Link href="/sign-in">
          <Button>Entrar</Button>
        </Link>
      )}
    </header>
  );
}
