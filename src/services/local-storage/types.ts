export enum StorageKey {
  CHECKOUT = "@cacarecos:checkout",
}

export interface StorageValues {
  [StorageKey.CHECKOUT]: {
    priceId: string;
    quantity: number;
  }[];
}
