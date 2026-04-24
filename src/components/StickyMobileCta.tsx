import { contact } from "@/lib/site-data";

export function StickyMobileCta() {
  return (
    <div className="mobile-cta" aria-label="Actions rapides">
      <a href={contact.phoneHref}>Appeler</a>
      <button type="button" data-open-quote>
        Soumission
      </button>
    </div>
  );
}
