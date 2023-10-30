import { hygraphService } from "@/services/hygraph";
import { auth, clerkClient } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const page = Number(url.searchParams.get("page") || 0);
  const search = url.searchParams.get("search") || "";

  const { userId } = auth();

  if (!userId) {
    return new Response(null, {
      status: 401,
    });
  }

  const user = await clerkClient.users.getUser(userId);

  const ordersResponse = await hygraphService.getOrders({
    customerId: user.privateMetadata.customerId as string,
    page,
    search,
  });

  const orders = ordersResponse.edges.map((edge) => edge.node);

  return NextResponse.json({
    orders,
    pageInfo: ordersResponse.pageInfo,
  });
}
