import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import ProductChrome from "@/components/product/ProductChrome";
import ProductHero from "@/components/product/ProductHero";
import ProductCtaSection from "@/components/product/ProductCtaSection";
import { getProductLanding } from "@/content/products";

export async function generateMetadata(): Promise<Metadata> {
  const product = getProductLanding("zkporl", await getLocale());
  if (!product) return {};
  return { title: product.title, description: product.description };
}

export default async function ZkporlPage() {
  const product = getProductLanding("zkporl", await getLocale());
  if (!product) notFound();
  const venn = product.venn!;
  const flow = product.flow!;
  const table = product.table!;

  return (
    <ProductChrome themeClass={product.themeClass}>
      <ProductHero product={product} />

      <section className="section zkp-problem-section" aria-labelledby="zkp-problem-title">
        <div className="container" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Problem</p>
            <h2 id="zkp-problem-title">{product.problemTitle}</h2>
            <p>{product.problemBody}</p>
          </div>

          <div className="zkp-problem-callout" data-stagger>
            <span className="zkp-problem-callout-badge">{product.problemCalloutBadge}</span>
            <p className="zkp-problem-callout-body">{product.problemCalloutBody}</p>
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

      <section className="zkp-why-section" data-zkp-why>
        <div className="zkp-why-inner">
          <div className="container" data-reveal>
            <div className="zkp-why-header">
              <p className="zkp-why-eyebrow">ZKP VALUE</p>
              <h2 className="zkp-why-title">{product.whyTitle}</h2>
              <p className="zkp-why-lead">{product.whyLead}</p>
            </div>
            <div className="zkp-venn">
              <svg
                className="venn-svg"
                viewBox="0 0 800 400"
                role="img"
                aria-label="영지식증명 가치 다이어그램"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <clipPath id="venn-left-clip">
                    <circle cx="270" cy="200" r="190" />
                  </clipPath>
                </defs>

                <circle cx="270" cy="200" r="190" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <circle cx="530" cy="200" r="190" fill="rgba(20,184,166,0.08)" stroke="rgba(20,184,166,0.4)" strokeWidth="1.5" />
                <circle cx="530" cy="200" r="190" fill="rgba(20,184,166,0.3)" clipPath="url(#venn-left-clip)" />

                <text x="210" y="185" textAnchor="middle" fontSize="16" fontWeight="700" fill="rgba(255,255,255,0.92)">{venn.leftTitle}</text>
                <text x="210" y="210" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.55)">{venn.leftDesc[0]}</text>
                <text x="210" y="228" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.55)">{venn.leftDesc[1]}</text>
                <text x="210" y="246" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.55)">{venn.leftDesc[2]}</text>

                <text x="400" y="190" textAnchor="middle" fontSize="21" fontWeight="700" fill="#5eead4">zkPoRL</text>
                <text x="400" y="212" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.7)">{venn.centerDesc}</text>
                {venn.centerDesc2 !== "" && (
                  <text x="400" y="228" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.7)">{venn.centerDesc2}</text>
                )}

                <text x="590" y="185" textAnchor="middle" fontSize="16" fontWeight="700" fill="rgba(255,255,255,0.92)">{venn.rightTitle}</text>
                <text x="590" y="210" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.55)">{venn.rightDesc[0]}</text>
                <text x="590" y="228" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.55)">{venn.rightDesc[1]}</text>
                <text x="590" y="246" textAnchor="middle" fontSize="12.5" fill="rgba(255,255,255,0.55)">{venn.rightDesc[2]}</text>
              </svg>
            </div>
            <table className="zkp-compare-table">
              <thead>
                <tr>
                  <th>{table.header1}</th>
                  <th>{table.header2}</th>
                  <th>zkPoRL</th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.label}</td>
                    <td>{row.traditional}</td>
                    <td>{row.modern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <section className="section zkps-section" aria-labelledby="zkps-title">
        <div className="container" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Solution Flow</p>
            <h2 id="zkps-title">{flow.sectionTitle}</h2>
            <p>{flow.subtitle}</p>
          </div>

          <div className="zkps-flow">
            <div className="zkps-side zkps-side--in">
              <div className="zkps-node" data-stagger>
                <span className="zkps-icon zkps-icon--in" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="8" ry="3" />
                    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                  </svg>
                </span>
                <div className="zkps-card">
                  <strong>{flow.in1Title}</strong>
                  <span>ledger_change_event</span>
                </div>
              </div>
              <div className="zkps-node" data-stagger>
                <span className="zkps-icon zkps-icon--in" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="6" width="19" height="13" rx="2.5" />
                    <path d="M2.5 9.5h19" />
                    <path d="M16.5 13.5h2" />
                  </svg>
                </span>
                <div className="zkps-card">
                  <strong>{flow.in2Title}</strong>
                  <span>wallet snapshot</span>
                </div>
              </div>
              <div className="zkps-node" data-stagger>
                <span className="zkps-icon zkps-icon--in" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.5 4.5 5.5v6c0 4.5 3 8 7.5 10 4.5-2 7.5-5.5 7.5-10v-6Z" />
                  </svg>
                </span>
                <div className="zkps-card">
                  <strong>{flow.in3Title}</strong>
                  <span>chain event</span>
                </div>
              </div>
            </div>

            <div className="zkps-conn zkps-conn--in" aria-hidden="true">
              <svg viewBox="0 0 60 240" preserveAspectRatio="none">
                <path d="M0 40 H30 V120 M0 120 H30 M0 200 H30 V120 H60" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className="zkps-server" data-stagger>
              <p className="zkps-server-name">zkPoRL Server</p>
              <div className="zkps-pipeline">
                <span className="zkps-ring">Assemble</span>
                <span className="zkps-ring">Prove</span>
                <span className="zkps-ring">Submit</span>
                <span className="zkps-ring">Finalize</span>
              </div>
              <p className="zkps-server-desc">{flow.serverDesc}</p>
            </div>

            <div className="zkps-conn zkps-conn--out" aria-hidden="true">
              <svg viewBox="0 0 60 240" preserveAspectRatio="none">
                <path d="M0 120 H30 V40 H60 M30 120 H60 M30 120 V200 H60" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className="zkps-side zkps-side--out">
              <div className="zkps-node" data-stagger>
                <div className="zkps-card">
                  <strong>{flow.out1Title}</strong>
                  <span>{flow.out1Sub}</span>
                </div>
                <span className="zkps-icon zkps-icon--out" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2.5" />
                    <path d="M7 9h10M7 13h7M7 17h4" />
                  </svg>
                </span>
              </div>
              <div className="zkps-node" data-stagger>
                <div className="zkps-card">
                  <strong>{flow.out2Title}</strong>
                  <span>{flow.out2Sub}</span>
                </div>
                <span className="zkps-icon zkps-icon--out" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8.5 12 2.5 2.5 4.5-5" />
                  </svg>
                </span>
              </div>
              <div className="zkps-node" data-stagger>
                <div className="zkps-card">
                  <strong>{flow.out3Title}</strong>
                  <span>Evidence Bundle</span>
                </div>
                <span className="zkps-icon zkps-icon--out" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21Z" />
                    <path d="M14 2.5V6.5h4" />
                    <path d="M9 12h6M9 15.5h6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <p className="zkps-note">{flow.note}</p>
        </div>
      </section>

      <section className="section zkp-flow-section" aria-labelledby="workflow-title">
        <div className="container" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">{product.workflowEyebrow}</p>
            <h2 id="workflow-title">{product.workflowTitle}</h2>
            <p>{product.workflowBody}</p>
          </div>
          <div className="zkp-flow-cards">
            {product.workflow!.map((item) => (
              <article className="zkp-flow-card" data-stagger key={item.number}>
                <span className="zkp-flow-num">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
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
