export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: ProductImage[];
  category: ProductCategory;
}

export interface ProductImage {
  id: string;
  url: string;
}

export interface ProductCategory {
  id: string;
  title: string;
}
