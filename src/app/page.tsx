import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { NavigationBar } from "@/components/domain/navigation-bar";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/molecules/section-header";
import { ProductCard } from "@/components/domain/product-card";
import { ContentCarousel } from "@/components/molecules/content-carousel";
import { CategoriesSection } from "@/components/organisms/categories-section";

export default function Home() {
  return (
    <>
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

      <section className="space-y-2">
        <SectionHeader title="Produtos mais vendidos">
          <Button size="icon" variant="outline">
            <ChevronLeftIcon />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRightIcon />
          </Button>
        </SectionHeader>

        <div className="grid grid-cols-4 gap-2 h-64">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}
