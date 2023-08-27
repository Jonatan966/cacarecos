import { Carousel } from "@/entities/carousel";

export function generateCarouselActionLink(carousel: Carousel) {
  if (carousel.refereal_product) {
    return `/products/${carousel.refereal_product.slug}`;
  }

  const searchObject = Object.fromEntries(
    Object.entries({
      category: carousel.refereal_category?.slug || "",
    }).filter(([, value]) => !!value)
  );

  const searchParams = new URLSearchParams(searchObject).toString();

  return `/products?${searchParams}`;
}
