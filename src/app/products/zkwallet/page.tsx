import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import ProductChrome from "@/components/product/ProductChrome";
import ProductHero from "@/components/product/ProductHero";
import ProductCtaSection from "@/components/product/ProductCtaSection";
import { getProductLanding } from "@/content/products";

export async function generateMetadata(): Promise<Metadata> {
  const product = getProductLanding("zkwallet", await getLocale());
  if (!product) return {};
  return { title: product.title, description: product.description };
}

export default async function ZkwalletPage() {
  const product = getProductLanding("zkwallet", await getLocale());
  if (!product) notFound();
  const mpc = product.mpc!;

  return (
    <ProductChrome themeClass={product.themeClass}>
      <ProductHero product={product} />

      <section className="section zkp-problem-section" aria-labelledby="zkw-problem-title">
        <div className="container" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Problem</p>
            <h2 id="zkw-problem-title">{product.problemTitle}</h2>
            <p>{product.problemBody}</p>
          </div>

          <div className="zkp-problem-cards">
            {product.problems.map((item, i) => (
              <div className="zkp-problem-card" data-stagger key={i}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          <p className="zkp-problem-summary" data-stagger>
            {product.problemSummary}
          </p>
        </div>
      </section>

      <section className="section zkw-why-section" aria-labelledby="zkw-why-title">
        <div className="container" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Why MPC</p>
            <h2 id="zkw-why-title">{product.whyTitle}</h2>
            <p>{product.whyLead}</p>
          </div>
          <div className="zkw-compare">
            <div className="zkw-panel zkw-panel--as" data-stagger>
              <span className="zkw-panel-tag">AS-IS</span>
              <h3>{mpc.asisTitle}</h3>
              <ul>
                {mpc.asis.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="zkw-compare-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </div>
            <div className="zkw-panel zkw-panel--to" data-stagger>
              <span className="zkw-panel-tag">TO-BE</span>
              <h3>{mpc.tobeTitle}</h3>
              <ul>
                {mpc.tobe.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-answer-section" aria-labelledby="answer-title">
        <div className="container product-answer-panel" data-reveal>
          <div className="section-copy">
            <p className="eyebrow">{product.answerEyebrow}</p>
            <h2 id="answer-title">{product.answerTitle}</h2>
            <p>{product.answerBody}</p>
          </div>
          <div className="product-answer-content">
            <figure className="product-context-media">
              <img
                src={product.answerImage.src}
                alt={product.answerImage.alt}
                width={product.answerImage.width}
                height={product.answerImage.height}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="answer-card-grid">
              {product.answerCards.map((item, i) => (
                <article key={i}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section zkw-mpc-section" aria-labelledby="zkw-mpc-title">
        <div className="container" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">MPC Signing</p>
            <h2 id="zkw-mpc-title">{mpc.sectionTitle}</h2>
            <p>{mpc.sectionLead}</p>
          </div>
          <div className="zkw-mpc-card" data-stagger>
            <div className="zkw-mpc-nodes">
              {["A", "B", "C"].map((shard) => (
                <div className="zkw-node" key={shard}>
                  <strong>Party Node {shard}</strong>
                  <span>
                    {mpc.shardLabel} {shard}
                  </span>
                  <em>{mpc.partialSig}</em>
                </div>
              ))}
            </div>
            <div className="zkw-merge" aria-hidden="true">
              <svg viewBox="0 0 440 34" preserveAspectRatio="none">
                <path d="M72 2 L214 31 M220 2 V31 M368 2 L226 31" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <div className="zkw-manager">
              <strong>Manager</strong>
              <span>{mpc.collectLabel}</span>
            </div>
            <div className="zkw-mpc-tail">
              <span className="zkw-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </span>
              <span className="zkw-sig">Full Signature → {mpc.chainLabel}</span>
            </div>
            <p className="zkw-mpc-note">{mpc.note}</p>
          </div>
        </div>
      </section>

      <section className="section zkp-proof-section" aria-labelledby="proof-title">
        <div className="container" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">{product.proofEyebrow}</p>
            <h2 id="proof-title">{product.proofTitle}</h2>
            <p>{product.proofBody}</p>
          </div>
          <div className="zkp-proof-cards">
            {product.proofPoints.map((item, i) => (
              <article className="zkp-proof-card" data-stagger key={i}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductCtaSection product={product} />
    </ProductChrome>
  );
}
