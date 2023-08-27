import { Button } from "@/components/ui/button";
import { ContentCarousel } from "@/components/molecules/content-carousel";
import { CategoriesSection } from "@/components/organisms/categories-section";
import { ProductsSection } from "@/components/organisms/products-section";
import { hygraphService } from "@/services/hygraph";

export default async function Home() {
  const { categories, products } = await hygraphService.getHomeResume();

  return (
    <>
      <ContentCarousel
        items={[
          {
            imageUrl: "/vercel.svg",
            description: "Descrição interessante",
            action: <Button>Ação</Button>,
          },
          {
            imageUrl: "/vercel.svg",
          },
          {
            imageUrl: "/vercel.svg",
          },
        ]}
        isPlaying
        className="h-96"
      />

      <CategoriesSection categories={categories} />

      <ProductsSection products={products} title="Produtos mais vendidos" />
    </>
  );
}
