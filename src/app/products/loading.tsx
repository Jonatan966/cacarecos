import { SectionHeader } from "@/components/molecules/section-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProductsPage() {
  return (
    <section>
      <SectionHeader title="Buscando produtos..." />
      <div className="grid grid-cols-4 gap-2">
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
        <Skeleton className="w-full h-[256px]" />
      </div>
    </section>
  );
}
