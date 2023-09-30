import { createCheckoutSession } from "./create-checkout-session";
import { createCustomer } from "./create-customer";
import { getCheckoutSession } from "./get-checkout-session";
import { listCheckoutProducts } from "./list-checkout-products";

export const stripeService = {
  createCheckoutSession,
  createCustomer,
  getCheckoutSession,
  listCheckoutProducts,
};
