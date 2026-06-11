import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import ProductChrome from "@/components/product/ProductChrome";
import ProductHero from "@/components/product/ProductHero";
import ProductCtaSection from "@/components/product/ProductCtaSection";
import { getProductLanding } from "@/content/products";

export async function generateMetadata(): Promise<Metadata> {
  const product = getProductLanding("zkvoting", await getLocale());
  if (!product) return {};
  return { title: product.title, description: product.description };
}

export default async function ZkvotingPage() {
  const product = getProductLanding("zkvoting", await getLocale());
  if (!product) notFound();

  return (
    <ProductChrome themeClass={product.themeClass}>
      <ProductHero product={product} />

      <section className="section product-detail-section" aria-labelledby="problem-title">
        <div className="container split-heading" data-reveal>
          <div>
            <p className="eyebrow">Why zkVoting?</p>
            <h2 id="problem-title">{product.problemTitle}</h2>
          </div>
          <p>{product.problemBody}</p>
        </div>
        <div className="container detail-card-grid" data-reveal>
          {product.problems.map((item, i) => (
            <article key={i}>
              <span>Problem</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
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

      <section className="section product-flow-section" aria-labelledby="workflow-title">
        <div className="container section-heading" data-reveal>
          <p className="eyebrow">{product.workflowEyebrow}</p>
          <h2 id="workflow-title">{product.workflowTitle}</h2>
          <p>{product.workflowBody}</p>
        </div>
        <div className="container product-flow-rail" data-reveal>
          {product.workflow!.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-ops-section" aria-labelledby="operations-title">
        <div className="container split-heading" data-reveal>
          <div>
            <p className="eyebrow">{product.operationsEyebrow}</p>
            <h2 id="operations-title">{product.operationsTitle}</h2>
          </div>
          <p>{product.operationsBody}</p>
        </div>
        <div className="container detail-card-grid operations-grid" data-reveal>
          {product.operations!.map((item, i) => (
            <article key={i}>
              <span>{product.operationsDemoLabel}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-proof-section" aria-labelledby="proof-title">
        <div className="container product-proof-layout" data-reveal>
          <div className="section-copy sticky-copy">
            <p className="eyebrow">{product.proofEyebrow}</p>
            <h2 id="proof-title">{product.proofTitle}</h2>
            <p>{product.proofBody}</p>
          </div>
          <div className="proof-list">
            {product.proofPoints.map((item, i) => (
              <article key={i}>
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
