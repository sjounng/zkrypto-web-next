import type { Locale } from "@/i18n/config";

/** A string that exists in both supported languages (mirrors Rust LocalizedStr). */
export interface Localized {
  ko: string;
  en: string;
}

/** Shorthand constructor — `ls("한국어", "English")`. */
export function ls(ko: string, en: string): Localized {
  return { ko, en };
}

/** Builds a resolver bound to a locale: `const t = localizer(locale); t(ls(...))`. */
export function localizer(locale: Locale) {
  return (value: Localized): string => value[locale];
}
