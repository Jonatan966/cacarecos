import { Button } from "@/components/ui/button";
import { hygraphService } from "@/services/hygraph";
import { stripeService } from "@/services/stripe";
import { formatCurrency } from "@/utils/format-currency";
import Image from "next/image";
import Link from "next/link";

interface OrderSuccessPageProps {
  searchParams: {
    session_id: string;
  };
}

export default async function OrderSuccessPage({
  searchParams,
}: OrderSuccessPageProps) {
  const session = await stripeService.getCheckoutSession(
    searchParams.session_id
  );

  const productsImages = await hygraphService.getProductsImagesByIDs(
    session.metadata.productsIDs
  );

  const amountTotalInCents = (session.amount_total || 0) / 100;

  return (
    <div className=" flex flex-col items-center gap-4 pt-32">
      <h1 className="text-2xl font-semibold">Compra realizada com sucesso!</h1>

      <div className="flex gap-4">
        {productsImages.map((image) => (
          <Image
            src={image.url}
            alt={image.alt}
            width={96}
            height={96}
            key={image.id}
          />
        ))}
      </div>

      <p>
        Sua compra no valor de{" "}
        <code className="font-bold">{formatCurrency(amountTotalInCents)}</code>{" "}
        foi realizada e já está sendo processada.
      </p>

      <Link href="/orders">
        <Button>Meus pedidos</Button>
      </Link>
    </div>
  );
}
