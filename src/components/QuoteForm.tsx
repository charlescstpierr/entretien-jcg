import { contact, serviceOptions } from "@/lib/site-data";

type QuoteFormProps = {
  title?: string;
  intro?: string;
  idPrefix?: string;
};

export function QuoteForm({
  title = "Recevez une soumission claire",
  intro = "Décrivez le terrain, le service souhaité et le meilleur moyen de vous joindre.",
  idPrefix = "quote",
}: QuoteFormProps) {
  return (
    <form className="quote-form" noValidate data-mailto={contact.email}>
      <div className="form-heading">
        <span className="section-kicker">Soumission rapide</span>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="form-grid">
        <label className="field" htmlFor={`${idPrefix}-name`}>
          Nom complet
          <input id={`${idPrefix}-name`} name="name" type="text" placeholder="Votre nom" required />
        </label>
        <label className="field" htmlFor={`${idPrefix}-phone`}>
          Téléphone
          <input id={`${idPrefix}-phone`} name="phone" type="tel" placeholder="418 234-6807" required />
        </label>
        <label className="field" htmlFor={`${idPrefix}-email`}>
          Courriel
          <input id={`${idPrefix}-email`} name="email" type="email" placeholder="vous@exemple.com" required />
        </label>
        <label className="field" htmlFor={`${idPrefix}-service`}>
          Service souhaité
          <select id={`${idPrefix}-service`} name="service" required defaultValue="">
            <option value="" disabled>
              Choisir un service
            </option>
            {serviceOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="field" htmlFor={`${idPrefix}-details`}>
        Détails du projet
        <textarea
          id={`${idPrefix}-details`}
          name="details"
          rows={5}
          placeholder="Adresse approximative, dimensions, accès, urgence, saison..."
          required
        />
      </label>
      <button className="btn btn-primary form-submit" type="submit">
        Préparer ma demande
      </button>
      <p className="form-status" aria-live="polite" />
    </form>
  );
}
