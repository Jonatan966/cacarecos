import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Product } from "@/entities/product";
import { Category } from "@/entities/category";

interface GetHomeResumeResponse {
  products: Product[];
  categories: Category[];
}

export async function getHomeResume() {
  const query = gql`
    query GetHomeResume {
      categories {
        id
        slug
        title
      }

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

  const response = await hygraphApi.request<GetHomeResumeResponse>(query);

  return response;
}
