import { resolveLocale, type Locale } from "@/i18n/config";
import { localizer, ls } from "./types";

export interface Cta {
  label: string;
  href: string;
}
export interface Metric {
  value: string;
  label: string;
  detail: string;
}
export interface Feature {
  title: string;
  body: string;
}
export interface ProcessItem {
  number: string;
  title: string;
  body: string;
}

export interface ProductLanding {
  slug: string;
  themeClass: string;
  title: string;
  description: string;
  productName: string;
  eyebrow: string;
  heroImage: { src: string; alt: string; width: number; height: number };
  audience: string;
  heroTitle: string;
  heroLead: string;
  heroNote: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  stats: Metric[];
  problemTitle: string;
  problemBody: string;
  problems: Feature[];
  problemCalloutBadge?: string;
  problemCalloutBody?: string;
  problemSummary?: string;
  whyTitle?: string;
  whyLead?: string;
  answerEyebrow: string;
  answerTitle: string;
  answerBody: string;
  answerImage: { src: string; alt: string; width: number; height: number };
  answerCards: Feature[];
  workflowEyebrow?: string;
  workflowTitle?: string;
  workflowBody?: string;
  workflow?: ProcessItem[];
  operationsEyebrow?: string;
  operationsTitle?: string;
  operationsBody?: string;
  operationsDemoLabel?: string;
  operations?: Feature[];
  proofEyebrow: string;
  proofTitle: string;
  proofBody: string;
  proofPoints: Feature[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  relatedLabel: string;
  relatedName: string;
  relatedBody: string;
  relatedHref: string;
  relatedLinkLabel: string;
  venn?: {
    leftTitle: string;
    leftDesc: string[];
    centerDesc: string;
    centerDesc2: string;
    rightTitle: string;
    rightDesc: string[];
  };
  flow?: {
    sectionTitle: string;
    subtitle: string;
    in1Title: string;
    in2Title: string;
    in3Title: string;
    out1Title: string;
    out1Sub: string;
    out2Title: string;
    out2Sub: string;
    out3Title: string;
    serverDesc: string;
    note: string;
  };
  table?: {
    header1: string;
    header2: string;
    rows: { label: string; traditional: string; modern: string }[];
  };
  mpc?: {
    asisTitle: string;
    asis: string[];
    tobeTitle: string;
    tobe: string[];
    sectionTitle: string;
    sectionLead: string;
    shardLabel: string;
    partialSig: string;
    collectLabel: string;
    chainLabel: string;
    note: string;
  };
}

function zkporl(locale: Locale): ProductLanding {
  const t = localizer(locale);
  return {
    slug: "zkporl",
    themeClass: "product-theme-porl",
    title: t(
      ls(
        "zkPoRL | Fineapple 고객부채·준비자산 검증 인프라",
        "zkPoRL | Fineapple Proof of Reserve & Liability Verification",
      ),
    ),
    description: t(
      ls(
        "zkPoRL은 거래소, 수탁사, 은행이 고객부채와 준비자산의 정합성을 더 짧은 주기로 확인하도록 돕는 검증 인프라입니다.",
        "zkPoRL is a verification infrastructure that helps exchanges, custodians, and banks reconcile customer liabilities and reserve assets on shorter cycles.",
      ),
    ),
    productName: t(ls("zkPoRL", "zkPoRL")),
    eyebrow: t(ls("Fineapple 금융 제품군", "Fineapple Financial Suite")),
    heroImage: {
      src: "/assets/zkporl-product-slide-1.png",
      alt: "zkPoRL 제품 소개 비주얼",
      width: 1600,
      height: 900,
    },
    audience: "Digital Asset Enterprise",
    heroTitle: t(
      ls(
        "고객부채와 준비자산을 짧은 주기로 맞춰 보는 검증 인프라",
        "Verification Infrastructure for Continuous Reserve-Liability Reconciliation",
      ),
    ),
    heroLead: t(
      ls(
        "개별 잔고를 공개하지 않고도, 원장과 자산 상태가 맞는지 확인할 수 있게 돕습니다.",
        "Verify that ledger and asset states are consistent — without exposing individual balances.",
      ),
    ),
    heroNote: t(ls(" ", " ")),
    primaryCta: { label: t(ls("도입 상담하기", "Request a Consultation")), href: "/#contact" },
    secondaryCta: { label: t(ls("제품군으로 돌아가기", "Back to Products")), href: "/#products" },
    stats: [
      {
        value: t(ls("Privacy", "Privacy")),
        label: t(ls("정보보호", "")),
        detail: t(
          ls(
            "민감정보를 외부에 직접 노출하지 않는 검증 구조",
            "Verification structure that never directly exposes sensitive data",
          ),
        ),
      },
      {
        value: t(ls("Verifiability", "Verifiability")),
        label: t(ls("검증", "")),
        detail: t(
          ls(
            "정의된 입력과 검증 명제의 수학적 정합성 확인",
            "Mathematical consistency check of defined inputs and verification propositions",
          ),
        ),
      },
      {
        value: t(ls("Operations", "Operations")),
        label: t(ls("운영", "")),
        detail: t(
          ls(
            "증명 결과를 운영 대시보드, 로그, 증적 자료로 연결",
            "Connecting proof results to operational dashboards, logs, and audit evidence",
          ),
        ),
      },
    ],
    problemTitle: t(
      ls(
        "스냅샷과 후행점검만으로는 운영 중 리스크를 설명하기 어렵습니다",
        "Snapshots and lagging reviews alone cannot explain operational risk",
      ),
    ),
    problemBody: t(
      ls(
        "정기 감사와 특정 시점 리포트는 필요하지만, 점검 사이에 발생하는 장부 불일치, 기준시점 차이, 누락·중복 이벤트를 빠르게 포착하기 어렵습니다.",
        "Periodic audits and point-in-time reports are necessary, but it is difficult to quickly detect ledger discrepancies, timestamp mismatches, or missing and duplicate events between checks.",
      ),
    ),
    problemCalloutBadge: t(ls("기존 방식의 한계", "Limitations of Existing Approaches")),
    problemCalloutBody: t(
      ls(
        "점검 사이에 발생한 장부 불일치와 이상징후를 조기에 포착하기 어렵습니다.",
        "Ledger discrepancies and anomalies occurring between checks are difficult to detect early.",
      ),
    ),
    problemSummary: t(
      ls(
        '문제는 "자산이 충분하다"만이 아니라, 운영 중 "변동성을 설명할 수 있느냐"입니다.',
        'The question is not just "are assets sufficient" — it is "can you explain volatility during operations".',
      ),
    ),
    problems: [
      { title: t(ls("대사 주기", "Reconciliation Cycle")), body: t(ls("일·월·분기 단위 확인", "Daily, monthly, or quarterly checks")) },
      { title: t(ls("기준 시점", "Reference Timestamp")), body: t(ls("원장·지갑·온체인 대사 시점 불일치", "Mismatched reconciliation timestamps across ledger, wallet, and on-chain")) },
      { title: t(ls("민감정보", "Sensitive Data")), body: t(ls("고객 잔고·거래내역 직접 공개 곤란", "Difficulty directly disclosing customer balances and transaction history")) },
      { title: t(ls("감사 대응", "Audit Response")), body: t(ls("자료 분산·반복 취합 부담", "Burden of scattered and repeated data consolidation")) },
    ],
    whyTitle: t(ls("왜 영지식증명인가", "Why Zero-Knowledge Proofs?")),
    whyLead: t(ls("투명성과 정보보호의 딜레마를 동시에 해결합니다.", "Resolving the dilemma between transparency and privacy at once.")),
    answerEyebrow: t(ls("제품이 하는 일", "What the Product Does")),
    answerTitle: t(
      ls(
        "zkPoRL은 원장·지갑·온체인 상태를 하나의 확인 흐름으로 묶습니다.",
        "zkPoRL unifies ledger, wallet, and on-chain state into a single verification flow.",
      ),
    ),
    answerBody: t(
      ls(
        "원천 시스템을 대신하지 않습니다. 필요한 데이터를 읽고 정렬한 뒤, 정합성 확인 결과와 조치 기록을 남기도록 돕습니다.",
        "It does not replace source systems. It reads and aligns the necessary data, then helps record consistency results and action history.",
      ),
    ),
    answerImage: {
      src: "/assets/iso-zkp-standard-reference.png",
      alt: "zkPoRL ISO/ZKP 표준 참조 이미지",
      width: 1456,
      height: 816,
    },
    answerCards: [
      { title: t(ls("PoL 상시 대사", "Continuous PoL Reconciliation")), body: t(ls("고객부채 합계가 기준 데이터와 맞는지 짧은 주기로 확인합니다.", "Verifies on short cycles that total customer liabilities match reference data.")) },
      { title: t(ls("민감정보 보호", "Sensitive Data Protection")), body: t(ls("개별 잔고를 직접 보여주지 않고 필요한 확인 결과 중심으로 설명합니다.", "Explains results without directly exposing individual balances.")) },
      { title: t(ls("이상징후 Case", "Anomaly Cases")), body: t(ls("누락, 중복, 차이 후보를 운영자가 확인할 조치 항목으로 남깁니다.", "Records omission, duplication, and discrepancy candidates as action items for operators.")) },
      { title: t(ls("증빙 패키지", "Evidence Package")), body: t(ls("검증 실행 결과, 기준시점 정보, 조치 이력을 감사 참고자료로 묶습니다.", "Bundles verification results, reference timestamp info, and action history as audit reference materials.")) },
    ],
    workflowEyebrow: t(ls("업무 흐름", "Workflow")),
    workflowTitle: t(
      ls(
        "데이터 확인부터 조치 기록까지 같은 화면 흐름으로 이어집니다.",
        "From data verification to action records — all in a single workflow.",
      ),
    ),
    workflowBody: t(
      ls(
        "운영자는 증명값 자체보다 오늘 확인해야 할 차이, 원인 후보, 조치 상태를 빠르게 보는 것이 중요합니다.",
        "Operators need to quickly see today's discrepancies, root cause candidates, and action status — not just the raw proof values.",
      ),
    ),
    workflow: [
      { number: "01", title: t(ls("데이터 읽기", "Read Data")), body: t(ls("전산원장, 지갑 잔고, 온체인 상태를 읽습니다.", "Reads the accounting ledger, wallet balances, and on-chain state.")) },
      { number: "02", title: t(ls("기준 맞추기", "Align References")), body: t(ls("자산 단위와 기준시점을 맞춰 비교 가능한 형태로 정리합니다.", "Aligns asset units and timestamps into a comparable format.")) },
      { number: "03", title: t(ls("PoL 확인", "PoL Verification")), body: t(ls("고객부채 합계와 기준 데이터의 정합성을 확인합니다.", "Verifies consistency between total customer liabilities and reference data.")) },
      { number: "04", title: t(ls("이상징후 분류", "Anomaly Classification")), body: t(ls("누락, 중복, 차이 후보를 조치할 항목으로 분리합니다.", "Separates omission, duplication, and discrepancy candidates into actionable items.")) },
      { number: "05", title: t(ls("증빙 정리", "Evidence Compilation")), body: t(ls("검증 결과와 조치 이력을 감사 참고자료로 묶습니다.", "Bundles verification results and action history as audit reference materials.")) },
    ],
    proofEyebrow: t(ls("확인 자료", "Evidence")),
    proofTitle: t(
      ls(
        "감사 의견을 대신하지 않고, 감사에 필요한 근거를 정리합니다.",
        "Not a substitute for audit opinions — it organizes the evidence audits need.",
      ),
    ),
    proofBody: t(
      ls(
        "zkPoRL은 규제 대응을 보장하는 문구보다, 운영 중 확인한 사실과 조치 기록을 일관되게 남기는 데 초점을 둡니다.",
        "zkPoRL focuses on consistently recording verified facts and action logs during operations, rather than making regulatory compliance guarantees.",
      ),
    ),
    proofPoints: [
      { title: t(ls("검증 실행 요약", "Verification Run Summary")), body: t(ls("어느 기간, 어떤 데이터 기준으로 확인했는지 남깁니다.", "Records what period and data basis was used for verification.")) },
      { title: t(ls("기준시점 기록", "Reference Timestamp Record")), body: t(ls("비교에 사용한 데이터 시점과 무결성 근거를 남깁니다.", "Records the data timestamp and integrity basis used in comparison.")) },
      { title: t(ls("Alert / Case", "Alert / Case")), body: t(ls("이상징후 후보와 담당자 조치 이력을 연결합니다.", "Links anomaly candidates with the responsible party's action history.")) },
      { title: t(ls("공시·감사 참고자료", "Disclosure & Audit Reference")), body: t(ls("외부 설명에 필요한 요약 자료를 반복 생성할 수 있게 돕습니다.", "Helps repeatedly generate summary materials needed for external explanations.")) },
    ],
    ctaEyebrow: t(ls("다음 단계", "Next Steps")),
    ctaTitle: t(
      ls(
        "PoL 상시 대사부터 PoR 결합 로드맵까지 함께 검토하세요.",
        "Review the roadmap from continuous PoL reconciliation to full PoR integration.",
      ),
    ),
    ctaBody: t(
      ls(
        "거래소, 수탁사, 은행의 현재 데이터 구조를 기준으로 PoL 적용 범위와 PoR 확장 시점을 나눠 설계할 수 있습니다.",
        "Based on your current data structure — whether exchange, custodian, or bank — we can design the PoL scope and PoR expansion timeline together.",
      ),
    ),
    relatedLabel: t(ls("함께 검토할 제품", "Related Product")),
    relatedName: "zkWallet",
    relatedBody: t(
      ls(
        "기관용 지갑 생성, 수탁 입출금, 발행·소각 승인 흐름도 함께 검토할 수 있습니다.",
        "Institutional wallet creation, custody deposits/withdrawals, and issuance/burn approval flows can be reviewed together.",
      ),
    ),
    relatedHref: "/products/zkwallet",
    relatedLinkLabel: t(ls("zkWallet 보기", "View zkWallet")),
    venn: {
      leftTitle: t(ls("투명성 요구", "Transparency")),
      leftDesc: [
        t(ls("감독·감사·이용자에게", "To regulators, auditors,")),
        t(ls("검증 가능한 결과를", "and users — verifiable")),
        t(ls("제공해야 함", "results are required")),
      ],
      centerDesc: t(ls("ZKP 기반 검증", "ZKP-based")),
      centerDesc2: t(ls("", "verification")),
      rightTitle: t(ls("정보보호 요구", "Privacy")),
      rightDesc: [
        t(ls("고객 잔고·거래내역·", "Customer balances,")),
        t(ls("지갑주소는 외부에", "transactions, and wallet")),
        t(ls("노출하기 어려움", "addresses cannot be exposed")),
      ],
    },
    flow: {
      sectionTitle: t(ls("zkPoRL Server 처리 흐름", "zkPoRL Server Processing Flow")),
      subtitle: t(
        ls(
          "장부·지갑·온체인·감사증빙을 하나의 검증 흐름으로 연결합니다.",
          "Linking ledger, wallet, on-chain data, and audit evidence in a single verification flow.",
        ),
      ),
      in1Title: t(ls("전산원장", "Accounting Ledger")),
      in2Title: t(ls("지갑 잔고", "Wallet Balance")),
      in3Title: t(ls("온체인 데이터", "On-chain Data")),
      out1Title: t(ls("운영 대시보드", "Operations Dashboard")),
      out1Sub: t(ls("상태·diff·alert", "status · diff · alert")),
      out2Title: t(ls("Case 관리", "Case Management")),
      out2Sub: t(ls("증명 실패 원인 확인", "Identify proof failure causes")),
      out3Title: t(ls("감사·공시 자료", "Audit & Disclosure Evidence")),
      serverDesc: t(
        ls(
          "정의된 입력과 검증 명제에 대해\n계산 정합성을 확인합니다.",
          "Verifies computational consistency\nof defined inputs and propositions.",
        ),
      ),
      note: t(
        ls(
          "zkPoRL은 원천 데이터를 생성하지 않습니다. 정의된 데이터와 검증 명제에 대한 정합성을 확인합니다.",
          "zkPoRL does not generate source data. It verifies the consistency of defined data against verification propositions.",
        ),
      ),
    },
    table: {
      header1: t(ls("구분", "Category")),
      header2: t(ls("일반 대사", "Traditional")),
      rows: [
        { label: t(ls("검증방식", "Verification")), traditional: t(ls("원본 직접 대조", "Direct comparison")), modern: t(ls("증명값 기반 검증", "Proof-based verification")) },
        { label: t(ls("정보 노출", "Data Exposure")), traditional: t(ls("민감정보 노출 위험", "Risk of exposure")), modern: t(ls("민감정보 비공개", "Data kept private")) },
        { label: t(ls("공시 신뢰", "Disclosure Trust")), traditional: t(ls("운영기관 발표 의존", "Relies on operator")), modern: t(ls("수학적 검증 가능", "Mathematically verifiable")) },
      ],
    },
  };
}

function zkwallet(locale: Locale): ProductLanding {
  const t = localizer(locale);
  return {
    slug: "zkwallet",
    themeClass: "product-theme-wallet",
    title: t(
      ls(
        "zkWallet Custody | MPC 기반 고보안 디지털자산 지갑",
        "zkWallet Custody | High-Security MPC-Based Digital Asset Wallet",
      ),
    ),
    description: t(
      ls(
        "zkWallet Custody는 개인키를 단일 지점에 보관하지 않는 MPC 기반 키 관리·서명 Wallet Service입니다.",
        "zkWallet Custody is an MPC-based key management and signing Wallet Service that never stores private keys in a single location.",
      ),
    ),
    productName: t(
      ls(
        "zkWallet Custody : MPC 기반 고보안 Wallet Service",
        "zkWallet Custody : High-Security MPC-Based Wallet Service",
      ),
    ),
    eyebrow: t(ls("zkWallet Custody", "zkWallet Custody")),
    heroImage: {
      src: "/assets/zkwallet-product-slide-1.png",
      alt: "zkWallet 발행사 지갑 생성 데모 화면",
      width: 2788,
      height: 1378,
    },
    audience: "Digital Asset Enterprise",
    heroTitle: t(
      ls(
        "키를 한 곳에 모으지 않는 기관형 디지털자산 지갑",
        "Institutional Digital Asset Wallet — Keys Never Concentrated in One Place",
      ),
    ),
    heroLead: t(
      ls(
        "zkWallet Custody는 개인키를 여러 조각으로 나눠 보관하고, 정책 검증을 거친 거래만 여러 노드가 공동 서명하는 MPC 기반 고보안 Wallet Service입니다.",
        "zkWallet Custody splits private keys into multiple shards and only co-signs policy-verified transactions across multiple nodes — an MPC-based high-security Wallet Service.",
      ),
    ),
    heroNote: t(
      ls(
        "키 보관을 넘어 생성·갱신·복구·폐기와 기관형 통제까지 제공합니다.",
        "Beyond key storage — providing generation, rotation, recovery, revocation, and institutional-grade control.",
      ),
    ),
    primaryCta: { label: t(ls("도입 상담하기", "Request a Consultation")), href: "/#contact" },
    secondaryCta: { label: t(ls("제품군으로 돌아가기", "Back to Products")), href: "/#products" },
    stats: [
      { value: t(ls("분산 키 서명", "Distributed Signing")), label: t(ls("MPC", "MPC")), detail: t(ls("키 원본 없이 (t/n) 공동 서명", "Threshold (t/n) co-signing without a full key")) },
      { value: t(ls("전 주기 관리", "Full Lifecycle")), label: t(ls("키 생애주기", "Key Lifecycle")), detail: t(ls("생성·갱신·복구·폐기", "Generation, rotation, recovery, revocation")) },
      { value: t(ls("정책·감사", "Policy & Audit")), label: t(ls("기관형 통제", "Institutional Control")), detail: t(ls("승인·추적·고가용성", "Approval, traceability, high availability")) },
    ],
    problemTitle: t(
      ls(
        "단일 마스터 시드 구조는 키 하나가 뚫리면 전체 자산이 위험합니다.",
        "A single master seed means one key compromise risks all assets.",
      ),
    ),
    problemBody: t(
      ls(
        "디지털자산 지갑에서 개인키는 곧 자산 접근 권한입니다. 하나의 니모닉·마스터 시드가 유출되면 전체 자산 탈취로 이어질 수 있습니다.",
        "In a digital asset wallet, the private key is asset access itself. A single leaked mnemonic or master seed can lead to total asset theft.",
      ),
    ),
    problemSummary: t(
      ls(
        "문제는 키를 어떻게 보관하느냐가 아니라, 키를 한 곳에 모으지 않는 것입니다.",
        "The question is not how to store the key — it is ensuring the key is never concentrated in one place.",
      ),
    ),
    problems: [
      { title: t(ls("단일 키 유출", "Single Key Exposure")), body: t(ls("마스터 시드 하나의 유출이 전체 자산 탈취로 이어집니다.", "A single master seed leak leads to complete asset theft.")) },
      { title: t(ls("권한 오남용", "Authorization Abuse")), body: t(ls("발행·출금 권한이 집중되면 무단 실행 위험이 커집니다.", "Concentrated issuance and withdrawal authority increases the risk of unauthorized execution.")) },
      { title: t(ls("통제 부재", "Lack of Control")), body: t(ls("고위험 작업이 승인·정책 검증 없이 실행될 수 있습니다.", "High-risk operations can execute without approval or policy verification.")) },
      { title: t(ls("추적·복구 곤란", "Difficult Tracing & Recovery")), body: t(ls("문제 원인 파악과 장애·키 복구가 어렵습니다.", "Identifying root causes and recovering from failures or key issues is difficult.")) },
    ],
    whyTitle: t(ls("왜 MPC인가", "Why MPC?")),
    whyLead: t(ls("개인키를 한 곳에 모으지 않아 단일 키 유출 위험을 없앱니다.", "Eliminating single-key exposure risk by never concentrating the private key in one place.")),
    answerEyebrow: t(ls("제품이 하는 일", "What the Product Does")),
    answerTitle: t(
      ls(
        "금융 서비스와 블록체인 사이에서 키 관리·서명을 안전하게 처리합니다.",
        "Securely handles key management and signing between financial services and the blockchain.",
      ),
    ),
    answerBody: t(
      ls(
        "금융 서비스의 키 생성·거래 서명 요청을 받아 MPC로 처리하고, 서명된 거래를 블록체인에 전송합니다.",
        "Receives key generation and transaction signing requests from financial services, processes them via MPC, and broadcasts signed transactions to the blockchain.",
      ),
    ),
    answerImage: {
      src: "/assets/zkWallet-product-slide-2.png",
      alt: "zkWallet Custody 구조 이미지",
      width: 3840,
      height: 2160,
    },
    answerCards: [
      { title: t(ls("키 관리", "Key Management")), body: t(ls("키를 생성하고 잠금·해제를 관리합니다.", "Generates keys and manages locking and unlocking.")) },
      { title: t(ls("지갑 관리", "Wallet Management")), body: t(ls("지갑을 생성하고 주소를 발급합니다.", "Creates wallets and issues addresses.")) },
      { title: t(ls("서명 관리", "Signature Management")), body: t(ls("서명을 생성하고 검증합니다.", "Generates and verifies signatures.")) },
      { title: t(ls("정책 관리", "Policy Management")), body: t(ls("거래 한도와 출금 승인 정책을 적용합니다.", "Applies transaction limits and withdrawal approval policies.")) },
      { title: t(ls("MPC 운영 관리", "MPC Operations")), body: t(ls("서명 세션과 참여 노드를 관리합니다.", "Manages signing sessions and participating nodes.")) },
      { title: t(ls("보안 저장소 관리", "Secure Storage Management")), body: t(ls("Secret과 Master Key를 안전하게 보관합니다.", "Securely stores secrets and master keys.")) },
    ],
    proofEyebrow: t(ls("확인 자료", "Evidence")),
    proofTitle: t(
      ls(
        "서명 기능을 넘어, 키 생애주기·실행환경·통제를 결합합니다.",
        "Beyond signing — combining key lifecycle management, execution environment, and institutional control.",
      ),
    ),
    proofBody: t(
      ls(
        "기관형 Wallet Service는 서명만으로 충분하지 않습니다. zkWallet Custody는 키 생애주기 관리, 보호 실행 환경, 기관형 통제를 함께 제공합니다.",
        "An institutional Wallet Service needs more than just signing. zkWallet Custody provides key lifecycle management, protected execution environment, and institutional controls together.",
      ),
    ),
    proofPoints: [
      { title: t(ls("키 생애주기 관리", "Key Lifecycle Management")), body: t(ls("생성(DKG)·갱신(Proactive Refresh)·복구·폐기를 통합 관리합니다.", "Unified management of generation (DKG), rotation (Proactive Refresh), recovery, and revocation.")) },
      { title: t(ls("보호 실행 환경", "Protected Execution Environment")), body: t(ls("Confidential Computing과 외부 KMS/HSM 연동으로 키 연산을 보호합니다.", "Protects key operations via Confidential Computing and external KMS/HSM integration.")) },
      { title: t(ls("MPC 분산 서명", "MPC Distributed Signing")), body: t(ls("키 조각이 한곳에 모이지 않는 (t/n) 임계치 공동 서명을 수행합니다.", "Performs (t/n) threshold co-signing without ever concentrating key shards in one place.")) },
      { title: t(ls("기관형 통제", "Institutional Control")), body: t(ls("Policy Engine, Identifiable Abort, 고가용성 구조로 운영을 통제합니다.", "Controls operations via Policy Engine, Identifiable Abort, and high-availability architecture.")) },
    ],
    ctaEyebrow: t(ls("다음 단계", "Next Steps")),
    ctaTitle: t(
      ls(
        "도입 환경에 맞는 Wallet Service 제공 방식을 함께 설계하세요.",
        "Design the right Wallet Service deployment model for your environment.",
      ),
    ),
    ctaBody: t(
      ls(
        "설치형(서버·클라우드)과 Confidential Computing 서버 일체형 중 보안 요구수준에 맞는 방식을 검토합니다.",
        "Review whether an on-premise (server/cloud) or Confidential Computing all-in-one deployment best fits your security requirements.",
      ),
    ),
    relatedLabel: t(ls("함께 검토할 제품", "Related Product")),
    relatedName: "zkPoRL",
    relatedBody: t(
      ls(
        "고객부채 상시 대사와 준비자산 검증 로드맵도 함께 검토할 수 있습니다.",
        "Continuous customer liability reconciliation and the reserve asset verification roadmap can be reviewed together.",
      ),
    ),
    relatedHref: "/products/zkporl",
    relatedLinkLabel: t(ls("zkPoRL 보기", "View zkPoRL")),
    mpc: {
      asisTitle: t(ls("단일 마스터 시드", "Single Master Seed")),
      asis: [
        t(ls("키를 한 곳에 집중 보관합니다.", "Keys are stored in one concentrated location.")),
        t(ls("단일 유출 시 전체 자산이 탈취됩니다.", "A single breach leads to total asset theft.")),
        t(ls("키 원본이 복원될 수 있습니다.", "The original key can be reconstructed.")),
      ],
      tobeTitle: t(ls("MPC 분산 키", "MPC Distributed Keys")),
      tobe: [
        t(ls("개인키를 여러 조각으로 나눠 분산 보관합니다.", "Private keys are split into shards and stored separately.")),
        t(ls("(t/n) 임계치 기반으로 공동 서명합니다.", "Co-signing is based on a (t/n) threshold.")),
        t(ls("어떤 경우에도 키 원본이 복원되지 않습니다.", "The original key is never reconstructed under any circumstance.")),
      ],
      sectionTitle: t(ls("정책을 통과한 거래만 공동 서명합니다", "Only policy-verified transactions are co-signed.")),
      sectionLead: t(
        ls(
          "키 조각 A·B·C가 각각 부분 서명을 만들고, Manager가 이를 결합해 최종 서명을 생성합니다.",
          "Key shards A, B, and C each produce a partial signature, which the Manager combines into a final signature.",
        ),
      ),
      shardLabel: t(ls("키 조각", "Key Shard")),
      partialSig: t(ls("부분 서명", "Partial Signature")),
      collectLabel: t(ls("부분 서명 수집 · 결합", "Collect & Combine Partial Signatures")),
      chainLabel: t(ls("블록체인 전송", "Broadcast to Blockchain")),
      note: t(
        ls(
          "거래 서명 요청은 정책 검증 후에만 진행되며, 키 원본을 모으지 않고 부분 서명의 결합으로 완성됩니다.",
          "Transaction signing requests proceed only after policy verification, and are completed by combining partial signatures — never by reconstructing the original key.",
        ),
      ),
    },
  };
}

function zkvoting(locale: Locale): ProductLanding {
  const t = localizer(locale);
  return {
    slug: "zkvoting",
    themeClass: "product-theme-voting",
    title: t(
      ls(
        "zkVoting | 영지식증명 기반 비밀투표·검증 시스템",
        "zkVoting | ZKP-Based Secret Ballot & Verification System",
      ),
    ),
    description: t(
      ls(
        "zkVoting은 개별 표를 공개하지 않고도 집계 결과를 누구나 검증할 수 있는 ZKP 기반 전자투표 솔루션입니다.",
        "zkVoting is a ZKP-based electronic voting solution that lets anyone verify the tally — without revealing individual ballots.",
      ),
    ),
    productName: t(ls("zkVoting : Verifiable Private Voting", "zkVoting : Verifiable Private Voting")),
    eyebrow: t(ls("zkVoting", "zkVoting")),
    heroImage: {
      src: "/assets/zkvoting-product-slide-1.png",
      alt: "zkVoting 제품 소개 비주얼",
      width: 1600,
      height: 900,
    },
    audience: "Verifiable Private Voting",
    heroTitle: t(ls("비밀은 지키고, 결과는 증명하는 투표", "Voting that keeps secrets and proves results.")),
    heroLead: t(
      ls(
        "zkVoting은 개별 표를 공개하지 않고도 집계 결과의 정합성을 누구나 검증할 수 있게 합니다.",
        "zkVoting lets anyone verify the consistency of tally results — without exposing individual ballots.",
      ),
    ),
    heroNote: t(
      ls(
        "투표 비밀성과 결과 검증가능성을 동시에 보장합니다.",
        "Guarantees both ballot secrecy and result verifiability simultaneously.",
      ),
    ),
    primaryCta: { label: t(ls("이동하기", "Visit Site")), href: "https://www.zkvoting.com/" },
    secondaryCta: { label: t(ls("제품군으로 돌아가기", "Back to Products")), href: "/#products" },
    stats: [
      { value: t(ls("비밀투표", "Secret Ballot")), label: t(ls("프라이버시", "Privacy")), detail: t(ls("개별 표 비공개", "Individual ballots kept private")) },
      { value: t(ls("공개 검증", "Public Verification")), label: t(ls("무결성", "Integrity")), detail: t(ls("집계 결과 검증 가능", "Tally results verifiable by anyone")) },
      { value: t(ls("1인 1표", "One Person, One Vote")), label: t(ls("자격 검증", "Eligibility")), detail: t(ls("이중·부정 투표 차단", "Double and invalid votes blocked")) },
    ],
    problemTitle: t(
      ls(
        "전자투표는 비밀성과 검증가능성을 동시에 충족하기 어렵습니다.",
        "Electronic voting struggles to satisfy both secrecy and verifiability.",
      ),
    ),
    problemBody: t(
      ls(
        "투명하게 공개하면 비밀투표가 깨지고, 비공개로 운영하면 결과를 신뢰하기 어렵습니다.",
        "Full transparency breaks ballot secrecy; full privacy makes results hard to trust.",
      ),
    ),
    problems: [
      { title: t(ls("비밀 보장", "Ballot Secrecy")), body: t(ls("누가 무엇에 투표했는지 드러나면 안 됩니다.", "Who voted for what must never be revealed.")) },
      { title: t(ls("결과 검증", "Result Verification")), body: t(ls("집계가 조작되지 않았음을 외부가 확인해야 합니다.", "External parties must be able to confirm the tally was not manipulated.")) },
      { title: t(ls("자격 확인", "Eligibility Check")), body: t(ls("유권자 자격과 1인 1표를 보장해야 합니다.", "Voter eligibility and the one-person-one-vote rule must be enforced.")) },
      { title: t(ls("운영 신뢰", "Operational Trust")), body: t(ls("운영기관 발표에만 의존하기 어렵습니다.", "Relying solely on the operator's announcement is insufficient.")) },
    ],
    answerEyebrow: t(ls("제품이 하는 일", "What the Product Does")),
    answerTitle: t(ls("zkVoting은 표를 공개하지 않고 결과만 증명합니다.", "zkVoting proves only the result — never the individual ballot.")),
    answerBody: t(
      ls(
        "유권자 자격 검증, 암호화 투표, 영지식 집계 증명, 공개 검증을 하나의 흐름으로 제공합니다.",
        "Provides voter eligibility verification, encrypted voting, ZK tally proof, and public verification in a single flow.",
      ),
    ),
    answerImage: {
      src: "/assets/zkvoting-product-slide-2.png",
      alt: "zkVoting 검증 흐름 이미지",
      width: 2880,
      height: 1620,
    },
    answerCards: [
      { title: t(ls("유권자 등록", "Voter Registration")), body: t(ls("자격을 검증하고 익명 자격 증명을 발급합니다.", "Verifies eligibility and issues anonymous credentials.")) },
      { title: t(ls("비밀 투표", "Secret Ballot")), body: t(ls("표를 암호화해 내용을 비공개로 제출합니다.", "Encrypts and submits ballots while keeping their content private.")) },
      { title: t(ls("영지식 집계", "ZK Tally")), body: t(ls("복호화 없이 집계 정합성을 증명합니다.", "Proves tally consistency without decryption.")) },
      { title: t(ls("공개 검증", "Public Verification")), body: t(ls("누구나 결과 증명을 검증할 수 있습니다.", "Anyone can verify the result proof.")) },
    ],
    workflowEyebrow: t(ls("업무 흐름", "Workflow")),
    workflowTitle: t(ls("등록부터 검증까지 하나의 검증 가능한 흐름", "A single verifiable flow from registration to verification.")),
    workflowBody: t(
      ls(
        "각 단계가 암호학적 증거로 연결되어 사후 검증이 가능합니다.",
        "Each step is linked by cryptographic evidence, enabling post-hoc verification.",
      ),
    ),
    workflow: [
      { number: "01", title: t(ls("유권자 등록", "Voter Registration")), body: t(ls("자격을 확인하고 익명 자격 증명을 발급합니다.", "Verifies eligibility and issues anonymous credentials.")) },
      { number: "02", title: t(ls("비밀 투표", "Secret Ballot")), body: t(ls("내용을 암호화한 표를 제출합니다.", "Submits an encrypted ballot.")) },
      { number: "03", title: t(ls("무결성 검증", "Integrity Verification")), body: t(ls("중복·부정 투표 후보를 차단합니다.", "Blocks duplicate and invalid vote candidates.")) },
      { number: "04", title: t(ls("영지식 집계", "ZK Tally")), body: t(ls("표를 공개하지 않고 결과를 계산·증명합니다.", "Computes and proves the result without revealing ballots.")) },
      { number: "05", title: t(ls("결과 공개·검증", "Result Publication & Verification")), body: t(ls("결과와 증명을 공개해 검증할 수 있게 합니다.", "Publishes results and proofs for public verification.")) },
    ],
    operationsEyebrow: t(ls("데모 확인 방식", "Demo Format")),
    operationsTitle: t(ls("데모는 투표 운영 화면을 중심으로 확인합니다.", "The demo focuses on the voting administration screens.")),
    operationsDemoLabel: t(ls("미팅 데모", "Meeting Demo")),
    operationsBody: t(
      ls(
        "데모는 상담 미팅에서 투표 생성부터 결과 검증까지 함께 확인하는 방식으로 운영합니다.",
        "The demo walkthrough covers the full flow from ballot creation to result verification during a consultation meeting.",
      ),
    ),
    operations: [
      { title: t(ls("투표 생성", "Ballot Creation")), body: t(ls("후보·문항과 유권자 명부를 설정합니다.", "Sets up candidates, questions, and the voter registry.")) },
      { title: t(ls("투표 진행", "Voting Session")), body: t(ls("유권자 인증과 암호화 투표를 운영합니다.", "Manages voter authentication and encrypted ballot submission.")) },
      { title: t(ls("집계·검증", "Tally & Verification")), body: t(ls("영지식 집계 결과와 증명을 확인합니다.", "Reviews the ZK tally result and its proof.")) },
      { title: t(ls("감사·공개", "Audit & Publication")), body: t(ls("검증용 자료를 외부에 공개합니다.", "Publishes verification materials for external review.")) },
    ],
    proofEyebrow: t(ls("확인 자료", "Evidence")),
    proofTitle: t(ls("결과 발표를 대신하지 않고, 누구나 검증할 근거를 제공합니다.", "Not a result announcement — it provides evidence anyone can verify.")),
    proofBody: t(
      ls(
        "zkVoting은 신뢰 선언보다, 암호학적으로 검증 가능한 증거를 일관되게 남기는 데 초점을 둡니다.",
        "zkVoting focuses on consistently producing cryptographically verifiable evidence, rather than making trust declarations.",
      ),
    ),
    proofPoints: [
      { title: t(ls("유권자 자격 증명", "Voter Credential")), body: t(ls("자격과 1인 1표를 익명으로 보장합니다.", "Guarantees eligibility and one-person-one-vote anonymously.")) },
      { title: t(ls("투표 비밀성", "Ballot Secrecy")), body: t(ls("개별 표의 내용을 공개하지 않습니다.", "Individual ballot contents are never revealed.")) },
      { title: t(ls("집계 정합성 증명", "Tally Consistency Proof")), body: t(ls("결과가 제출된 표와 일치함을 증명합니다.", "Proves that the result matches the submitted ballots.")) },
      { title: t(ls("공개 검증 자료", "Public Verification Materials")), body: t(ls("누구나 결과를 검증할 수 있게 공개합니다.", "Published so anyone can verify the results.")) },
    ],
    ctaEyebrow: t(ls("다음 단계", "Next Steps")),
    ctaTitle: t(ls("검증 가능한 비밀투표를 직접 확인해보세요.", "See verifiable secret voting in action.")),
    ctaBody: t(
      ls(
        "선거, 총회, 거버넌스 등 적용 시나리오에 맞춰 PoC 범위를 함께 설계할 수 있습니다.",
        "We can design a PoC scope together tailored to your scenario — elections, general meetings, governance, and more.",
      ),
    ),
    relatedLabel: t(ls("함께 검토할 제품", "Related Product")),
    relatedName: "zkPoRL",
    relatedBody: t(
      ls(
        "고객부채 상시 대사와 준비자산 검증 로드맵도 함께 검토할 수 있습니다.",
        "Continuous customer liability reconciliation and the reserve asset verification roadmap can be reviewed together.",
      ),
    ),
    relatedHref: "/products/zkporl",
    relatedLinkLabel: t(ls("zkPoRL 보기", "View zkPoRL")),
  };
}

const builders: Record<string, (locale: Locale) => ProductLanding> = {
  zkporl,
  zkwallet,
  zkvoting,
};

export function getProductLanding(slug: string, localeInput: string): ProductLanding | null {
  const builder = builders[slug];
  return builder ? builder(resolveLocale(localeInput)) : null;
}

export const productSlugs = Object.keys(builders);
