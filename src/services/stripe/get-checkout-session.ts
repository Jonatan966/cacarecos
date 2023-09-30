import { stripeApi } from "./api";

export async function getCheckoutSession(sessionId: string) {
  const session = await stripeApi.checkout.sessions.retrieve(sessionId);

  return {
    ...session,
    metadata: {
      productsIDs: JSON.parse(
        session.metadata?.productsIDs || "[]"
      ) as string[],
    },
  };
}
