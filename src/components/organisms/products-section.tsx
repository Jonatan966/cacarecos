"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { SectionHeader } from "../molecules/section-header";
import { Button } from "../ui/button";
import { ProductCard } from "../domain/product-card";
import Carousel from "react-multi-carousel";
import { useRef } from "react";
import { Product } from "@/entities/product";

interface ProductsSectionProps {
  products: Product[];
  title: string;
}

export function ProductsSection(props: ProductsSectionProps) {
  const carouselRef = useRef<Carousel>();

  return (
    <section className="space-y-2">
      <SectionHeader title={props.title}>
        <Button
          size="icon"
          onClick={() => carouselRef.current?.previous(undefined as any)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
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
        {props.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </section>
  );
}
