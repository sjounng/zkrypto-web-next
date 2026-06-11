import { resolveLocale } from "@/i18n/config";
import { localizer, ls } from "./types";

/** Home page content, ported from `site_content()` in src/content.rs. */
export function getSiteContent(localeInput: string) {
  const t = localizer(resolveLocale(localeInput));
  return {
    title: t(
      ls(
        "ZKRYPTO | ISO/IEC 27565:2026 표준 기반 ZKP 신뢰 레이어",
        "ZKRYPTO | ZKP Trust Layer Based on ISO/IEC 27565:2026",
      ),
    ),
    description: t(
      ls(
        "지크립토는 ISO/IEC 27565:2026 글로벌 표준 기반 ZKP 기술로 데이터 공개를 최소화하고 필요한 사실만 증명하는 프라이버시 검증 구조를 설계합니다.",
        "ZKRYPTO designs privacy verification structures using ZKP technology based on the ISO/IEC 27565:2026 global standard — minimizing data disclosure and proving only what is necessary.",
      ),
    ),
    logoSrc: "/assets/zkrypto_logo.png",
    logoAlt: "ZKRYPTO",
    faviconSrc: "/assets/zkrypto-favicon.png",
    hero: {
      title: t(
        ls(
          "프라이버시와 컴플라이언스를\nZKP로 연결합니다.",
          "Connecting Privacy and Compliance\nwith ZKP.",
        ),
      ),
      sublead: t(
        ls(
          "ZKP(Zero-knowledge Proofs)는 ISO/IEC에서도 표준화한 암호학적 체계입니다. ",
          "ZKP (Zero-knowledge Proofs) is a cryptographic scheme standardized by ISO/IEC.",
        ),
      ),
      lead: t(
        ls(
          "지크립토는 ZKP를 활용하여 정보를 직접 공개하지 않고도, 필요한 사실만 증명할 수 있는 신뢰 레이어를 제공합니다.",
          "ZKRYPTO provides a trust layer using ZKP — proving only what needs to be verified without directly exposing the underlying information.",
        ),
      ),
      primaryCta: { label: t(ls("ZKP Product", "ZKP Product")), href: "#products" },
      secondaryCta: { label: t(ls("Contact", "Contact")), href: "#contact" },
      proofLabel: "",
    },
    ecosystem: {
      eyebrow: "",
      title: "",
      lead: "Partners",
      items: Array.from({ length: 8 }, () => ({ logoSrc: "/assets/zkrypto_logo.png" })),
    },
    useCasesTitle: t(
      ls(
        "공개하기 어려운 민감정보를 검증 받아야 하는 분야",
        "Fields that need to verify sensitive information without exposing it",
      ),
    ),
    useCasesLead: t(
      ls(
        "ZKP는 신원, 자격, 금융, 공공, AI 분야처럼 공개적으로 확인은 해야 하지만 원본은 공개하기가 어려운 딜레마를 해결합니다.",
        "ZKP resolves the dilemma in fields like identity, credentials, finance, public services, and AI — where verification is required but the underlying data cannot be disclosed.",
      ),
    ),
    contactLabels: {
      email: t(ls("이메일", "Email")),
      message: t(ls("문의 내용", "Message")),
      messagePlaceholder: t(
        ls(
          "적용 분야, 검증하려는 업무, 상담 희망 내용을 남겨주세요.",
          "Please describe your use case, the process you'd like to verify, and any consultation topics.",
        ),
      ),
      privacy: t(
        ls(
          "답변을 위한 개인정보 수집·이용에 동의합니다.",
          "I agree to the collection and use of personal information for the purpose of responding to my inquiry.",
        ),
      ),
      submit: t(ls("문의하기", "Send")),
    },
    standard: {
      eyebrow: "Global Standard",
      title: t(
        ls(
          "지크립토는 ISO/IEC 27565:2026과 함께 글로벌을 선도합니다.",
          "ZKRYPTO leads globally with ISO/IEC 27565:2026.",
        ),
      ),
      body: t(
        ls(
          "생년월일을 몰라도 성인 여부를 확인 가능하고, 거래내역 전체를 몰라도 거래 유효성을 검증할 수 있습니다.\nISO/IEC 27565:2026은 이러한 방식의 프라이버시 강화 기술을 다루는 글로벌 표준입니다.",
          "You can verify adulthood without knowing a birthdate, and validate a transaction without seeing the full transaction history.\nISO/IEC 27565:2026 is the global standard covering privacy-enhancing technologies of this kind.",
        ),
      ),
      sourceLabel: "",
      sourceStandard: "ISO/IEC 27565:2026",
      sourceMainTitle: "Information security, cybersecurity and privacy protection",
      sourceSubtitlePrefix: "- Guidelines on privacy preservation based on",
      sourceSubtitleHighlight: "  Zero-Knowledge Proofs",
      sourceUrl: "https://www.iso.org/standard/80398.html",
      sourceLinkLabel: t(ls("자료: ISO 공식 사이트", "Source: ISO official site")),
      imageSrc: "/assets/iso-standard-dossier.png",
      imageAlt: t(
        ls(
          "ISO 표준 문서를 연상시키는 ZKP 프라이버시 검증 자료 이미지",
          "ZKP privacy verification reference image resembling an ISO standard document",
        ),
      ),
    },
    useCases: [
      {
        title: t(ls("가상자산 준법·감사", "Crypto Compliance & Audit")),
        detail: t(ls("잔고대사, 감사 대응 증적자료", "Balance reconciliation, audit evidence")),
        className: "orbit-top",
        toneClass: "case-finance case-asset",
        icon: "audit",
      },
      {
        title: t(ls("투표·공공 신뢰", "Voting & Public Trust")),
        detail: t(ls("절차와 결과의 공정성 확보", "Ensuring fairness in process and results")),
        className: "orbit-right-top",
        toneClass: "case-trust",
        icon: "vote",
      },
      {
        title: t(ls("디지털 신원", "Digital Identity")),
        detail: t(ls("필요한 정보만 선택적 공개", "Selective disclosure of necessary information")),
        className: "orbit-right-bottom",
        toneClass: "case-trust",
        icon: "id",
      },
      {
        title: t(ls("자격·연령 확인", "Credential & Age Verification")),
        detail: t(ls("기준 충족 여부만 확인", "Verify compliance without revealing details")),
        className: "orbit-bottom",
        toneClass: "case-trust",
        icon: "age",
      },
      {
        title: t(ls("공정추첨·경매", "Fair Draw & Auction")),
        detail: t(ls("규칙대로 했는지 결과 검증", "Verify that rules were followed")),
        className: "orbit-left-bottom",
        toneClass: "case-finance case-lottery",
        icon: "lottery",
      },
      {
        title: t(ls("CBDC·기관형 분산원장", "CBDC & Institutional DLT")),
        detail: t(ls("정보보호 송금, 준비금 검증", "Privacy-preserving transfers, reserve verification")),
        className: "orbit-left-top",
        toneClass: "case-finance",
        icon: "cbdc",
      },
    ],
    productGateway: {
      eyebrow: "ZKP Product",
      title: t(ls("검증 가능한 신뢰 레이어를 제공합니다.", "We provide a verifiable trust layer.")),
      cards: [
        {
          name: "zkWallet",
          href: "/products/zkwallet",
          ctaLabel: t(ls("더 보기", "Learn more")),
          toneClass: "product-card-wallet",
          imageSrc: "/assets/zkwallet-product-slide-1.png",
          imageAlt: t(ls("zkWallet 제품소개서 첫 페이지 이미지", "zkWallet product introduction")),
          external: false,
        },
        {
          name: "zkPoRL",
          href: "/products/zkporl",
          ctaLabel: t(ls("더 보기", "Learn more")),
          toneClass: "product-card-porl",
          imageSrc: "/assets/zkporl-product-slide-1.png",
          imageAlt: t(ls("zkPoRL 제품소개서 첫 페이지 이미지", "zkPoRL product introduction")),
          external: false,
        },
        {
          name: "zkVoting",
          href: "/products/zkvoting",
          ctaLabel: t(ls("더 보기", "Learn more")),
          toneClass: "product-card-voting",
          imageSrc: "/assets/zkvoting-product-slide-2.png",
          imageAlt: t(ls("zkVoting 제품소개서 스타일 초안 이미지", "zkVoting product introduction draft")),
          external: true,
        },
      ],
    },
    trustProof: {
      eyebrow: "Trust",
      headline: "ZKRYPTO History",
      lead: t(
        ls(
          "ZKP 기술 기반 신뢰 레이어를 설계합니다.",
          "We design a trust layer based on ZKP technology.",
        ),
      ),
      milestones: [
        {
          phase: "Research",
          title: t(ls("ZKP 연구 기반 역량 축적", "Building ZKP Research Capabilities")),
          body: t(
            ls(
              "프라이버시를 지키면서 사실을 검증하는 암호 기술을 연구해왔습니다.",
              "We have researched cryptographic technology that verifies facts while preserving privacy.",
            ),
          ),
        },
        {
          phase: "Standard",
          title: t(ls("ISO/IEC 27565:2026 ZKP 기반 서비스", "ISO/IEC 27565:2026-Based Services")),
          body: t(
            ls(
              "데이터 최소화, 선택적 공개의 원칙을 서비스에 구현했습니다.",
              "We have implemented the principles of data minimization and selective disclosure in our services.",
            ),
          ),
        },
        {
          phase: "Product",
          title: t(ls("Fineapple 신뢰 인프라 설계", "Fineapple Trust Infrastructure Design")),
          body: t(
            ls(
              "디지털 자산의 발행, 잔고증명에서 감사까지 설명 가능한 흐름으로 연결합니다.",
              "Connecting digital asset issuance, proof of reserve, and audit in an explainable end-to-end flow.",
            ),
          ),
        },
        {
          phase: "Expansion",
          title: t(ls("공공·금융 적용 시나리오 확장", "Expanding to Public & Financial Sectors")),
          body: t(
            ls(
              "신원, 자격, 투표, CBDC 등 적용 가능 영역을 구체화하고 있습니다.",
              "We are defining applicable domains including identity, credentials, voting, and CBDC.",
            ),
          ),
        },
      ],
      proofItems: [
        {
          label: "Public",
          title: t(ls("CES 2024 최고혁신상 수상", "CES 2024 Best of Innovation Award")),
          detail: t(
            ls(
              "zkVoting Poll Station, Cybersecurity & Personal Privacy 분야 Best of Innovation.",
              "zkVoting Poll Station, Best of Innovation in Cybersecurity & Personal Privacy.",
            ),
          ),
          toneClass: "proof-public",
        },
        {
          label: "Award",
          title: t(ls("CES 2023·2024 2년 연속 최고혁신상", "CES 2023·2024 Back-to-Back Best of Innovation")),
          detail: t(
            ls(
              "zkVoting, zkWallet, zkVoting Poll Station 관련 수상 이력.",
              "Award history for zkVoting, zkWallet, and zkVoting Poll Station.",
            ),
          ),
          toneClass: "proof-award",
        },
        {
          label: "IP",
          title: t(ls("특허 11건 등록, 17건 출원", "11 Patents Granted, 17 Filed")),
          detail: t(
            ls(
              "국내 4건, 해외 7건 등록으로 정리된 ZKP R&D·IP 포트폴리오.",
              "A structured ZKP R&D and IP portfolio with 4 domestic and 7 international patents granted.",
            ),
          ),
          toneClass: "proof-ip",
        },
        {
          label: "Research",
          title: t(ls("최근 5년 18개 논문 게재", "18 Papers Published in the Last 5 Years")),
          detail: t(
            ls(
              "zkMarket, zkAML, Aegis, vCNN, zkLogis, zkVoting, Azeroth 등 ZKP 연구 성과.",
              "ZKP research results including zkMarket, zkAML, Aegis, vCNN, zkLogis, zkVoting, and Azeroth.",
            ),
          ),
          toneClass: "proof-research",
        },
        {
          label: "CBDC",
          title: t(ls("한국은행 CBDC 파일럿 프로젝트 수행", "Bank of Korea CBDC Pilot Project")),
          detail: t(
            ls(
              "프라이버시 보호 CBDC, AML/CFT, 성능 검증 관련 이력.",
              "Track record in privacy-preserving CBDC, AML/CFT, and performance validation.",
            ),
          ),
          toneClass: "proof-public",
        },
        {
          label: "Public Trust",
          title: t(ls("중앙선거관리위원회 블록체인 투표 적용", "NEC Blockchain Voting Deployment")),
          detail: t(
            ls(
              "zkVoting Poll Station 기반 공공 투표 적용 이력.",
              "Track record of deploying zkVoting Poll Station for public elections.",
            ),
          ),
          toneClass: "proof-public",
        },
        {
          label: "Certification",
          title: t(ls("ISO 9001·KISA 신속확인", "ISO 9001 & KISA Certification")),
          detail: t(
            ls(
              "품질·보안 신뢰 인프라와 제품 적용 가능성을 보여주는 대외 증빙 항목입니다.",
              "External certifications demonstrating quality, security trust infrastructure, and product applicability.",
            ),
          ),
          toneClass: "proof-cert",
        },
        {
          label: "Award",
          title: t(ls("과기정통부장관상·모바일 기술대상", "MSIT Minister Award & Mobile Tech Award")),
          detail: t(
            ls(
              "기술성과 제품 경쟁력을 함께 보여주는 수상 이력입니다.",
              "Awards demonstrating both technical achievement and product competitiveness.",
            ),
          ),
          toneClass: "proof-award",
        },
      ],
    },
    finalCta: {
      eyebrow: "Next",
      title: t(
        ls("기존 서비스에 신뢰 레이어를 추가하세요.", "Add a trust layer to your existing services."),
      ),
      body: t(
        ls(
          "디지털 자산, 공공 신뢰인프라, 연구 협업 등",
          "Digital assets, public trust infrastructure, research collaboration, and more.",
        ),
      ),
      primary: { label: t(ls("제품 보기", "View Products")), href: "#products" },
      secondary: { label: t(ls("문의 하기", "Contact Us")), href: "#contact" },
      tertiary: { label: t(ls("자료 요청", "Request Materials")), href: "#contact" },
    },
    footer: {
      // Block 1 — Entity: official identity, core tech, one-line summary.
      entity: {
        brand: "Zkrypto",
        legalName: t(ls("(주)지크립토", "Zkrypto Inc.")),
        tagline: t(
          ls(
            "영지식증명으로 완성하는 프라이버시 보호형 신뢰 인프라.",
            "Privacy-preserving trust infrastructure built on zero-knowledge proofs.",
          ),
        ),
        description: t(
          ls(
            "지크립토는 영지식증명(Zero-Knowledge Proof, ZKP) 기술을 블록체인에 적용해 디지털 자산과 디지털 생태계의 신뢰를 높이는 보안 기술 기업입니다. 민감한 정보를 공개하지 않고도 필요한 사실을 검증할 수 있는 기술로 프라이버시 보호, 투명성, 규제 준수, 데이터 신뢰를 함께 구현합니다.",
            "Zkrypto is a security technology company that applies Zero-Knowledge Proof (ZKP) technology to blockchain to strengthen trust across digital assets and digital ecosystems. With technology that verifies the facts that matter without disclosing sensitive information, we deliver privacy protection, transparency, regulatory compliance, and data trust together.",
          ),
        ),
      },
      // Blocks 2–4 — Solution, Trust, Company navigation columns.
      columns: [
        {
          title: t(ls("솔루션", "Solutions")),
          links: [
            { label: "zkWallet", href: "/products/zkwallet" },
            { label: "zkPoRL", href: "/products/zkporl" },
            { label: "zkVoting", href: "/products/zkvoting" },
          ],
        },
        {
          title: t(ls("신뢰 기술", "Trust")),
          links: [
            { label: t(ls("영지식증명 기술", "Zero-Knowledge Proof")) },
            { label: t(ls("보안", "Security")) },
            { label: t(ls("프라이버시", "Privacy")) },
            { label: t(ls("규제 대응", "Regulatory Compliance")) },
            { label: t(ls("검증 가능성", "Verifiability")) },
          ],
        },
        {
          title: t(ls("회사", "Company")),
          links: [
            { label: t(ls("회사소개", "About")), href: "#" },
            { label: t(ls("뉴스 & 리소스", "News & Resources")), href: "/newsroom" },
            { label: t(ls("문의하기", "Contact")), href: "/#contact" },
            { label: t(ls("파트너십", "Partnership")), href: "#" },
            { label: t(ls("사이트맵", "Sitemap")), href: "#" },
          ],
        },
      ],
      // Block 5 — Legal & Contact: policy links plus contact details.
      legal: {
        title: t(ls("법적 고지 & 연락처", "Legal & Contact")),
        links: [
          { label: t(ls("개인정보처리방침", "Privacy Policy")), href: "#" },
          { label: t(ls("이용약관", "Terms of Service")), href: "#" },
          { label: t(ls("책임 고지", "Disclaimer")), href: "#" },
          { label: t(ls("보안 정책", "Security Policy")), href: "#" },
        ],
        email: "contact@zkrypto.com",
        address: t(
          ls(
            "04763 서울특별시 성동구 왕십리로 222, HIT 321호",
            "04763, HIT #321, 222 Wangsimni-ro, Seongdong-gu, Seoul, Korea",
          ),
        ),
        business: t(ls("사업자등록번호 534-81-02121", "Korean EID 534-81-02121")),
        tel: "+82-2-2293-5423",
      },
      disclaimer: t(
        ls(
          "본 웹사이트의 정보는 기술 및 서비스 소개 목적이며, 특정 디지털 자산의 매매·투자 권유가 아닙니다.",
          "Information on this website is provided for technology and service introduction purposes only and does not constitute solicitation to trade or invest in any specific digital asset.",
        ),
      ),
      copyright: "© 2026 zkrypto Inc. All rights reserved.",
    },
  };
}

export type SiteContent = ReturnType<typeof getSiteContent>;
