"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { PRODUCTS } from "@/app/data/products";
import { formatSom } from "@/app/lib/utils";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const SHOP_PHONE = "996700123456"; // потом заменишь на номер магазина

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = useMemo(
    () => PRODUCTS.find((p) => p.slug === params.slug),
    [params.slug]
  );

  const [size, setSize] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="text-xl font-bold">Товар не найден</div>
      </div>
    );
  }

  const waText = `Привет! Хочу заказать: ${product.title}.
Размер: ${size ?? "не выбрал"}.
Цена: ${formatSom(product.price)}.
Подскажите, есть в наличии?`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-neutral-100">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="text-sm text-neutral-500">{product.brand}</div>
          <h1 className="mt-1 text-3xl font-bold">{product.title}</h1>

          <div className="mt-4 flex items-baseline gap-3">
            <div className="text-2xl font-bold">{formatSom(product.price)}</div>
            {product.oldPrice && (
              <div className="text-neutral-400 line-through">
                {formatSom(product.oldPrice)}
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold">Выберите размер (EU)</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={
                    "rounded-xl border px-4 py-2 text-sm font-semibold " +
                    (size === s
                      ? "border-black bg-black text-white"
                      : "border-neutral-200 hover:bg-neutral-50")
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <WhatsAppButton
              phoneE164={SHOP_PHONE}
              text={waText}
              className="w-full rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
            />
            <div className="text-xs text-neutral-600">
              Бишкек • Самовывоз/доставка • Обмен по договорённости
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
