import { ShoppingBag, Heart, Star } from "lucide-react";

import { SectionHeader } from "@/components/molecules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductReview } from "@/components/domain/product-review";
import { ReviewResume } from "@/components/domain/review-resume";
import { ContentCarousel } from "@/components/molecules/content-carousel";
import { ProductsSection } from "@/components/organisms/products-section";
import { hygraphService } from "@/services/hygraph";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await hygraphService.getProductBySlug({
    slug: params.slug,
  });

  const relatedProducts = await hygraphService.getProductsByCategory({
    categorySlug: product.category.slug,
    skipProduct: product.id,
  });

  return (
    <>
      <section className="grid grid-cols-2 gap-2 h-96">
        <ContentCarousel
          listWidth={32}
          items={product.images.map((image) => ({
            imageUrl: image.url,
          }))}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <Badge className="self-start">{product.category.title}</Badge>
          <p className="mb-auto">{product.description}</p>

          <b className="text-lg">R$ {product.price}</b>

          <div className="flex space-x-1">
            <Button className="flex-1">Comprar</Button>
            <Button size="icon" variant="outline">
              <ShoppingBag />
            </Button>
            <Button size="icon" variant="outline">
              <Heart />
            </Button>
          </div>
        </div>
      </section>

      {product.other_details && (
        <section>
          <SectionHeader title="Outros detalhes" />

          <p>{product.other_details}</p>
        </section>
      )}

      <ProductsSection
        title="Produtos relacionados"
        products={relatedProducts}
      />

      <section>
        <SectionHeader title="Opinião dos consumidores">
          <Button>Deixe sua opinião</Button>
        </SectionHeader>

        {product.product_ratings.length ? (
          <div className="flex gap-6 mt-2">
            <div className="max-w-sm w-full">
              <div className="flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <span className="ml-2">4,7 de 5</span>
              </div>

              <ReviewResume />
              <ReviewResume />
              <ReviewResume />
              <ReviewResume />
              <ReviewResume />
            </div>

            <div className="space-y-2 flex-1">
              {product.product_ratings.map((rating) => (
                <ProductReview key={rating.id} rating={rating} />
              ))}
            </div>
          </div>
        ) : (
          <strong className="w-full text-center block">
            Seja o primeiro a availiar
          </strong>
        )}
      </section>
    </>
  );
}
