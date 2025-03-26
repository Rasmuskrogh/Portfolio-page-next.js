import { useState } from "react";
import { changeLanguage } from "../actions/actions.language";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<"en" | "sv">("sv");

  const handleClick = async () => {
    const newLang = locale === "sv" ? "en" : "sv";
    setLocale(newLang);

    await changeLanguage();
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm font-medium border border-gray-300 rounded px-2 py-1 hover:bg-gray-200 transition"
    >
      {locale === "sv" ? "SV" : "EN"}
    </button>
  );
}
