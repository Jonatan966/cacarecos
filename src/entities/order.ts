import { Product } from "./product";

export interface Order {
  id: string;
  createdAt: Date;
  totalAmount: number;
  orderStatus: string;
  products: Pick<Product, "id" | "slug" | "images">[];
}
