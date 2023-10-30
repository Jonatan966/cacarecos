import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Product } from "@/entities/product";
import { ProductActions } from "./product-actions";
import { formatCurrency } from "@/utils/format-currency";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = formatCurrency(product.price);

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex flex-col h-64 gap-1 border p-1 rounded-lg cursor-pointer">
        <p className="font-bold">{product.name}</p>
        <div className="relative flex-1">
          <Image
            src={product.images[0].url}
            fill
            alt="bla"
            className="object-contain"
          />
        </div>
        <div className="flex whitespace-nowrap">
          <Badge className="">{product.category.title}</Badge>
          <b className="w-full text-center">{formattedPrice}</b>
        </div>
        <ProductActions product={product} />
      </div>
    </Link>
  );
}
