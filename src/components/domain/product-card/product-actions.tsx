"use client";

import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Product } from "@/entities/product";
import { metaService } from "@/services/meta";
import { stripeJsService } from "@/services/stripe-js";
import { Heart, Loader, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { toggleProductFromCart, cart } = useCart();

  function handleCartAction(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleProductFromCart(product);
  }

  async function handleCheckout(event: React.MouseEvent) {
    event.preventDefault();

    setIsRedirecting(true);

    try {
      const checkoutSessionId = await metaService.checkout({
        products: [
          {
            priceId: product.priceId,
            quantity: 1,
          },
        ],
      });

      await stripeJsService.goToCheckout(checkoutSessionId);
    } catch (e) {
      console.log(e);
    }

    setIsRedirecting(false);
  }

  return (
    <div className="flex space-x-1">
      <Button
        className="flex-1"
        onClick={handleCheckout}
        disabled={isRedirecting}
      >
        {isRedirecting ? <Loader className="animate-spin" /> : "Comprar"}
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
