import { createCheckoutSession } from "./create-checkout-session";
import { createCustomer } from "./create-customer";

export const stripeService = { createCheckoutSession, createCustomer };
