import Link from "next/link";

const MENU = [
  { label: "Новинки", href: "/catalog?tag=new" },
  { label: "Мужское", href: "/catalog?gender=men" },
  { label: "Женское", href: "/catalog?gender=women" },
  { label: "Аксессуары", href: "/catalog?category=Аксессуары" },
  { label: "Бренды", href: "/catalog" },
  { label: "Sale", href: "/catalog?tag=sale" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
            {/* Left: logo */}
            <div className="flex items-center gap-3">
              <button
                className="rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold hover:bg-white/10 md:hidden"
                aria-label="menu"
                title="menu"
              >
                ☰
              </button>

              <Link href="/" className="text-xl font-extrabold tracking-tight">
                krossbox
                <span className="text-orange-400">?</span>
              </Link>
            </div>

            {/* Center: menu + search */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-5 text-sm font-semibold">
                {MENU.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="hover:text-white/80 whitespace-nowrap"
                  >
                    {m.label}
                  </Link>
                ))}
              </nav>

              <div className="ml-auto w-[380px]">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <span className="text-white/70">⌕</span>
                  <input
                    placeholder="Поиск"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/60"
                  />
                </div>
              </div>
            </div>

            {/* Right: icons */}
            <div className="flex items-center justify-end gap-2">
              <a
                href="https://instagram.com/krossboxstore"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/996700123456"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-black hover:opacity-90"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile search */}
          <div className="pb-3 md:hidden">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="text-white/70">⌕</span>
              <input
                placeholder="Поиск"
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/60"
              />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {MENU.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="whitespace-nowrap rounded-full border border-white/15 px-4 py-2 text-xs font-semibold hover:bg-white/10"
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
