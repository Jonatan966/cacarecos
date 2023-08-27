import { getCategories } from "./get-categories";
import { getHomeResume } from "./get-home-resume";
import { getProductBySlug } from "./get-product-by-slug";
import { getProductsByCategory } from "./get-products-by-category";
import { getProductsByTerm } from "./get-products-by-term";

export const hygraphService = {
  getCategories,
  getProductsByCategory,
  getHomeResume,
  getProductBySlug,
  getProductsByTerm,
};
