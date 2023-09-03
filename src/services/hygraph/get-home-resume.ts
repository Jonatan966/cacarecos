import { gql } from "graphql-request";
import { hygraphApi } from "./api";
import { Product } from "@/entities/product";
import { Category } from "@/entities/category";
import { Carousel } from "@/entities/carousel";

interface GetHomeResumeResponse {
  products: Product[];
  categories: Category[];
  carousels: Carousel[];
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
        priceId
        category {
          id
          title
        }
        slug
      }

      carousels {
        id
        title
        cta
        image {
          url
          id
        }
        refereal_product {
          slug
          images(first: 1) {
            id
            url
          }
        }
        refereal_category {
          slug
        }
      }
    }
  `;

  const response = await hygraphApi.request<GetHomeResumeResponse>(query);

  return response;
}
