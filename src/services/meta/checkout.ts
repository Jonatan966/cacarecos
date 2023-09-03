import { metaApi } from "./api";

interface CheckoutProps {
  products: {
    priceId: string;
    quantity: number;
  }[];
}

interface CheckoutResponseData {
  checkoutSessionId: string;
}

export async function checkout(props: CheckoutProps) {
  const checkoutData = await metaApi
    .post("checkout", {
      body: JSON.stringify({
        products: props.products,
      }),
    })
    .json<CheckoutResponseData>();

  return checkoutData.checkoutSessionId;
}
