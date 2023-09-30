import { Cart } from "@/entities/cart";

export enum StorageKey {
  CHECKOUT = "@cacarecos:checkout",
  CART = "@cacarecos:cart",
}

export interface StorageValues {
  [StorageKey.CHECKOUT]: {
    priceId: string;
    quantity: number;
    id: string;
  }[];
  [StorageKey.CART]: Cart;
}
