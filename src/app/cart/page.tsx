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

export default function CartPage() {
  return (
    <div className="container space-y-4">
      <div className="flex items-center gap-1">
        <h2 className="flex-1 font-semibold text-lg">Meu carrinho</h2>

        <b>Total: R$ 19,90</b>
        <Button>Finalizar compra</Button>
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
          <TableRow>
            <TableCell className="flex space-x-2">
              <Image src="/vercel.svg" width={64} height={64} alt="produto" />
              <div className="flex flex-col items-start">
                <span>Produto tal</span>
                <Badge>Categoria tal</Badge>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Button variant="outline" size="sm">
                  -
                </Button>
                <Input className="w-20" value={24} type="number" />
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
            </TableCell>
            <TableCell className="font-bold">R$ 19,99</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="destructive">
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
