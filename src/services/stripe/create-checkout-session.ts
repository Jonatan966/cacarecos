import { stripeApi } from "./api";
import Stripe from "stripe";

interface CreateCheckoutSessionProps {
  products: {
    quantity: number;
    priceId: string;
    id: string;
  }[];
  customerId: string;
}

export async function createCheckoutSession({
  products,
  customerId,
}: CreateCheckoutSessionProps) {
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  const productsIDs: string[] = [];

  for (const product of products) {
    lineItems.push({
      price: product.priceId,
      quantity: product.quantity,
    });

    productsIDs.push(product.id);
  }

  const session = await stripeApi.checkout.sessions.create({
    line_items: products.map((product) => ({
      price: product.priceId,
      quantity: product.quantity,
    })),
    mode: "payment",
    customer: customerId,
    success_url: process.env.STRIPE_SUCCESS_URL!,
    cancel_url: process.env.STRIPE_SUCCESS_URL!,
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["BR"],
    },
    metadata: {
      productsIDs: JSON.stringify(productsIDs),
    },
  });

  return session.id;
}
