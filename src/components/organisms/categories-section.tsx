"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { SectionHeader } from "../molecules/section-header";
import { Button } from "../ui/button";
import Carousel from "react-multi-carousel";
import { useRef } from "react";
import { Category } from "@/entities/category";
import Link from "next/link";

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection(props: CategoriesSectionProps) {
  const carouselRef = useRef<Carousel>();

  return (
    <section className="space-y-2">
      <SectionHeader title="Procure por uma categoria">
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
        {props.categories.map((category) => (
          <Link key={category.id} href={`/products?category=${category.slug}`}>
            <Button variant="outline" className="h-full w-full">
              {category.title}
            </Button>
          </Link>
        ))}
      </Carousel>
    </section>
  );
}
