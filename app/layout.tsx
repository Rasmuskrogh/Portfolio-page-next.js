import { ReactNode } from "react";
import Header from "@/components/Header";
/* import { usePathname } from "next/navigation"; // För att kolla på aktuell URL */
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  /*   const pathname = usePathname(); */
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
        <NextIntlClientProvider>
          <Header />
          <h1>Locale = {locale}</h1>
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <footer className="bg-gray-900 text-white py-4 text-center mt-8">
            © {new Date().getFullYear()} Rasmus Krogh-Andersen. All rights
            reserved.
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
