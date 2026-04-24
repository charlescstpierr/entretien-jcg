import { CloseIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/site-data";

export function QuoteModal() {
  return (
    <div className="modal" id="quoteModal" aria-hidden="true">
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
        <button className="modal-close" type="button" aria-label="Fermer la fenêtre">
          <CloseIcon />
        </button>
        <div className="modal-top">
          <span className="section-kicker">Soumission</span>
          <h2 id="quote-modal-title">Parlez-nous du terrain</h2>
          <p>Pour une réponse rapide, appelez directement ou envoyez une demande complète.</p>
          <a className="modal-call" href={contact.phoneHref}>
            <span>Soumission par téléphone</span>
            <strong>{contact.phone}</strong>
          </a>
        </div>
        <QuoteForm idPrefix="modal-quote" title="Demande en ligne" intro="Le formulaire prépare un courriel et sauvegarde la demande dans ce navigateur." />
      </div>
    </div>
  );
}
