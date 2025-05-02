"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { sendEmail } from "@/lib/email";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await sendEmail(formData);
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-[#323131] text-white"
      data-color="dark"
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
          {t("title")}
        </h2>
        <div className="max-w-2xl mx-auto">
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
              <span className="block text-lg font-lato mb-2">
                {t("message")}
              </span>
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
              disabled={status === "submitting"}
              className="w-full bg-[#fb6f4c] text-white p-3 rounded font-lato text-lg hover:bg-[#fb6f4c]/90 transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? t("sending") : t("button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
