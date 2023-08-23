import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ShoppingBag, Heart, Star } from "lucide-react";

import { NavigationBar } from "@/components/domain/navigation-bar";
import { ProductCard } from "@/components/domain/product-card";
import { SectionHeader } from "@/components/molecules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductReview } from "@/components/domain/product-review";
import { ReviewResume } from "@/components/domain/review-resume";
import { ContentCarousel } from "@/components/molecules/content-carousel";

export default function ProductPage() {
  return (
    <>
      <NavigationBar />

      <section className="grid grid-cols-2 gap-2 h-96">
        <ContentCarousel
          listWidth={32}
          items={[
            {
              imageUrl: "/vercel.svg",
            },
            {
              imageUrl: "/vercel.svg",
            },
            {
              imageUrl: "/vercel.svg",
            },
          ]}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Produto tal</h1>
          <Badge className="self-start">Categoria tal</Badge>
          <p className="mb-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            cupiditate, neque placeat sit doloribus explicabo, illo sapiente
            molestiae minus veniam deleniti aliquam reiciendis optio officia ex,
            error modi laudantium dignissimos!
          </p>

          <b className="text-lg">R$ 99,99</b>

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

      <section>
        <SectionHeader title="Outros detalhes" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis
          atque at laboriosam dicta molestiae quaerat earum veritatis saepe
          culpa sed expedita, adipisci neque deserunt velit, nisi consequatur
          omnis eos.
        </p>
      </section>

      <section className="space-y-2">
        <SectionHeader title="Produtos relacionados">
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

      <section>
        <SectionHeader title="Opinião dos consumidores">
          <Button>Deixe sua opinião</Button>
        </SectionHeader>

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

          <div className="space-y-2">
            <ProductReview />
            <ProductReview />
            <ProductReview />
          </div>
        </div>
      </section>
    </>
  );
}
