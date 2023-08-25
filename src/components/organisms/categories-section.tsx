"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { SectionHeader } from "../molecules/section-header";
import { Button } from "../ui/button";
import Carousel from "react-multi-carousel";
import { useRef } from "react";

export function CategoriesSection() {
  const carouselRef = useRef<Carousel>();

  return (
    <section className="space-y-2">
      <SectionHeader title="Procure por uma categoria">
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
            items: 5,
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
        sliderClass="h-full"
        containerClass="h-16"
        itemClass="px-1"
        arrows={false}
        slidesToSlide={2}
      >
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
        <Button className="h-full w-full">Categoria tal</Button>
      </Carousel>
    </section>
  );
}
