import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/app/components/ProductCard";
import { PRODUCTS } from "@/app/data/products";

export default function HomePage() {
  const newOnes = PRODUCTS.filter((p) => p.tags?.includes("new")).slice(0, 8);
  const hits = PRODUCTS.filter((p) => p.tags?.includes("hit")).slice(0, 8);

  return (
    <div>
      <HeroBanner />

      {/* ВСЁ, ЧТО НИЖЕ — В КОНТЕЙНЕРЕ */}
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-12">
       <section className="mt-16">
          <div className="px-6 lg:px-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold">Новинки</h2>
              <Link href="/catalog?tag=new" className="text-sm hover:underline">
                Все →
              </Link>
            </div>

            <div className="mt-6 flex gap-6 overflow-x-auto scrollbar-hide pb-2">
              {newOnes.map((p) => (
                <div key={p.slug} className="min-w-[260px]">
                  <ProductCard p={p} />
                </div>
              ))}
            </div>
          </div>
        </section>

         <section className="mt-16">
          <div className="px-6 lg:px-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold">Хиты</h2>
              <Link href="/catalog?tag=hit" className="text-sm hover:underline">
                Все →
              </Link>
            </div>

            <div className="mt-6 flex gap-6 overflow-x-auto scrollbar-hide pb-2">
              {hits.map((p) => (
                <div key={p.slug} className="min-w-[260px]">
                  <ProductCard p={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
