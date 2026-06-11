import { useTranslations } from "next-intl";

interface FooterLink {
  label: string;
  /** Omit for non-navigating concept keywords (rendered as plain text). */
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterData {
  entity: {
    brand: string;
    legalName: string;
    tagline: string;
    description: string;
  };
  columns: FooterColumn[];
  legal: {
    title: string;
    links: FooterLink[];
    email: string;
    address: string;
    business: string;
    tel: string;
  };
  disclaimer: string;
  copyright: string;
}

interface FooterProps {
  variant?: "home" | "product";
  logoSrc: string;
  logoAlt: string;
  footer: FooterData;
}

/** Site footer — AI-agent search-friendly 5-block layout:
 *  Entity / Solution / Trust / Company / Legal & Contact. */
export default function Footer({ variant = "home", logoSrc, logoAlt, footer }: FooterProps) {
  const t = useTranslations("Chrome");
  const isProduct = variant === "product";
  const { entity, columns, legal } = footer;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Block 1 — Entity */}
        <div className="footer-intro">
          <a
            className="brand footer-brand"
            href={isProduct ? "/" : "#top"}
            aria-label={isProduct ? t("brandHomeLink") : t("brandTop")}
          >
            <img
              className="brand-logo"
              src={logoSrc}
              alt={logoAlt}
              width={300}
              height={56}
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="footer-legal-name">{entity.legalName}</p>
          <p className="footer-tagline">{entity.tagline}</p>
          <p className="footer-note">{entity.description}</p>
        </div>

        {/* Blocks 2–5 — Solution / Trust / Company / Legal & Contact */}
        <div className="footer-links" aria-label={t("footerMenu")}>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <strong>{column.title}</strong>
              {column.links.map((link) =>
                link.href ? (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="footer-term">
                    {link.label}
                  </span>
                ),
              )}
            </nav>
          ))}

          <nav className="footer-legal" aria-label={legal.title}>
            <strong>{legal.title}</strong>
            {legal.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container footer-base">
        <div className="footer-contact">
          <a className="footer-contact-item" href={`mailto:${legal.email}`}>
            {legal.email}
          </a>
          <span className="footer-contact-item">{legal.address}</span>
          <span className="footer-contact-item">
            {legal.business} · Tel {legal.tel}
          </span>
        </div>
        <p className="footer-disclaimer">{footer.disclaimer}</p>
        <p className="footer-copyright">{footer.copyright}</p>
      </div>
    </footer>
  );
}
