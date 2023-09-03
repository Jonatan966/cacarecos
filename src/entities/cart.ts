export type Cart = Record<
  string,
  {
    id: string;
    priceId: string;
    name: string;
    slug: string;
    imageUrl: string;
    categoryTitle: string;
    quantity: number;
    pricePerUnit: number;
  }
>;
