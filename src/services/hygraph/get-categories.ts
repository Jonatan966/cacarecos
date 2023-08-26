import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Category } from "@/entities/category";

interface GetCategoriesResponse {
  categories: Category[];
}

export async function getCategories() {
  const query = gql`
    query GetCategories {
      categories {
        id
        slug
        title
      }
    }
  `;

  const result = await hygraphApi.request<GetCategoriesResponse>(query);

  return result.categories;
}
