import { stripeApi } from "./api";

interface CreateCheckoutSessionProps {
  products: {
    quantity: number;
    priceId: string;
  }[];
  customerId: string;
}

export async function createCheckoutSession({
  products,
  customerId,
}: CreateCheckoutSessionProps) {
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
  });

  return session.id;
}
