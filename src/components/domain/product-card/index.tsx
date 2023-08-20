import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProductCard() {
  return (
    <div className="flex flex-col h-full gap-1 border p-1 rounded-lg">
      <p className="font-bold">Produto tal</p>
      <div className="relative flex-1">
        <Image src="/next.svg" fill alt="bla" />
      </div>
      <div className="flex whitespace-nowrap">
        <Badge className="">Categoria tal</Badge>
        <b className="w-full text-center">R$ 19,99</b>
      </div>
      <div className="flex space-x-1">
        <Button className="flex-1">Comprar</Button>
        <Button size="icon" variant="outline">
          <ShoppingBag />
        </Button>
        <Button size="icon" variant="outline">
          <Heart />
        </Button>
      </div>
    </div>
  );
}
