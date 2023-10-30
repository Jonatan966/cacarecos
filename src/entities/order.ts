import { Product } from "./product";

export interface Order {
  id: string;
  createdAt: Date;
  totalAmount: number;
  orderStatus: string;
  orderProducts: {
    product: Pick<Product, "id" | "name" | "slug" | "images">;
    quantity: number;
  }[];
}

export interface OrderProduct {
  productId: string;
  quantity: number;
}
