"use client";

type Props = {
  brand: string;
  setBrand: (v: string) => void;
  size: string;
  setSize: (v: string) => void;
};

export default function Filters({ brand, setBrand, size, setSize }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="font-semibold">Фильтры</div>

      <label className="mt-4 block text-sm text-neutral-700">Бренд</label>
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="mt-2 w-full rounded-xl border border-neutral-200 p-3"
      >
        <option value="">Все</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="New Balance">New Balance</option>
        <option value="Puma">Puma</option>
        <option value="Asics">Asics</option>
      </select>

      <label className="mt-4 block text-sm text-neutral-700">Размер (EU)</label>
      <input
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="например 42"
        className="mt-2 w-full rounded-xl border border-neutral-200 p-3"
      />

      <button
        onClick={() => {
          setBrand("");
          setSize("");
        }}
        className="mt-4 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm font-semibold hover:bg-neutral-50"
      >
        Сбросить
      </button>
    </div>
  );
}
