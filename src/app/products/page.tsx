import { ProductCard } from "@/components/domain/product-card";
import { SectionHeader } from "@/components/molecules/section-header";
import { hygraphService } from "@/services/hygraph";

interface ProductsPageProps {
  searchParams: {
    category?: string;
    term?: string;
  };
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const products = await fetchProducts(searchParams);

  return (
    <>
      <section>
        <SectionHeader title="Resultados para a busca" />

        <div className="grid grid-cols-4 gap-2">
          {!!products.length ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <span className="text-muted-foreground text-sm whitespace-nowrap col-start-1 col-end-5 text-center py-8">
              Não há resultados correspondentes para essa busca
            </span>
          )}
        </div>
      </section>
    </>
  );
}

async function fetchProducts(search: ProductsPageProps["searchParams"]) {
  if (search.category) {
    return await hygraphService.getProductsByCategory({
      categorySlug: search.category,
    });
  }

  return await hygraphService.getProductsByTerm({
    term: search.term,
  });
}
