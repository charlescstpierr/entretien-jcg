export const SITE = {
  name: "Entretien JCG",
  url: "https://entretienjcg.ca",
  phone: "(418) 234-6807",
  phoneHref: "tel:+14182346807",
  email: "entretienjcg@gmail.com",
  address: "8965 boul. Guillaume-Couture, Lévis, QC",
  facebook: "https://facebook.com/entretienjcg",
  territory: [
    "Lévis",
    "Saint-Nicolas",
    "Charny",
    "Breakeyville",
    "Saint-Jean-Chrysostome",
    "Saint-Romuald",
  ],
} as const;

export const METADATA = {
  defaultTitle: "Entretien JCG | Entretien paysager et déneigement à Lévis",
  titleTemplate: "%s | Entretien JCG",
  defaultDescription:
    "Entretien JCG offre des services professionnels d'entretien de pelouse, d'aménagement paysager et de déneigement à Lévis et environs. Soumission gratuite.",
} as const;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
