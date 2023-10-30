import { OrderProduct } from "@/entities/order";
import { hygraphService } from "@/services/hygraph";
import { stripeApi } from "@/services/stripe/api";
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature") || "";

  const payload = await req.text();

  const event = stripeApi.webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_SESSION_COMPLETED_WEBHOOK_SIGN!
  );

  if (event.type !== "checkout.session.completed") {
    return new NextResponse(undefined, {
      status: 400,
    });
  }

  const checkoutSession = event.data.object as Stripe.Checkout.Session;

  const orderProducts = JSON.parse(
    checkoutSession.metadata?.orderProducts || "[]"
  ) as OrderProduct[];

  if (!checkoutSession.customer) {
    return new NextResponse(undefined, {
      status: 400,
    });
  }

  const amountTotalInCents = (checkoutSession.amount_total || 0) / 100;

  const createdOrder = await hygraphService.addOrder({
    checkoutId: checkoutSession.id,
    customerId: String(checkoutSession.customer),
    totalAmount: amountTotalInCents,
    products: orderProducts,
  });

  await hygraphService.publishOrder(createdOrder.id);

  return new NextResponse(undefined, {
    status: 204,
  });
}
