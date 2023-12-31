"use client";

import { metaService } from "@/services/meta";
import { localStorageService } from "@/services/local-storage";
import { StorageKey } from "@/services/local-storage/types";
import { stripeJsService } from "@/services/stripe-js";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkout = localStorageService.retrieveItem(StorageKey.CHECKOUT);
    const referer = searchParams.get("referer");

    if (!checkout || !checkout?.length) {
      router.replace(referer || "/");
      return;
    }

    localStorageService.removeItem(StorageKey.CHECKOUT);

    async function _checkout() {
      const checkoutSessionId = await metaService.checkout({
        products: checkout!,
      });

      await stripeJsService.goToCheckout(checkoutSessionId);
    }

    _checkout();
  }, [router, searchParams]);

  return (
    <div className="flex flex-col items-center h-64 justify-center">
      <Loader className="animate-spin" size={64} />

      <p>Estamos te redirecionando para o checkout</p>
    </div>
  );
}
