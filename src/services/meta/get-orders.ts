import { Order } from "@/entities/order";
import { metaApi } from "./api";
import { Pagination } from "@/entities/pagination";

interface GetOrdersParams {
  page?: number;
  search?: string;
}

interface GetOrdersResponse {
  orders: Order[];
  pageInfo: Pagination;
}

export async function getOrders(params?: GetOrdersParams) {
  const ordersData = await metaApi
    .get("orders", {
      searchParams: new URLSearchParams({
        page: String(params?.page || 0),
        search: params?.search || "",
      }),
    })
    .json<GetOrdersResponse>();

  return ordersData;
}
