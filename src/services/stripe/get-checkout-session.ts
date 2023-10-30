import { OrderProduct } from "@/entities/order";
import { stripeApi } from "./api";

export async function getCheckoutSession(sessionId: string) {
  const session = await stripeApi.checkout.sessions.retrieve(sessionId);

  return {
    ...session,
    metadata: {
      orderProducts: JSON.parse(
        session.metadata?.orderProducts || "[]"
      ) as OrderProduct[],
    },
  };
}
