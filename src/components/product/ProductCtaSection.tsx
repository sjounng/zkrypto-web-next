import type { ProductLanding } from "@/content/products";

/** Final CTA + related-product card — shared by all three product pages. */
export default function ProductCtaSection({ product }: { product: ProductLanding }) {
  return (
    <section
      className="final-cta product-final-cta"
      id="contact"
      aria-labelledby="product-cta-title"
      data-reveal
    >
      <div className="container cta-layout product-cta-layout">
        <div>
          <p className="eyebrow">{product.ctaEyebrow}</p>
          <h2 id="product-cta-title">{product.ctaTitle}</h2>
          <p>{product.ctaBody}</p>
          <div className="cta-actions" aria-label="다음 행동">
            <a className="btn btn-action" href={product.primaryCta.href}>
              <span>{product.primaryCta.label}</span>
              <span className="btn-arrow" aria-hidden="true"></span>
            </a>
            <a className="btn btn-ghost" href={product.secondaryCta.href}>
              {product.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="product-related-card">
          <span>{product.relatedLabel}</span>
          <h3>{product.relatedName}</h3>
          <p>{product.relatedBody}</p>
          <a href={product.relatedHref}>{product.relatedLinkLabel}</a>
        </div>
      </div>
    </section>
  );
}
