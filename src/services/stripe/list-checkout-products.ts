import { stripeApi } from "./api";

export async function listCheckoutProducts(sessionId: string) {
  const products = await stripeApi.checkout.sessions.listLineItems(sessionId);

  return products.data;
}
