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
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <label className="block mb-2 text-gray-700">
        {t("name")}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-2 text-gray-700">
        {t("email")}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-4 text-gray-700">
        {t("message")}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1 h-32"
        ></textarea>
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {t("button")}
      </button>

      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </form>
  );
}
