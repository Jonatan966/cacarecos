import { ShoppingBag, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function NavigationBar() {
  return (
    <header className="flex items-center gap-2 py-2">
      <Link href="/">
        <h1 className="font-bold text-xl">Cacarecos</h1>
      </Link>
      <Input
        placeholder="Digite para pesquisar um produto"
        className="flex-1"
      />
      <Button size="icon" variant="ghost">
        <Heart />
      </Button>
      <Link href="/cart">
        <Button size="icon" variant="ghost">
          <ShoppingBag />
        </Button>
      </Link>
      <Button>Entrar</Button>
    </header>
  );
}
