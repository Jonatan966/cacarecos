import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Order } from "@/entities/order";
import { Pagination } from "@/entities/pagination";

interface GetOrdersProps {
  customerId: string;
  search?: string;
  page?: number;
}

interface GetOrdersResponse {
  ordersConnection: {
    edges: {
      node: Order;
    }[];
    pageInfo: Pagination;
  };
}

export async function getOrders(props: GetOrdersProps) {
  const query = gql`
    query GetOrders($customerId: String, $search: String, $skip: Int) {
      ordersConnection(
        first: 10
        skip: $skip
        where: {
          customerId: $customerId
          products_some: { name_contains: $search }
        }
      ) {
        pageInfo {
          hasNextPage
          pageSize
          hasPreviousPage
        }
        edges {
          node {
            createdAt
            customerId
            id
            orderStatus
            totalAmount
            products {
              id
              name
              slug
              images(first: 1) {
                id
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await hygraphApi.request<GetOrdersResponse>(query, {
    customerId: props.customerId,
    search: props?.search || "",
    skip: (props?.page || 0) * 10,
  });

  return response.ordersConnection;
}
