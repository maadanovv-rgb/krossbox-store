"use client";

import { useEffect } from "react";
import Link from "next/link";

function buildHref(current: URLSearchParams, patch: Record<string, string | null>) {
  const next = new URLSearchParams(current.toString());
  for (const [k, v] of Object.entries(patch)) {
    if (v === null || v === "") next.delete(k);
    else next.set(k, v);
  }
  const q = next.toString();
  return q ? `/catalog?${q}` : "/catalog";
}

export default function MobileFilterDrawer({
  open,
  onClose,
  sp,
  brands,
}: {
  open: boolean;
  onClose: () => void;
  sp: URLSearchParams;
  brands: string[];
}) {
  // запрет скролла body когда drawer открыт
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const brand = sp.get("brand") ?? "";
  const gender = sp.get("gender") ?? "";

  return (
    <div className="fixed inset-0 z-[999] md:hidden">
      {/* overlay */}
      <button
        aria-label="close"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* drawer */}
      <div className="absolute left-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
          <div className="text-base font-extrabold">Фильтры</div>
          <button
            onClick={onClose}
            className="rounded-lg border border-neutral-200 px-3 py-2 text-sm font-semibold"
          >
            ✕
          </button>
        </div>

        <div className="h-full overflow-y-auto px-4 py-4 pb-24">
          {/* Раздел */}
          <div className="text-sm font-extrabold">Раздел</div>
          <div className="mt-3 flex flex-col gap-2">
            <Link
              onClick={onClose}
              href={buildHref(sp, { gender: "men" })}
              className={
                "rounded-xl border px-3 py-3 text-sm font-semibold " +
                (gender === "men" ? "border-black bg-black text-white" : "border-neutral-200")
              }
            >
              Мужское
            </Link>

            <Link
              onClick={onClose}
              href={buildHref(sp, { gender: "women" })}
              className={
                "rounded-xl border px-3 py-3 text-sm font-semibold " +
                (gender === "women" ? "border-black bg-black text-white" : "border-neutral-200")
              }
            >
              Женское
            </Link>

            <Link
              onClick={onClose}
              href={buildHref(sp, { gender: null })}
              className={
                "rounded-xl border px-3 py-3 text-sm font-semibold " +
                (!gender ? "border-black bg-black text-white" : "border-neutral-200")
              }
            >
              Показать всё
            </Link>
          </div>

          {/* Бренды */}
          <div className="mt-8 text-sm font-extrabold">Бренды</div>
          <div className="mt-3 flex flex-col gap-1">
            <Link
              onClick={onClose}
              href={buildHref(sp, { brand: null })}
              className={
                "rounded-xl px-3 py-2 text-sm font-semibold " +
                (!brand ? "bg-neutral-100" : "hover:bg-neutral-50")
              }
            >
              Все бренды
            </Link>
            <div className="my-2 h-px bg-neutral-200" />

            {brands.map((b) => (
              <Link
                key={b}
                onClick={onClose}
                href={buildHref(sp, { brand: b })}
                className={
                  "rounded-xl px-3 py-2 text-sm font-semibold " +
                  (brand === b ? "bg-neutral-100" : "hover:bg-neutral-50")
                }
              >
                {b}
              </Link>
            ))}
          </div>

          {/* Сброс */}
          <div className="mt-8">
            <Link
              onClick={onClose}
              href="/catalog"
              className="block w-full rounded-xl border border-neutral-300 px-4 py-3 text-center text-sm font-extrabold hover:bg-neutral-50"
            >
              Сбросить всё
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
