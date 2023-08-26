import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Product } from "@/entities/product";

interface GetProductsResponse {
  products: Product[];
}

export async function getProducts() {
  const query = gql`
    query GetProducts {
      products {
        id
        name
        images(first: 1) {
          id
          url
        }
        price
        category {
          id
          title
        }
        slug
      }
    }
  `;

  const response = await hygraphApi.request<GetProductsResponse>(query);

  return response.products;
}
