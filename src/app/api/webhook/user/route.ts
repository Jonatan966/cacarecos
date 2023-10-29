import { Webhook } from "svix";

import { stripeService } from "@/services/stripe";
import { clerkClient } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

interface EventData {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email_addresses: {
      email_address: string;
    }[];
  };
}

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const wh = new Webhook(String(process.env.CLERK_USER_CREATION_WEBHOOK_SIGN));

  const { data: userData } = wh.verify(payload, {
    "svix-id": req.headers.get("svix-id") || "",
    "svix-timestamp": req.headers.get("svix-timestamp") || "",
    "svix-signature": req.headers.get("svix-signature") || "",
  }) as EventData;

  const userName = [userData.first_name, userData.last_name].join(" ");
  const userEmail = userData.email_addresses.shift();

  if (!userEmail) {
    return new Response(null, {
      status: 400,
    });
  }

  const customerId = await stripeService.createCustomer({
    customer: {
      name: userName,
      authId: userData.id,
      email: userEmail.email_address,
    },
  });

  await clerkClient.users.updateUserMetadata(userData.id, {
    privateMetadata: {
      customerId,
    },
  });

  return new Response(null, {
    status: 204,
  });
}
