import { createContext, useContext, useState, type ReactNode } from "react";

type Locale = "zh" | "en";

type I18nCtx = {
  locale: Locale;
  toggle: () => void;
  t: (zh: string, en: string) => string;
};

const Ctx = createContext<I18nCtx>({
  locale: "zh",
  toggle: () => {},
  t: (zh) => zh,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const toggle = () => setLocale((l) => (l === "zh" ? "en" : "zh"));
  const t = (zh: string, en: string) => (locale === "zh" ? zh : en);
  return <Ctx.Provider value={{ locale, toggle, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
