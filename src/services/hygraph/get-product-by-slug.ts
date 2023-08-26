import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Product } from "@/entities/product";

interface GetProductBySlugProps {
  slug: string;
}

interface GetProductResponse {
  product: Product;
}

export async function getProductBySlug(props: GetProductBySlugProps) {
  const query = gql`
    query GetProductBySlug($slug: String) {
      product(where: { slug: $slug }) {
        id
        name
        price
        other_details
        slug
        description
        category {
          id
          title
        }
        product_ratings {
          id
          stars
          title
          details
        }
        images {
          id
          url
        }
      }
    }
  `;

  const response = await hygraphApi.request<GetProductResponse>(query, {
    slug: props.slug,
  });

  return response.product;
}
