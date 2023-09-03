"use client";

import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { Product } from "@/entities/product";
import { metaService } from "@/services/meta";
import { sessionStorageService } from "@/services/session-storage";
import { StorageKey } from "@/services/session-storage/types";
import { stripeJsService } from "@/services/stripe-js";
import { useAuth } from "@clerk/nextjs";
import { Heart, Loader, ShoppingBag } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const { userId } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { toggleProductFromCart, cart } = useCart();

  function handleCartAction(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleProductFromCart(product);
  }

  async function handleCheckout(event: React.MouseEvent) {
    event.preventDefault();

    if (!userId) {
      sessionStorageService.storeItem(StorageKey.CHECKOUT, [
        {
          priceId: product.priceId,
          quantity: 1,
        },
      ]);

      router.push(`/checkout?referer=${path}`);
      return;
    }

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
        {isRedirecting ? <Loader className="animate-spin" /> : "Comprar agora"}
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
