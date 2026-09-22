import type { Metadata } from "next";
import "./globals.css";

// TODO: Zastąp domyślne metadane konfiguracją opisującą cały serwis.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "Katalog z produktami",
    template: "%s | Katalog z produktami",
  },
  description: "Najlepsze produkty w sieci - Render & SEO Lab",
  openGraph: {
    title: "Sklep z produktami",
    description: "Najlepsze produkty w sieci - Render & SEO Lab",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
