"use client";

import { Product } from "@/entities/product";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface CartContextProps {
  cart: Record<
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
  totalPrice: number;
  addProductToCart(product: Product): void;
  setProductUnits(productId: string, quantity: number): void;
  removeProductFromCart(productId: string): void;
  toggleProductFromCart(product: Product): void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

export function CartContextProvider(props: CartContextProviderProps) {
  const [cart, setCart] = useState<CartContextProps["cart"]>({});

  const totalPrice = useMemo(() => {
    let mountedTotalPrice = 0;

    for (const productId in cart) {
      const product = cart[productId];

      mountedTotalPrice += product.pricePerUnit * product.quantity;
    }

    return mountedTotalPrice;
  }, [cart]);

  function addProductToCart(product: Product) {
    setCart((oldCart) => ({
      ...oldCart,
      [product.id]: {
        id: product.id,
        name: product.name,
        priceId: product.priceId,
        slug: product.slug,
        imageUrl: product.images[0].url,
        categoryTitle: product.category.title,
        pricePerUnit: product.price,
        quantity: 1,
      },
    }));
  }

  function setProductUnits(productId: string, quantity: number) {
    if (quantity < 1) {
      return;
    }

    setCart((oldCart) => ({
      ...oldCart,
      [productId]: {
        ...oldCart[productId],
        quantity,
      },
    }));
  }

  function removeProductFromCart(productId: string) {
    setCart((oldCart) => {
      const clonedOldCart = { ...oldCart };

      delete clonedOldCart[productId];

      return clonedOldCart;
    });
  }

  function toggleProductFromCart(product: Product) {
    if (cart[product.id]) {
      removeProductFromCart(product.id);
      return;
    }

    addProductToCart(product);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        addProductToCart,
        removeProductFromCart,
        setProductUnits,
        toggleProductFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
