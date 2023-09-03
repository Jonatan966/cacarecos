import { getStripeJsAPI } from "./api";

export async function goToCheckout(checkoutSessionId: string) {
  const stripeJsAPI = await getStripeJsAPI();

  await stripeJsAPI?.redirectToCheckout({
    sessionId: checkoutSessionId,
  });
}
