import type { ProductLanding } from "@/content/products";

/** Product landing hero — shared by all three product pages. */
export default function ProductHero({ product }: { product: ProductLanding }) {
  return (
    <section className="product-landing-hero" id="top" aria-labelledby="product-title" data-reveal>
      <div className="container product-hero-grid">
        <div className="product-hero-copy">
          <p className="eyebrow">{product.eyebrow}</p>
          <span className="product-name">{product.productName}</span>
          <h1 id="product-title">{product.heroTitle}</h1>
          <p className="product-lead">{product.heroLead}</p>
          <p className="product-audience">{product.audience}</p>
          <p className="product-note">{product.heroNote}</p>
          <ul className="product-signal-list" aria-label={`${product.productName} 핵심 정보`}>
            {product.stats.map((item, i) => (
              <li key={i}>
                {item.label !== "" && <span>{item.label}</span>}
                <strong>{item.value}</strong>
                <small>{item.detail}</small>
              </li>
            ))}
          </ul>
          <div className="hero-cta" aria-label="제품 행동">
            <a className="btn btn-primary" href={product.primaryCta.href}>
              {product.primaryCta.label}
            </a>
            <a className="btn btn-ghost" href={product.secondaryCta.href}>
              {product.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="product-hero-visual" aria-label={`${product.productName} 주요 지표`}>
          <figure className="product-visual-card">
            <img
              src={product.heroImage.src}
              alt={product.heroImage.alt}
              width={product.heroImage.width}
              height={product.heroImage.height}
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
