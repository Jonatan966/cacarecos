import Stripe from "stripe";

export const stripeApi = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-08-16",
});
