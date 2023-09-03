import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Product } from "@/entities/product";

interface GetProductsProps {
  categorySlug: string;
  skipProduct?: string;
}

interface GetProductsResponse {
  products: Product[];
}

export async function getProductsByCategory(props: GetProductsProps) {
  const query = gql`
    query GetProductsByCategory($categorySlug: String, $skipProduct: ID) {
      products(
        where: { category: { slug: $categorySlug }, NOT: { id: $skipProduct } }
      ) {
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

  const response = await hygraphApi.request<GetProductsResponse>(query, {
    categorySlug: props.categorySlug,
    skipProduct: props.skipProduct || "",
  });

  return response.products;
}
