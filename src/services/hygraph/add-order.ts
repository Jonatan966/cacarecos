import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { OrderProduct } from "@/entities/order";

interface AddOrderProps {
  checkoutId: string;
  customerId: string;
  totalAmount: number;
  products: OrderProduct[];
}

interface AddOrderResponse {
  createOrder: {
    id: string;
  };
}

export async function addOrder(props: AddOrderProps) {
  const mutation = gql`
    mutation AddOrder(
      $checkoutId: String
      $customerId: String
      $totalAmount: Float
      $products: [OrderProductCreateInput!]
    ) {
      createOrder(
        data: {
          checkoutID: $checkoutId
          customerId: $customerId
          orderStatus: processing
          totalAmount: $totalAmount
          orderProducts: { create: $products }
        }
      ) {
        id
      }
    }
  `;

  const mappedProducts = props.products.map((product) => ({
    quantity: product.quantity,
    product: {
      connect: {
        id: product.productId,
      },
    },
  }));

  const response = await hygraphApi.request<AddOrderResponse>(mutation, {
    checkoutId: props.checkoutId,
    customerId: props.customerId,
    totalAmount: props.totalAmount,
    products: mappedProducts,
  });

  return response.createOrder;
}
