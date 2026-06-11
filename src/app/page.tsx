import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SiteBehavior from "@/components/SiteBehavior";
import UseCaseIcon from "@/components/UseCaseIcon";
import { getSiteContent } from "@/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const content = getSiteContent(await getLocale());
  return { title: content.title, description: content.description };
}

export default async function HomePage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);

  return (
    <>
      <Header variant="home" logoSrc={content.logoSrc} logoAlt={content.logoAlt} />

      <main id="main">
        <section className="hero photo-hero" id="top" aria-labelledby="hero-title" data-hero>
          <div className="hero-bg" aria-hidden="true" data-hero-bg></div>
          <div className="hero-scrim" aria-hidden="true"></div>
          <div className="container hero-content" data-reveal>
            <h1 id="hero-title">{content.hero.title}</h1>
            <p className="hero-sublead">{content.hero.sublead}</p>
            <p className="lead">{content.hero.lead}</p>
            <div className="hero-cta" aria-label="주요 행동">
              <a className="btn btn-primary" href={content.hero.primaryCta.href}>
                {content.hero.primaryCta.label}
              </a>
              <a className="btn btn-ghost" href={content.hero.secondaryCta.href}>
                {content.hero.secondaryCta.label}
              </a>
            </div>
            {content.hero.proofLabel !== "" && (
              <div className="hero-proof-row" aria-label="핵심 원칙">
                <span>{content.hero.proofLabel}</span>
              </div>
            )}
          </div>
        </section>

        <section
          className="ecosystem-section"
          id="ecosystem"
          aria-labelledby="ecosystem-title"
          data-ecosystem-marquee
        >
          <div className="container ecosystem-header">
            <div>
              <p className="eyebrow">{content.ecosystem.eyebrow}</p>
              <h2 id="ecosystem-title">{content.ecosystem.title}</h2>
              <p>{content.ecosystem.lead}</p>
            </div>
          </div>

          <div className="ecosystem-marquee" tabIndex={0} aria-label="협업 및 신뢰 네트워크 로고 흐름">
            <div className="ecosystem-track">
              <div className="ecosystem-group">
                {content.ecosystem.items.map((item, i) => (
                  <div className="ecosystem-card" key={`a-${i}`}>
                    <span className="ecosystem-logo-frame">
                      <img
                        src={item.logoSrc}
                        alt="협력사 로고"
                        width={300}
                        height={56}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                ))}
              </div>
              <div className="ecosystem-group" aria-hidden="true">
                {content.ecosystem.items.map((item, i) => (
                  <div className="ecosystem-card" key={`b-${i}`}>
                    <span className="ecosystem-logo-frame">
                      <img src={item.logoSrc} alt="" width={300} height={56} loading="lazy" decoding="async" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section standard-section" id="standard" aria-labelledby="standard-title">
          <div className="container standard-panel" data-reveal>
            <div className="section-copy" data-stagger>
              <p className="eyebrow">{content.standard.eyebrow}</p>
              <h2 id="standard-title">{content.standard.title}</h2>
              <p>{content.standard.body}</p>
            </div>
            <div className="standard-source" data-stagger aria-label="ISO 원문 출처">
              <span>{content.standard.sourceLabel}</span>
              <strong className="source-standard">{content.standard.sourceStandard}</strong>
              <p className="source-main-title">{content.standard.sourceMainTitle}</p>
              <p className="source-subtitle">
                {content.standard.sourceSubtitlePrefix}
                <span className="source-highlight">{content.standard.sourceSubtitleHighlight}</span>
              </p>
              <a href={content.standard.sourceUrl} target="_blank" rel="noreferrer">
                {content.standard.sourceLinkLabel}
              </a>
            </div>
            <figure className="standard-visual" data-stagger>
              <img
                src={content.standard.imageSrc}
                alt={content.standard.imageAlt}
                width={1659}
                height={948}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section usecase-section" id="use-cases" aria-labelledby="usecase-title">
          <div className="container usecase-stage">
            <div className="section-copy sticky-copy" data-reveal>
              <p className="eyebrow">Use Cases</p>
              <h2 id="usecase-title">{content.useCasesTitle}</h2>
              <p>{content.useCasesLead}</p>
            </div>
            <div className="usecase-orbit" aria-label="영지식증명 적용 분야" data-reveal>
              <div className="orbit-core">
                <span>ZKP</span>
                <p>Zero-Knowledge Proof</p>
              </div>
              {content.useCases.map((item) => (
                <article
                  className={`orbit-item ${item.className} ${item.toneClass}`}
                  data-stagger
                  key={item.icon}
                >
                  <span className="orbit-glyph" aria-hidden="true">
                    <UseCaseIcon name={item.icon} />
                  </span>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section product-section" id="products" aria-labelledby="products-title">
          <div className="container section-heading" data-reveal>
            <p className="eyebrow">{content.productGateway.eyebrow}</p>
            <h2 id="products-title">{content.productGateway.title}</h2>
          </div>

          <div
            className="container product-carousel"
            id="product-cards"
            aria-label="제품 슬라이드"
            data-reveal
            data-carousel
          >
            <div className="carousel-viewport">
              <div className="carousel-track" data-carousel-track>
                {content.productGateway.cards.map((item) => (
                  <a
                    className={`product-slide-card ${item.toneClass}`}
                    href={item.href}
                    aria-label={`${item.name} ${item.ctaLabel}`}
                    key={item.name}
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="orbit-card-name">{item.name}</span>
                    <span className="product-slide-caption">
                      <em>Click</em>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="carousel-footer">
              <button className="carousel-prev" type="button" aria-label="이전 제품" data-carousel-prev>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="carousel-dots" data-carousel-dots></div>
              <button className="carousel-next" type="button" aria-label="다음 제품" data-carousel-next>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="section proof-section" id="proof" aria-labelledby="proof-title">
          <div className="container proof-layout">
            <div className="proof-story" data-reveal>
              <p className="eyebrow">{content.trustProof.eyebrow}</p>
              <h2 id="proof-title">{content.trustProof.headline}</h2>
              <p>{content.trustProof.lead}</p>

              <div className="proof-timeline" aria-label="지크립토 신뢰 흐름">
                {content.trustProof.milestones.map((item) => (
                  <article data-stagger key={item.phase}>
                    <span>{item.phase}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="proof-card-grid" data-reveal>
              {content.trustProof.proofItems.map((item, i) => (
                <article className={`proof-card ${item.toneClass}`} data-stagger key={i}>
                  <span className="proof-label">{item.label}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="cta-title" data-reveal>
          <div className="container cta-solo">
            <p className="eyebrow">{content.finalCta.eyebrow}</p>
            <h2 id="cta-title">{content.finalCta.title}</h2>
            <p>{content.finalCta.body}</p>
            <div className="cta-actions" aria-label="다음 행동">
              <a className="btn btn-action" href={content.finalCta.primary.href}>
                <span>{content.finalCta.primary.label}</span>
                <span className="btn-arrow" aria-hidden="true"></span>
              </a>
              <a className="btn btn-ghost" href={content.finalCta.secondary.href}>
                {content.finalCta.secondary.label}
              </a>
              <a className="cta-text-link" href={content.finalCta.tertiary.href}>
                {content.finalCta.tertiary.label}
              </a>
            </div>
          </div>
        </section>
      </main>

      <ContactModal
        title={content.finalCta.title}
        body={content.finalCta.body}
        labels={content.contactLabels}
      />

      <Footer
        variant="home"
        logoSrc={content.logoSrc}
        logoAlt={content.logoAlt}
        footer={content.footer}
      />

      <SiteBehavior />
    </>
  );
}
