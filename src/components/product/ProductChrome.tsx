import { getLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SiteBehavior from "@/components/SiteBehavior";
import { getSiteContent } from "@/content/site";

interface ProductChromeProps {
  themeClass: string;
  children: React.ReactNode;
}

/** Shared shell for product landing pages — the `product-page` wrapper plus the
 *  solid header, contact modal, footer and client behaviour. Mirrors
 *  product_base.html (footer/modal use the site-level content). */
export default async function ProductChrome({ themeClass, children }: ProductChromeProps) {
  const content = getSiteContent(await getLocale());

  return (
    <div className={`product-page ${themeClass}`}>
      <Header variant="product" logoSrc={content.logoSrc} logoAlt={content.logoAlt} />

      <main id="main">{children}</main>

      <ContactModal
        title={content.finalCta.title}
        body={content.finalCta.body}
        labels={content.contactLabels}
      />

      <Footer
        variant="product"
        logoSrc={content.logoSrc}
        logoAlt={content.logoAlt}
        footer={content.footer}
      />

      <SiteBehavior />
    </div>
  );
}
