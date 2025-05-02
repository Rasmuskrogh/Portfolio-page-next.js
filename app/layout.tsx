import { ReactNode } from "react";
import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { League_Spartan, Lato, Open_Sans } from "next/font/google";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: {
    default: "Rasmus Krogh-Andersen | Frontend Developer",
    template: "%s | Rasmus Krogh-Andersen",
  },
  description:
    "Frontend developer specializing in React, TypeScript, and Next.js. Creating modern, responsive web applications with a focus on user experience.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Rasmus Krogh-Andersen" }],
  creator: "Rasmus Krogh-Andersen",
  publisher: "Rasmus Krogh-Andersen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio-page-next-js.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
      <body
        className="flex min-h-screen flex-col bg-gray-100 text-gray-900"
        suppressHydrationWarning
      >
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
