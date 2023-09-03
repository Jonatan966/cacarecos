import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Product } from "@/entities/product";

interface GetProductsByTermProps {
  term?: string;
}

interface GetProductsByTermResponse {
  products: Product[];
}

export async function getProductsByTerm(props: GetProductsByTermProps) {
  const query = gql`
    query GetProductsByTerm($term: String) {
      products(where: { name_contains: $term }) {
        id
        name
        images(first: 1) {
          id
          url
        }
        price
        priceId
        category {
          id
          title
        }
        slug
      }
    }
  `;

  const response = await hygraphApi.request<GetProductsByTermResponse>(query, {
    term: props.term || "",
  });

  return response.products;
}
