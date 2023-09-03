"use client";

import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { CheckoutItem } from "@/entities/checkout";
import { metaService } from "@/services/meta";
import { localStorageService } from "@/services/local-storage";
import { StorageKey } from "@/services/local-storage/types";
import { stripeJsService } from "@/services/stripe-js";
import { useAuth } from "@clerk/nextjs";
import { cx } from "class-variance-authority";
import { Loader } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  ComponentProps,
  ForwardRefRenderFunction,
  forwardRef,
  useState,
} from "react";

const CheckoutButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ComponentProps<"button">
> = (props, ref) => {
  const { cart, totalPrice, clearCart } = useCart();

  const checkoutItems = Object.values(cart).map<CheckoutItem>((product) => ({
    priceId: product.priceId,
    quantity: product.quantity,
  }));

  const { userId } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  async function handleCheckout(event: React.MouseEvent) {
    event.preventDefault();

    if (!userId) {
      localStorageService.storeItem(StorageKey.CHECKOUT, checkoutItems);

      router.push(`/checkout?referer=${path}`);
      return;
    }

    setIsRedirecting(true);

    try {
      const checkoutSessionId = await metaService.checkout({
        products: checkoutItems,
      });

      clearCart();

      await stripeJsService.goToCheckout(checkoutSessionId);
    } catch (e) {
      console.log(e);
    }

    setIsRedirecting(false);
  }

  return (
    <Button
      {...props}
      ref={ref}
      className={cx("w-48", props?.className)}
      onClick={handleCheckout}
      disabled={isRedirecting || totalPrice === 0 || props?.disabled}
    >
      {isRedirecting ? <Loader className="animate-spin" /> : "Finalizar compra"}
    </Button>
  );
};

export const CheckoutButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(CheckoutButtonComponent);
