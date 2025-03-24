import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasmus Krogh-Andersen | Portfolio",
  description: "Frontendutvecklare med fokus på React och TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <footer className="bg-gray-900 text-white py-4 text-center mt-8">
          © {new Date().getFullYear()} Rasmus Krogh-Andersen. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
