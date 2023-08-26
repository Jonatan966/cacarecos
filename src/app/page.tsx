import { NavigationBar } from "@/components/domain/navigation-bar";
import { Button } from "@/components/ui/button";
import { ContentCarousel } from "@/components/molecules/content-carousel";
import { CategoriesSection } from "@/components/organisms/categories-section";
import { ProductsSection } from "@/components/organisms/products-section";

export default function Home() {
  return (
    <div className="mb-4">
      <NavigationBar />

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

      <CategoriesSection />

      <ProductsSection />
    </div>
  );
}
