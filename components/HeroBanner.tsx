import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-black">
      <div className="relative h-[340px] sm:h-[440px] lg:h-[560px]">
        <img
          src={`/Hero.webp`}
          alt="Hero"
          className="h-full w-full object-cover"
        />
        {/* overlay like size */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />

        {/* content (bounded) */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-10">
            <div className="max-w-2xl text-white">
              <div className="mt-5 flex gap-3">
                <Link
                  href="/catalog"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-extrabold text-black hover:opacity-90"
                >
                  Shop Now
                </Link>
                <Link
                  href="/catalog?tag=new"
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/15"
                >
                  Новинки
                </Link>
              </div>
            </div>

            <div className="ml-auto hidden items-end sm:flex">
              <div className="text-xl font-extrabold text-white">
                krossbox<span className="text-orange-400">?</span>{" "}
                <span className="font-semibold text-white/70">exclusive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
