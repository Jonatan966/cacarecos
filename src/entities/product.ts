import { Category } from "./category";
import { Rating } from "./rating";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceId: string;
  description: string;
  other_details: string;
  images: ProductImage[];
  category: Category;
  product_ratings: Rating[];
}

export interface ProductImage {
  id: string;
  url: string;
}
