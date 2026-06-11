import { useTranslations } from "next-intl";

interface ContactLabels {
  email: string;
  message: string;
  messagePlaceholder: string;
  privacy: string;
  submit: string;
}

interface ContactModalProps {
  title: string;
  body: string;
  labels: ContactLabels;
  mailto?: string;
}

/** Contact dialog, ported from the shared <dialog> markup. Behaviour (open on
 *  #contact links, mailto submit) is wired up in SiteBehavior. */
export default function ContactModal({
  title,
  body,
  labels,
  mailto = "contact@zkrypto.com",
}: ContactModalProps) {
  const t = useTranslations("Chrome");

  return (
    <dialog className="contact-modal" data-contact-modal aria-labelledby="contact-modal-title">
      <button className="contact-modal-close" type="button" aria-label={t("close")} data-contact-close>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <div className="contact-modal-head">
        <h2 id="contact-modal-title">{title}</h2>
        <p>{body}</p>
      </div>
      <form className="contact-form" aria-label={t("contactForm")} data-contact-mailto={mailto}>
        <label>
          <span>{labels.email}</span>
          <input type="email" name="email" placeholder="name@company.com" autoComplete="email" required />
        </label>
        <label>
          <span>{labels.message}</span>
          <textarea name="message" rows={5} placeholder={labels.messagePlaceholder} required></textarea>
        </label>
        <label className="consent-field">
          <input type="checkbox" name="privacy" value="yes" required />
          <span>{labels.privacy}</span>
        </label>
        <button className="btn btn-action" type="submit">
          <span>{labels.submit}</span>
          <span className="btn-arrow" aria-hidden="true"></span>
        </button>
      </form>
    </dialog>
  );
}
