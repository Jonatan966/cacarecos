import { gql } from "graphql-request";
import { hygraphApi } from "./api";

interface PublishOrderResponse {
  id: string;
}

export async function publishOrder(orderId: string) {
  const mutation = gql`
    mutation PublishOrder($orderId: ID) {
      publishOrder(where: { id: $orderId }, to: PUBLISHED) {
        id
      }
    }
  `;

  const result = await hygraphApi.request<PublishOrderResponse>(mutation, {
    orderId,
  });

  return !!result?.id;
}
