import { ReactNode } from "react";
import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { League_Spartan, Lato, Open_Sans } from "next/font/google";

import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${leagueSpartan.variable} ${lato.variable} ${openSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-900 text-white py-4 text-center text-sm md:text-base">
            © {new Date().getFullYear()} Rasmus Krogh-Andersen. All rights
            reserved.
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
