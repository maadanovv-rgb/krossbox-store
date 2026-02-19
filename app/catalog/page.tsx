"use client";

import MobileFilterDrawer from "@/components/MobileFilterDrawer";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PRODUCTS } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

const BRANDS = ["Nike", "Adidas", "New Balance", "Puma", "Asics"] as const;
type SortKey = "newest" | "price_asc" | "price_desc";

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full border px-4 py-2 text-sm font-semibold transition whitespace-nowrap " +
        (active
          ? "border-black bg-black text-white"
          : "border-neutral-300 bg-white hover:bg-neutral-50")
      }
    >
      {children}
    </button>
  );
}

function setParam(url: URL, key: string, value: string | null) {
  if (!value) url.searchParams.delete(key);
  else url.searchParams.set(key, value);
}

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // читаем URL параметры
  const brandParam = searchParams.get("brand") ?? "";
  const tagParam = searchParams.get("tag") ?? "";
  const genderParam = searchParams.get("gender") ?? ""; // men | women
  const categoryParam = searchParams.get("category") ?? "";

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");

  const sp = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);


  // helper: обновить URL без перезагрузки
  const updateUrl = (patch: { brand?: string | null; tag?: string | null; gender?: string | null; category?: string | null }) => {
    const url = new URL(window.location.href);
    if ("brand" in patch) setParam(url, "brand", patch.brand ?? null);
    if ("tag" in patch) setParam(url, "tag", patch.tag ?? null);
    if ("gender" in patch) setParam(url, "gender", patch.gender ?? null);
    if ("category" in patch) setParam(url, "category", patch.category ?? null);
    router.push(url.pathname + url.search);
  };

  const filtered = useMemo(() => {
    let arr = PRODUCTS.slice();

    if (brandParam) arr = arr.filter((p) => p.brand === brandParam);
    if (categoryParam) arr = arr.filter((p) => p.category === categoryParam);
    if (tagParam) arr = arr.filter((p) => p.tags?.includes(tagParam as any));
    if (genderParam) arr = arr.filter((p) => p.gender === genderParam);

    const q = query.trim().toLowerCase();
    if (q) {
      arr = arr.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sort === "price_asc") arr.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") arr.sort((a, b) => b.price - a.price);
    if (sort === "newest") {
      arr.sort(
        (a, b) =>
          Number(Boolean(b.tags?.includes("new"))) - Number(Boolean(a.tags?.includes("new")))
      );
    }

    return arr;
  }, [brandParam, categoryParam, tagParam, genderParam, query, sort]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="text-xs text-neutral-500">
        <Link className="hover:underline" href="/">Главная</Link> / Каталог
      </div>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Каталог
        </h1>

        <div className="flex items-center gap-2">
          <div className="text-xs text-neutral-500">Сортировка:</div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold"
          >
            <option value="newest">Сначала новые</option>
            <option value="price_asc">Цена: по возрастанию</option>
            <option value="price_desc">Цена: по убыванию</option>
          </select>
        </div>
      </div>


      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="h-max rounded-2xl border border-neutral-200 bg-white p-4 lg:sticky lg:top-24 hidden md:block sticky top-24">
          <div className="text-sm font-extrabold">Раздел</div>
          <div className="mt-3 flex flex-col gap-1">
             <Link
              href={`/catalog?gender=men`}
              className={
                "w-full rounded-xl px-3 py-2 text-left text-sm font-semibold " +
                (genderParam === "men" ? "bg-neutral-100" : "hover:bg-neutral-50")
              }
            >
              Мужское
            </Link>
            <Link
              href={`/catalog?gender=women`}
              className={
                "w-full rounded-xl px-3 py-2 text-left text-sm font-semibold " +
                (genderParam === "women" ? "bg-neutral-100" : "hover:bg-neutral-50")
              }
            >
              Женское
            </Link>
          </div>

          <div className="mt-6 text-sm font-extrabold">Бренды</div>
          <div className="mt-3 flex flex-col gap-1">
           <button
            onClick={() => updateUrl({ gender: null })}
            className={
              "w-full rounded-xl px-3 py-2 text-left text-sm font-semibold " +
              (!genderParam ? "bg-neutral-100" : "hover:bg-neutral-50")
            }
          >
            Показать всё
          </button>
            <div className="my-2 h-px bg-neutral-200" />
            {BRANDS.map((b) => (
              <button
                key={b}
                onClick={() => updateUrl({ brand: b })}
                className={"w-full rounded-xl px-3 py-2 text-left text-sm font-semibold " + (brandParam === b ? "bg-neutral-100" : "hover:bg-neutral-50")}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-sm font-extrabold">Поиск</div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Например: Air Max"
              className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
            />
          </div>

          <button
            onClick={() => {
              setQuery("");
              setSort("newest");
              router.push("/catalog");
            }}
            className="mt-6 w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-neutral-50"
          >
            Сбросить всё
          </button>
        </aside>

        {/* Grid */}
        <div className="mb-4 flex items-center justify-between gap-2 md:hidden">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-extrabold"
          >
            Фильтры
          </button>

          <button className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-extrabold">
            Сорт
          </button>
        </div>

        <section>
          <div className="mb-3 text-sm text-neutral-500">Найдено: {filtered.length}</div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      </div>
      <MobileFilterDrawer
      open={filtersOpen}
      onClose={() => setFiltersOpen(false)}
      sp={new URLSearchParams(sp.toString())}
      brands={["Nike", "Adidas", "New Balance", "Puma", "Asics"]}
    />

    </div>
  );
}
