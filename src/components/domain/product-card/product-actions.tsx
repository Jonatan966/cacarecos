"use client";

import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Product } from "@/entities/product";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const { toggleProductFromCart, cart } = useCart();

  function handleCartAction(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleProductFromCart(product);
  }

  return (
    <div className="flex space-x-1">
      <Button className="flex-1" onClick={(e) => e.preventDefault()}>
        Comprar
      </Button>
      <Button
        size="icon"
        variant={cart[product.id] ? "destructive" : "outline"}
        onClick={handleCartAction}
      >
        <ShoppingBag />
      </Button>
      <Button size="icon" variant="outline" onClick={(e) => e.preventDefault()}>
        <Heart />
      </Button>
    </div>
  );
}
