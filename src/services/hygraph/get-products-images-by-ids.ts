import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Product } from "@/entities/product";

interface getProductsImagesByIDsResponse {
  products: Pick<Product, "images" | "name">[];
}

export async function getProductsImagesByIDs(ids: string[]) {
  const query = gql`
    query GetProductsByIDs($ids: [ID]) {
      products(where: { id_in: $ids }) {
        name
        images(first: 1) {
          url
          id
        }
      }
    }
  `;

  const response = await hygraphApi.request<getProductsImagesByIDsResponse>(
    query,
    {
      ids,
    }
  );

  const images = response.products.flatMap((product) =>
    product.images.map((image) => ({ ...image, alt: product.name }))
  );

  return images;
}
