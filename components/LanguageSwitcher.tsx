"use client";
import { useState, useEffect } from "react";
import { changeLanguage } from "../actions/actions.language";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<"en" | "sv">("sv");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get the current locale from cookies or localStorage if available
    const storedLocale = localStorage.getItem("language") as "en" | "sv" | null;
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const handleClick = async () => {
    const newLang = locale === "sv" ? "en" : "sv";
    setLocale(newLang);
    localStorage.setItem("language", newLang);
    await changeLanguage();
  };

  // Don't render anything until after hydration
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="text-white text-sm font-medium border border-white/30 rounded px-3 py-1 hover:bg-white/10 transition-colors"
    >
      {locale === "sv" ? "EN" : "SV"}
    </button>
  );
}
