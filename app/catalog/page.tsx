import { Suspense } from "react";
import CatalogClient from "./CatalogClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-10">Загрузка каталога...</div>}>
      <CatalogClient />
    </Suspense>
  );
}
