"use client";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/providers/cart-provider";
import { formatCurrency } from "@/utils/format-currency";
import { CheckoutButton } from "@/components/domain/checkout-button";

export default function CartPage() {
  const { cart, totalPrice, setProductUnits, removeProductFromCart } =
    useCart();

  const cartProducts = Object.values(cart);
  const formattedTotalPrice = formatCurrency(totalPrice);

  return (
    <>
      <div className="flex items-center gap-1">
        <h2 className="flex-1 font-semibold text-lg">Meu carrinho</h2>

        <b>Total: {formattedTotalPrice}</b>
        <CheckoutButton />
      </div>

      <Table>
        <TableCaption>Lista de produtos no seu carrinho</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProducts.map((product) => (
            <TableRow key={product.slug}>
              <TableCell className="flex space-x-2 items-center">
                <Image
                  src={product.imageUrl}
                  width={64}
                  height={64}
                  alt="produto"
                  className="h-[64px] object-contain"
                />
                <div className="flex flex-col items-start">
                  <span>{product.name}</span>
                  <Badge>{product.categoryTitle}</Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setProductUnits(product.id, product.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Input
                    className="w-20"
                    value={product.quantity}
                    type="number"
                    onChange={(event) =>
                      setProductUnits(product.id, Number(event.target.value))
                    }
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setProductUnits(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </div>
              </TableCell>
              <TableCell className="font-bold">
                {formatCurrency(product.pricePerUnit * product.quantity)}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => removeProductFromCart(product.id)}
                >
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
