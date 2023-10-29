import { getCategories } from "./get-categories";
import { getHomeResume } from "./get-home-resume";
import { getOrders } from "./get-orders";
import { getProductBySlug } from "./get-product-by-slug";
import { getProductsByCategory } from "./get-products-by-category";
import { getProductsByTerm } from "./get-products-by-term";
import { getProductsImagesByIDs } from "./get-products-images-by-ids";

export const hygraphService = {
  getCategories,
  getProductsByCategory,
  getHomeResume,
  getProductBySlug,
  getProductsByTerm,
  getProductsImagesByIDs,
  getOrders,
};
