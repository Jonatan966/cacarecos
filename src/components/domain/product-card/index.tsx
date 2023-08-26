import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/entities/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex flex-col h-full gap-1 border p-1 rounded-lg cursor-pointer">
        <p className="font-bold">{product.name}</p>
        <div className="relative flex-1">
          <Image
            src={product.images[0].url}
            fill
            alt="bla"
            objectFit="contain"
          />
        </div>
        <div className="flex whitespace-nowrap">
          <Badge className="">{product.category.title}</Badge>
          <b className="w-full text-center">R$ {product.price}</b>
        </div>
        <div className="flex space-x-1">
          <Button className="flex-1" onClick={(e) => e.preventDefault()}>
            Comprar
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={(e) => e.preventDefault()}
          >
            <ShoppingBag />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={(e) => e.preventDefault()}
          >
            <Heart />
          </Button>
        </div>
      </div>
    </Link>
  );
}
