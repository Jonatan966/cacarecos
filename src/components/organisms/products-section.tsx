"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { SectionHeader } from "../molecules/section-header";
import { Button } from "../ui/button";
import { ProductCard } from "../domain/product-card";
import Carousel from "react-multi-carousel";
import { useRef } from "react";

export function ProductsSection() {
  const carouselRef = useRef<Carousel>();

  return (
    <section className="space-y-2">
      <SectionHeader title="Produtos mais vendidos">
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselRef.current?.previous(undefined as any)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselRef.current?.next(undefined as any)}
        >
          <ChevronRightIcon />
        </Button>
      </SectionHeader>

      <Carousel
        ref={carouselRef as any}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        sliderClass=""
        containerClass=""
        itemClass="px-1 h-64"
        arrows={false}
        slidesToSlide={2}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </section>
  );
}
