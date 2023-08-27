import { Category } from "./category";
import { Product, ProductImage } from "./product";

export interface Carousel {
  id: string;
  title: string;
  cta: string;
  image?: ProductImage;
  refereal_product?: Pick<Product, "slug" | "images">;
  refereal_category?: Pick<Category, "slug">;
}
