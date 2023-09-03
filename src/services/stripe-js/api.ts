import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJsAPI() {
  return await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
}
