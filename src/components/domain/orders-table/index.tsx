"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
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
import { metaService } from "@/services/meta";
import { Order } from "@/entities/order";
import { formatCurrency } from "@/utils/format-currency";
import { Loader } from "lucide-react";
import { formatDate } from "@/utils/format-date";
import { Pagination } from "@/entities/pagination";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Filters {
  page: number;
  search: string;
}

export function OrdersTable() {
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const [filters, setFilters] = useState<Filters>({
    page: 0,
    search: "",
  });

  const searchDelayIdRef = useRef(-1);

  function onGoToPreviousPage() {
    setFilters((oldFilters) => ({ ...oldFilters, page: oldFilters.page - 1 }));
  }

  function onGoToNextPage() {
    setFilters((oldFilters) => ({ ...oldFilters, page: oldFilters.page + 1 }));
  }

  function handleSearch(evt: ChangeEvent<HTMLInputElement>) {
    clearTimeout(searchDelayIdRef.current);

    searchDelayIdRef.current = Number(
      setTimeout(() => setFilters({ page: 0, search: evt.target.value }), 250)
    );
  }

  useEffect(() => {
    setIsLoadingOrders(true);

    metaService
      .getOrders(filters)
      .then((ordersResponse) => {
        setOrders(ordersResponse.orders);
        setPagination(ordersResponse.pageInfo);
      })
      .finally(() => setIsLoadingOrders(false));
  }, [filters]);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar pedidos..."
          className="flex-1"
          onChange={handleSearch}
        />
      </div>

      {isLoadingOrders ? (
        <Loader className="animate-spin mx-auto" size={32} />
      ) : (
        <>
          <Table>
            {!isLoadingOrders && !orders.length && (
              <TableCaption>
                Não há pedidos que correspondem sua busca
              </TableCaption>
            )}
            <TableHeader>
              <TableRow>
                <TableHead>Criado Em</TableHead>
                <TableHead>Produtos</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Valor Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{formatDate(new Date(order.createdAt))}</TableCell>
                  <TableCell>
                    <div className="flex">
                      {order.orderProducts.map(({ product, quantity }) => (
                        <Tooltip key={product.id}>
                          <TooltipTrigger>
                            <Link href={`/products/${product.slug}`}>
                              <Image
                                src={product.images[0].url}
                                width={64}
                                height={64}
                                alt={product.name}
                                className="h-[32px] object-contain"
                              />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            {quantity} unidade(s) de {`"${product.name}"`}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge>{order.orderStatus}</Badge>
                  </TableCell>
                  <TableCell>{formatCurrency(order.totalAmount)}</TableCell>
                  <TableCell width={16}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Rastrear pacote</DropdownMenuItem>
                        <DropdownMenuItem>
                          Imprimir Nota Fiscal
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Cancelar pedido</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end gap-1 mt-1 items-center">
            <span className="text-sm text-muted-foreground mr-2">
              Página {filters.page + 1}
            </span>
            <Button
              size="sm"
              variant="outline"
              disabled={!pagination?.hasPreviousPage}
              onClick={onGoToPreviousPage}
            >
              Anterior
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={!pagination?.hasNextPage}
              onClick={onGoToNextPage}
            >
              Próximo
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
