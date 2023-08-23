import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { NavigationBar } from "@/components/domain/navigation-bar";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/molecules/section-header";
import { ProductCard } from "@/components/domain/product-card";
import { ContentCarousel } from "@/components/molecules/content-carousel";

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

      <section className="space-y-2">
        <SectionHeader title="Procure por uma categoria">
          <Button size="icon" variant="outline">
            <ChevronLeftIcon />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRightIcon />
          </Button>
        </SectionHeader>

        <div className="grid grid-cols-5 gap-2 h-16 bg-green-50">
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
          <Button className="h-full">Categoria tal</Button>
        </div>
      </section>

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
