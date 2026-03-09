import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Entretien de pelouse",
        href: "/services/entretien-de-pelouse",
      },
      {
        label: "Aménagement paysager",
        href: "/services/amenagement-paysager",
      },
      {
        label: "Déneigement",
        href: "/services/deneigement",
      },
    ],
  },
  {
    label: "Réalisations",
    href: "/realisations",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Blogue",
    href: "/blogue",
  },
  {
    label: "Contactez-nous",
    href: "/contactez-nous",
  },
];
