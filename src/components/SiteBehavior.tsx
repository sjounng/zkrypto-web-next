"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Client-side behaviour ported 1:1 from the original static/script.js.
 * It operates on the server-rendered markup via the same data-* hooks and
 * class names, so the interactions stay identical. Everything is wired up in
 * a single effect that re-runs on navigation and tears its listeners down.
 */
export default function SiteBehavior() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>("[data-header]");
    const menuButton = document.querySelector<HTMLElement>("[data-menu-button]");
    const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
    const themeToggle = document.querySelector<HTMLElement>("[data-theme-toggle]");
    const themeLabel = document.querySelector<HTMLElement>("[data-theme-label]");
    const langPickers = Array.from(document.querySelectorAll<HTMLElement>("[data-lang-picker]"));
    const mobileLangRows = Array.from(document.querySelectorAll<HTMLElement>("[data-mobile-lang-row]"));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const heroBg = document.querySelector<HTMLElement>("[data-hero-bg]");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const themeStorageKey = "zkrypto-theme";
    const languageStorageKey = "zkrypto-language";
    const isProductPage = !!document.querySelector(".product-page");

    const LANGUAGES = [
      { code: "ko", label: "한국어", short: "KO" },
      { code: "en", label: "English", short: "EN" },
    ];

    // Track teardown work so navigation between routes does not leak listeners.
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window | Document | HTMLElement,
      type: string,
      handler: EventListenerOrEventListenerObject,
      options?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    };

    function getSystemTheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function getStoredTheme() {
      const stored = window.localStorage.getItem(themeStorageKey);
      return stored === "dark" || stored === "light" ? stored : null;
    }

    function getStoredLanguage() {
      const cookieMatch = document.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith(`${languageStorageKey}=`));
      const cookieLang = cookieMatch ? cookieMatch.split("=")[1] : null;
      const stored = cookieLang || window.localStorage.getItem(languageStorageKey);
      return LANGUAGES.some((l) => l.code === stored) ? stored : null;
    }

    function applyTheme(theme: string, persist = false) {
      root.dataset.theme = theme;
      if (themeToggle) themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
      if (themeToggle) {
        themeToggle.setAttribute("aria-label", theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환");
      }
      if (themeLabel) themeLabel.textContent = theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";
      if (persist) window.localStorage.setItem(themeStorageKey, theme);
    }

    function applyLanguage(code: string, persist = false) {
      root.lang = code;
      root.dataset.language = code;
      const lang = LANGUAGES.find((l) => l.code === code);

      langPickers.forEach((picker) => {
        const current = picker.querySelector("[data-lang-current]");
        const btn = picker.querySelector("[data-lang-btn]");
        if (current && lang) current.textContent = lang.short;
        if (btn && lang) btn.setAttribute("aria-label", `언어 선택 (현재: ${lang.label})`);
        picker.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((opt) => {
          opt.setAttribute("aria-selected", String(opt.dataset.langOption === code));
        });
      });

      mobileLangRows.forEach((row) => {
        row.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((btn) => {
          btn.setAttribute("aria-pressed", String(btn.dataset.langOption === code));
        });
      });

      if (persist) {
        document.cookie = `${languageStorageKey}=${code};path=/;max-age=31536000;SameSite=Lax`;
        window.localStorage.setItem(languageStorageKey, code);
        window.location.reload();
      }
    }

    function openLangPicker(picker: HTMLElement) {
      const btn = picker.querySelector("[data-lang-btn]");
      const menu = picker.querySelector("[data-lang-menu]");
      if (!btn || !menu) return;
      btn.setAttribute("aria-expanded", "true");
      menu.classList.add("is-open");
    }

    function closeLangPicker(picker: HTMLElement) {
      const btn = picker.querySelector("[data-lang-btn]");
      const menu = picker.querySelector("[data-lang-menu]");
      if (!btn || !menu) return;
      btn.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }

    function closeAllLangPickers() {
      langPickers.forEach(closeLangPicker);
    }

    function updateHeader() {
      if (!header) return;
      header.classList.toggle(
        "is-scrolled",
        header.hasAttribute("data-solid-header") || window.scrollY > 24,
      );
    }

    function updateHeroParallax() {
      if (!heroBg || motionQuery.matches) return;
      const shift = Math.min(window.scrollY * 0.08, 34);
      heroBg.style.setProperty("--hero-shift", `${shift}px`);
    }

    function closeMobileMenu() {
      if (!menuButton || !mobileMenu) return;
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
      document.body.classList.remove("menu-open");
      if (header) header.classList.remove("menu-active");
    }

    function openMobileMenu() {
      if (!menuButton || !mobileMenu) return;
      menuButton.setAttribute("aria-expanded", "true");
      mobileMenu.hidden = false;
      document.body.classList.add("menu-open");
      if (header) header.classList.add("menu-active");
    }

    function triggerStagger(parent: Element) {
      const children = Array.from(parent.querySelectorAll<HTMLElement>("[data-stagger]"));
      children.forEach((child, i) => {
        child.style.transitionDelay = `${120 + i * 160}ms`;
        child.classList.add("is-stagger-visible");
      });
    }

    let observer: IntersectionObserver | null = null;
    function setupReveal() {
      if (!revealItems.length) return;
      if (motionQuery.matches || !("IntersectionObserver" in window)) {
        revealItems.forEach((item) => {
          item.classList.add("is-visible");
          item.querySelectorAll("[data-stagger]").forEach((c) => c.classList.add("is-stagger-visible"));
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            triggerStagger(entry.target);
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -4% 0px", threshold: 0.04 },
      );

      revealItems.forEach((item) => observer!.observe(item));
    }

    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress";
    document.body.prepend(progressBar);
    cleanups.push(() => progressBar.remove());

    function updateScrollProgress() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      progressBar.style.width = `${(window.scrollY / maxScroll) * 100}%`;
    }

    function layoutUsecaseOrbit() {
      const orbit = document.querySelector<HTMLElement>(".usecase-orbit");
      if (!orbit) return;
      const items = Array.from(orbit.querySelectorAll<HTMLElement>(".orbit-item"));
      if (!items.length) return;

      // Below the design width, keep the orbital layout at a fixed width and
      // scale the whole diagram down so its proportions never break.
      const DESIGN_WIDTH = 660;
      orbit.style.removeProperty("width");
      orbit.style.removeProperty("scale");
      orbit.style.removeProperty("transform-origin");
      orbit.style.removeProperty("margin-bottom");
      const available = orbit.clientWidth;
      const scale = available < DESIGN_WIDTH ? available / DESIGN_WIDTH : 1;
      if (scale < 1) orbit.style.width = `${DESIGN_WIDTH}px`;

      const edge = 24;
      const gap = 18;
      const maxH = items.reduce((h, el) => Math.max(h, el.offsetHeight), 0);
      const rowOffset = edge + maxH + gap;
      const minHeight = Math.max(560, 2 * rowOffset + 2 * maxH + gap);

      orbit.style.setProperty("--orbit-row", `${rowOffset}px`);
      orbit.style.minHeight = `${minHeight}px`;

      if (scale < 1) {
        orbit.style.transformOrigin = "top left";
        orbit.style.setProperty("scale", String(scale));
        // scale() leaves the layout box untouched, so reclaim the leftover
        // height to keep the section spacing tight.
        orbit.style.marginBottom = `${-minHeight * (1 - scale)}px`;
      }
    }

    applyTheme(getStoredTheme() || (isProductPage ? "light" : getSystemTheme()));
    applyLanguage(getStoredLanguage() || "ko");
    setupReveal();
    updateHeader();
    updateHeroParallax();
    updateScrollProgress();
    layoutUsecaseOrbit();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(layoutUsecaseOrbit);
    }

    on(window, "scroll", () => {
      updateHeader();
      updateHeroParallax();
      updateScrollProgress();
    }, { passive: true });

    let orbitResizeFrame = 0;
    on(window, "resize", () => {
      if (orbitResizeFrame) return;
      orbitResizeFrame = requestAnimationFrame(() => {
        orbitResizeFrame = 0;
        layoutUsecaseOrbit();
      });
    }, { passive: true });

    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onColorScheme = () => {
      if (!getStoredTheme() && !isProductPage) applyTheme(getSystemTheme());
    };
    colorSchemeQuery.addEventListener("change", onColorScheme);
    cleanups.push(() => colorSchemeQuery.removeEventListener("change", onColorScheme));

    const onMotionChange = () => {
      if (motionQuery.matches && heroBg) heroBg.style.setProperty("--hero-shift", "0px");
    };
    motionQuery.addEventListener("change", onMotionChange);
    cleanups.push(() => motionQuery.removeEventListener("change", onMotionChange));

    if (themeToggle) {
      on(themeToggle, "click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme, true);
      });
    }

    // --- Nav dropdown (Product) ---
    const navDropdown = document.querySelector<HTMLElement>("[data-nav-dropdown]");

    function setNavDropdown(open: boolean) {
      if (!navDropdown) return;
      const btn = navDropdown.querySelector("[data-nav-dropdown-btn]");
      const menu = navDropdown.querySelector("[data-nav-dropdown-menu]");
      if (btn) btn.setAttribute("aria-expanded", String(open));
      if (menu) menu.classList.toggle("is-open", open);
    }

    langPickers.forEach((picker) => {
      const btn = picker.querySelector<HTMLElement>("[data-lang-btn]");
      const menu = picker.querySelector<HTMLElement>("[data-lang-menu]");

      if (btn) {
        on(btn, "click", (e) => {
          e.stopPropagation();
          const isOpen = btn.getAttribute("aria-expanded") === "true";
          closeAllLangPickers();
          setNavDropdown(false);
          if (!isOpen) openLangPicker(picker);
        });
      }

      if (menu) {
        menu.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((opt) => {
          on(opt, "click", () => {
            applyLanguage(opt.dataset.langOption as string, true);
            closeLangPicker(picker);
          });
        });
      }

      if (window.matchMedia("(hover: hover)").matches) {
        let langCloseTimer = 0;
        on(picker, "mouseenter", () => {
          clearTimeout(langCloseTimer);
          closeAllLangPickers();
          setNavDropdown(false);
          openLangPicker(picker);
        });
        on(picker, "mouseleave", () => {
          clearTimeout(langCloseTimer);
          langCloseTimer = window.setTimeout(() => closeLangPicker(picker), 160);
        });
        on(picker, "focusout", (e) => {
          if (!picker.contains((e as FocusEvent).relatedTarget as Node)) closeLangPicker(picker);
        });
      }
    });

    mobileLangRows.forEach((row) => {
      row.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((btn) => {
        on(btn, "click", () => {
          applyLanguage(btn.dataset.langOption as string, true);
        });
      });
    });

    if (navDropdown) {
      const btn = navDropdown.querySelector<HTMLElement>("[data-nav-dropdown-btn]");
      const hoverCapable = window.matchMedia("(hover: hover)").matches;
      let navCloseTimer = 0;

      if (btn) {
        on(btn, "click", (e) => {
          e.stopPropagation();
          const isOpen = btn.getAttribute("aria-expanded") === "true";
          closeAllLangPickers();
          setNavDropdown(!isOpen);
        });
      }

      if (hoverCapable) {
        on(navDropdown, "mouseenter", () => {
          clearTimeout(navCloseTimer);
          closeAllLangPickers();
          setNavDropdown(true);
        });
        on(navDropdown, "mouseleave", () => {
          clearTimeout(navCloseTimer);
          navCloseTimer = window.setTimeout(() => setNavDropdown(false), 160);
        });
        on(navDropdown, "focusout", (e) => {
          if (!navDropdown.contains((e as FocusEvent).relatedTarget as Node)) setNavDropdown(false);
        });
      }
    }

    on(document, "click", () => {
      closeAllLangPickers();
      setNavDropdown(false);
    });
    on(document, "keydown", (e) => {
      if ((e as KeyboardEvent).key === "Escape") {
        closeAllLangPickers();
        setNavDropdown(false);
      }
    });

    // --- Contact modal ---
    const contactModal = document.querySelector<HTMLDialogElement>("[data-contact-modal]");

    function openContactModal() {
      if (!contactModal) return;
      if (typeof contactModal.showModal === "function") contactModal.showModal();
      else contactModal.setAttribute("open", "");
      const field = contactModal.querySelector<HTMLElement>("input, textarea");
      if (field) field.focus({ preventScroll: true });
    }

    function closeContactModal() {
      if (!contactModal) return;
      if (typeof contactModal.close === "function") contactModal.close();
      else contactModal.removeAttribute("open");
    }

    if (contactModal) {
      document.querySelectorAll<HTMLElement>('a[href$="#contact"], [data-contact-open]').forEach((el) => {
        on(el, "click", (e) => {
          e.preventDefault();
          closeMobileMenu();
          openContactModal();
        });
      });

      contactModal.querySelectorAll<HTMLElement>("[data-contact-close]").forEach((btn) => {
        on(btn, "click", closeContactModal);
      });

      on(contactModal, "click", (e) => {
        if (e.target === contactModal) closeContactModal();
      });
    }

    document.querySelectorAll<HTMLFormElement>("form[data-contact-mailto]").forEach((form) => {
      on(form, "submit", (e) => {
        e.preventDefault();
        if (typeof form.checkValidity === "function" && !form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const to = form.dataset.contactMailto;
        const emailEl = form.elements.namedItem("email") as HTMLInputElement | null;
        const messageEl = form.elements.namedItem("message") as HTMLTextAreaElement | null;
        const email = (emailEl && emailEl.value.trim()) || "";
        const message = (messageEl && messageEl.value.trim()) || "";
        const subject = encodeURIComponent("[ZKRYPTO] Contact inquiry");
        const body = encodeURIComponent(`${message}\n\n— From: ${email}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        closeContactModal();
      });
    });

    if (menuButton && mobileMenu) {
      on(menuButton, "click", () => {
        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        if (expanded) closeMobileMenu();
        else openMobileMenu();
      });

      mobileMenu.querySelectorAll<HTMLElement>("a").forEach((link) => {
        on(link, "click", closeMobileMenu);
      });
    }

    // --- Product carousel ---
    let carouselTimer: ReturnType<typeof setInterval> | null = null;
    (function setupCarousel() {
      const carousel = document.querySelector<HTMLElement>("[data-carousel]");
      if (!carousel) return;

      const track = carousel.querySelector<HTMLElement>("[data-carousel-track]");
      if (!track) return;
      const slides = Array.from(track.querySelectorAll<HTMLElement>(".product-slide-card"));
      const dotsWrap = carousel.querySelector<HTMLElement>("[data-carousel-dots]");
      const prevBtn = carousel.querySelector<HTMLElement>("[data-carousel-prev]");
      const nextBtn = carousel.querySelector<HTMLElement>("[data-carousel-next]");

      if (!slides.length || !dotsWrap) return;

      let current = 0;
      const DELAY = 2500;

      const dots = slides.map((_, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "carousel-dot";
        btn.setAttribute("aria-label", `슬라이드 ${i + 1}`);
        btn.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(btn);
        return btn;
      });

      function goTo(index: number) {
        current = ((index % slides.length) + slides.length) % slides.length;
        track!.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
      }

      function startTimer() {
        if (carouselTimer) clearInterval(carouselTimer);
        carouselTimer = setInterval(() => goTo(current + 1), DELAY);
      }

      function stopTimer() {
        if (carouselTimer) clearInterval(carouselTimer);
        carouselTimer = null;
      }

      if (prevBtn) on(prevBtn, "click", () => { goTo(current - 1); startTimer(); });
      if (nextBtn) on(nextBtn, "click", () => { goTo(current + 1); startTimer(); });

      on(carousel, "mouseenter", stopTimer);
      on(carousel, "mouseleave", startTimer);
      on(carousel, "focusin", stopTimer);
      on(carousel, "focusout", startTimer);

      goTo(0);
      startTimer();
    })();
    cleanups.push(() => {
      if (carouselTimer) clearInterval(carouselTimer);
    });

    // --- zkPoRL "Why" expand-on-scroll ---
    (function setupZkpWhyExpand() {
      const section = document.querySelector<HTMLElement>("[data-zkp-why]");
      if (!section) return;
      const inner = section.querySelector<HTMLElement>(".zkp-why-inner");
      if (!inner) return;
      if (motionQuery.matches) return;

      let ticking = false;

      function update() {
        const rect = section!.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 1.1;
        const end = vh * 0.4;
        const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

        const ease =
          progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        // On narrow viewports the full 25vw inset would squeeze the panel to
        // roughly half the screen, so the expansion starts from a gentler inset.
        const compact = window.innerWidth <= 768;
        const vMargin = ((compact ? 3.5 : 10) * (1 - ease)).toFixed(2);
        const hMargin = ((compact ? 7 : 25) * (1 - ease)).toFixed(2);
        const radius = Math.round((compact ? 18 : 24) * (1 - ease));

        inner!.style.borderRadius = `${radius}px`;
        inner!.style.marginLeft = `${hMargin}vw`;
        inner!.style.marginRight = `${hMargin}vw`;
        inner!.style.marginTop = `${vMargin}rem`;
        inner!.style.marginBottom = `${vMargin}rem`;

        const sectionPad = compact
          ? Math.round(48 + 40 * (1 - ease))
          : Math.round(80 + 80 * (1 - ease));
        section!.style.paddingTop = `${sectionPad}px`;
        section!.style.paddingBottom = `${sectionPad}px`;

        ticking = false;
      }

      const requestUpdate = () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };

      on(window, "scroll", requestUpdate, { passive: true });
      on(window, "resize", requestUpdate, { passive: true });

      update();
    })();

    return () => {
      observer?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
