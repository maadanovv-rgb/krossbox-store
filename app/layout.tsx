// app/layout.tsx
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main className="pb-16">{children}</main>
      </body>
    </html>
  );
}
