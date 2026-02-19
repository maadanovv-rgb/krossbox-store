import Link from "next/link";
import { Product } from "@/app/data/products";
import { formatSom } from "@/app/lib/utils";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-red-600 px-2 py-1 text-[11px] font-extrabold text-white">
      {children}
    </div>
  );
}

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="group">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
        <div className="absolute left-3 top-3 flex gap-2">
          {p.tags?.includes("new") && <Tag>НОВИНКА</Tag>}
          {p.tags?.includes("sale") && <Tag>SALE</Tag>}
        </div>

        <div className="aspect-[4/3]">
          <img
            src={p.images[0]}
            alt={p.title}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition"
          />
        </div>
      </div>

      <div className="pt-3">
        <div className="text-xs font-semibold text-neutral-500">{p.brand}</div>
        <div className="mt-1 text-sm font-semibold text-neutral-900 line-clamp-2">
          {p.title}
        </div>

        <div className="mt-2 text-sm font-extrabold text-neutral-900">
          {formatSom(p.price)}
        </div>

        <div className="mt-2 text-xs text-neutral-500">
          Размеры: {p.sizes.slice(0, 5).join(", ")}
          {p.sizes.length > 5 ? "…" : ""}
        </div>
      </div>
    </Link>
  );
}
