import { OrdersTable } from "@/components/domain/orders-table";

export default function OrdersPage() {
  return (
    <>
      <h2 className="text-2xl font-bold">Meus pedidos</h2>
      <OrdersTable />
    </>
  );
}
