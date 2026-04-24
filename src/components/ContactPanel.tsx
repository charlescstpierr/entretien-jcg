import { PhoneIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <aside className="contact-aside">
          <span className="section-kicker">Contact</span>
          <h2>Une soumission simple, sans détour</h2>
          <p>
            Appelez Entretien JCG ou envoyez une demande avec les détails du terrain. On garde l’échange clair et
            concret.
          </p>
          <a className="contact-phone" href={contact.phoneHref}>
            <PhoneIcon />
            <span>{contact.phone}</span>
          </a>
          <div className="contact-notes">
            <span>Lévis et environs</span>
            <span>Résidentiel et commercial</span>
            <span>Réponse selon saison et disponibilité</span>
          </div>
        </aside>
        <QuoteForm idPrefix="contact-quote" />
      </div>
    </section>
  );
}
