import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ContentCarousel } from "@/components/molecules/content-carousel";
import { CategoriesSection } from "@/components/organisms/categories-section";
import { ProductsSection } from "@/components/organisms/products-section";
import { hygraphService } from "@/services/hygraph";
import { generateCarouselActionLink } from "@/utils/generate-carousel-action-link";

export default async function Home() {
  const { categories, products, carousels } =
    await hygraphService.getHomeResume();

  return (
    <>
      <ContentCarousel
        items={carousels.map((carousel) => ({
          imageUrl:
            carousel?.image?.url ||
            carousel.refereal_product?.images[0].url ||
            "/vercel.svg",
          description: carousel.title,
          action: (
            <Link href={generateCarouselActionLink(carousel)}>
              <Button className="w-full block">{carousel.cta}</Button>
            </Link>
          ),
        }))}
        isPlaying
        className="h-96"
      />

      <CategoriesSection categories={categories} />

      <ProductsSection products={products} title="Produtos mais vendidos" />
    </>
  );
}
