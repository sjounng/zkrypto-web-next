import { useTranslations } from "next-intl";

interface HeaderProps {
  variant?: "home" | "product";
  logoSrc: string;
  logoAlt: string;
}

/** Site header, ported from the shared markup in index.html / product_base.html. */
export default function Header({ variant = "home", logoSrc, logoAlt }: HeaderProps) {
  const t = useTranslations("Chrome");
  const isProduct = variant === "product";
  const brandHref = isProduct ? "/" : "#top";

  return (
    <header
      className={`site-header${isProduct ? " product-site-header is-scrolled" : ""}`}
      data-header
      {...(isProduct ? { "data-solid-header": "" } : {})}
    >
      <div className="header-inner">
        <a className="brand" href={brandHref} aria-label={t("brandHome")}>
          <img
            className="brand-logo"
            src={logoSrc}
            alt={logoAlt}
            width={300}
            height={56}
            decoding="async"
          />
        </a>

        <nav className="desktop-nav" aria-label={t("mainMenu")}>
          <div className="nav-dropdown" data-nav-dropdown>
            <button
              className="nav-dropdown-btn"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-nav-dropdown-btn
            >
              {t("product")}
              <svg className="nav-caret" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="nav-dropdown-menu" data-nav-dropdown-menu>
              <a href="/products/zkporl">zkPoRL</a>
              <a href="/products/zkwallet">zkWallet</a>
              <a href="/products/zkvoting">zkVoting</a>
            </div>
          </div>
          <a href="/#contact">{t("contact")}</a>
          <a href="/newsroom">{t("newsroom")}</a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle btn-icon"
            type="button"
            aria-label={t("themeToDark")}
            aria-pressed="false"
            data-theme-toggle
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="none">
                <path d="M20.2 14.1A7.6 7.6 0 0 1 9.9 3.8 8.6 8.6 0 1 0 20.2 14.1Z" />
              </svg>
              <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3.8" />
                <path d="M12 2.8v2.3M12 18.9v2.3M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2.8 12h2.3M18.9 12h2.3M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
              </svg>
            </span>
            <span className="visually-hidden" data-theme-label>
              {t("themeToDark")}
            </span>
          </button>
          <div className="lang-picker" data-lang-picker>
            <button
              className="lang-picker-btn"
              type="button"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-label={t("langSelect")}
              data-lang-btn
            >
              <span data-lang-current>KO</span>
              <svg className="lang-caret" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="lang-picker-menu" role="listbox" aria-label={t("langSelect")} data-lang-menu>
              <li className="lang-option" role="option" aria-selected="true" data-lang-option="ko">
                {t("korean")}
              </li>
              <li className="lang-option" role="option" aria-selected="false" data-lang-option="en">
                {t("english")}
              </li>
            </ul>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label={t("openMobileMenu")}
            aria-expanded="false"
            data-menu-button
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className="mobile-nav" aria-label={t("mobileMenu")} hidden data-mobile-menu>
        <span className="mobile-nav-group">{t("product")}</span>
        <a href="/products/zkporl">zkPoRL</a>
        <a href="/products/zkwallet">zkWallet</a>
        <a href="/products/zkvoting">zkVoting</a>
        <a className="mobile-nav-top" href="/#contact">
          {t("contact")}
        </a>
        <a className="mobile-nav-top" href="/newsroom">
          {t("newsroom")}
        </a>
        <div className="mobile-lang-row" role="group" aria-label={t("langSelect")} data-mobile-lang-row>
          <button className="mobile-lang-option" type="button" aria-pressed="true" data-lang-option="ko">
            {t("korean")}
          </button>
          <button className="mobile-lang-option" type="button" aria-pressed="false" data-lang-option="en">
            {t("english")}
          </button>
        </div>
      </nav>
    </header>
  );
}
