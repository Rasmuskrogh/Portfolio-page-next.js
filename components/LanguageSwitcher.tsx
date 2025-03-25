"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getLocale } from "next-intl/server";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("en"); // Standardvärde "en"
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "sv" : "en";
    setLocale(newLocale);

    startTransition(() => {
      router.refresh(); // Uppdaterar sidan utan att ladda om
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-4 py-2 border rounded"
    >
      {locale === "en" ? "SV" : "EN"}
    </button>
  );
}
