/** Inline SVG glyphs for the use-case orbit, ported from index.html. */
export default function UseCaseIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "audit":
      return (
        <svg {...common}>
          <path d="M12 2.5 4.5 5.5v6c0 4.5 3 8 7.5 10 4.5-2 7.5-5.5 7.5-10v-6Z" />
          <path d="m8.5 11.5 2.5 2.5 4.5-5" />
        </svg>
      );
    case "vote":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
          <path d="m8 12 3 3 5-6" />
        </svg>
      );
    case "id":
      return (
        <svg {...common}>
          <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
          <circle cx="8" cy="11" r="2" />
          <path d="M5 16c0-1.7 1.3-3 3-3s3 1.3 3 3" />
          <path d="M13.5 10h5M13.5 13.5h5" />
        </svg>
      );
    case "age":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="6" />
          <path d="m9 13.5-2 7 5-3 5 3-2-7" />
          <path d="m9.4 9 1.8 1.8 3.4-3.6" />
        </svg>
      );
    case "lottery":
      return (
        <svg {...common}>
          <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v1.7a2 2 0 0 0 0 3.6v1.7A1.5 1.5 0 0 1 18.5 17h-13A1.5 1.5 0 0 1 4 15.5v-1.7a2 2 0 0 0 0-3.6Z" />
          <path d="M13.5 7.5v9" strokeDasharray="2 2" />
        </svg>
      );
    case "cbdc":
      return (
        <svg {...common}>
          <path d="M3.5 9.5 12 4.5l8.5 5" />
          <path d="M5.5 10v7M9.5 10v7M14.5 10v7M18.5 10v7" />
          <path d="M4 20h16" />
        </svg>
      );
    default:
      return null;
  }
}
