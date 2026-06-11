export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

// Matches the cookie name used by the original Rust/Axum site so existing
// visitors keep their language preference.
export const LOCALE_COOKIE = "zkrypto-language";

export function isLocale(value: unknown): value is Locale {
  return value === "ko" || value === "en";
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}
