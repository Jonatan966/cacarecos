import { getCategories } from "./get-categories";
import { getHomeResume } from "./get-home-resume";
import { getProductBySlug } from "./get-product-by-slug";
import { getProductsByCategory } from "./get-products-by-category";

export const hygraphService = {
  getCategories,
  getProductsByCategory,
  getHomeResume,
  getProductBySlug,
};
