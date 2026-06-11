import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ProductChrome from "@/components/product/ProductChrome";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Newsroom");
  return { title: t("title"), description: t("description") };
}

export default async function NewsroomPage() {
  const t = await getTranslations("Newsroom");

  return (
    <ProductChrome themeClass="">
      <section
        className="product-landing-hero coming-soon"
        id="top"
        aria-labelledby="newsroom-title"
        data-reveal
      >
        <div className="container coming-soon-inner">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1 id="newsroom-title">{t("heading")}</h1>
          <p className="product-lead">{t("lead")}</p>
          <p className="product-note">{t("note")}</p>
          <div className="hero-cta" aria-label="Newsroom">
            <a className="btn btn-primary" href="/">
              {t("backHome")}
            </a>
            <a className="btn btn-ghost" href="/#contact">
              {t("contact")}
            </a>
          </div>
        </div>
      </section>
    </ProductChrome>
  );
}
