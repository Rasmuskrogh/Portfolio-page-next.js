"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function changeLanguage() {
  const cookieStore = await cookies();
  const currentLang = cookieStore.get("language")?.value || "sv";
  const newLang = currentLang === "sv" ? "en" : "sv";

  // Uppdatera cookie
  cookieStore.set("language", newLang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  // Revalidate den aktuella sidan
  revalidatePath("/");
}
