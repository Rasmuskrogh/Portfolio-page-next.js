"use client";
import { useTranslations } from "next-intl";

import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("Contact.form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Meddelandet har skickats!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Något gick fel, försök igen.");
      }
    } catch (error) {
      setStatus("Något gick fel, försök igen.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-[#1a1a1a] rounded-lg shadow-lg"
    >
      <label className="block mb-6 text-white">
        <span className="block text-lg font-lato mb-2">{t("name")}</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:border-[#fb6f4c] transition-colors"
          placeholder={t("name")}
        />
      </label>

      <label className="block mb-6 text-white">
        <span className="block text-lg font-lato mb-2">{t("email")}</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:border-[#fb6f4c] transition-colors"
          placeholder={t("email")}
        />
      </label>

      <label className="block mb-8 text-white">
        <span className="block text-lg font-lato mb-2">{t("message")}</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:border-[#fb6f4c] transition-colors h-32 resize-none"
          placeholder={t("message")}
        ></textarea>
      </label>

      <button
        type="submit"
        className="w-full bg-[#fb6f4c] text-white p-3 rounded font-lato text-lg hover:bg-[#fb6f4c]/90 transition-colors"
      >
        {t("button")}
      </button>

      {status && (
        <p className="mt-6 text-center text-white font-lato">{status}</p>
      )}
    </form>
  );
}
