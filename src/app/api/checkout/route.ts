import { stripeService } from "@/services/stripe";
import { auth, clerkClient } from "@clerk/nextjs";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const payload = await req.json();

  const { products } = z
    .object({
      products: z
        .array(
          z.object({
            priceId: z.string(),
            quantity: z.number().gte(1),
          })
        )
        .min(1),
    })
    .parse(payload);

  const { userId } = auth();

  if (!userId) {
    return new Response(null, {
      status: 401,
    });
  }

  const user = await clerkClient.users.getUser(userId);
  const customerId = user.privateMetadata.customerId as string;

  const checkoutSessionId = await stripeService.createCheckoutSession({
    products,
    customerId,
  });

  return new Response(JSON.stringify({ checkoutSessionId }), {
    status: 201,
  });
}
