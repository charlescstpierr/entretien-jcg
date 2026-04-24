export type RelatedArticle = {
  title: string;
  href: string;
};

export const relatedArticles: RelatedArticle[] = [
  { title: "Préparation de sol au rotoculteur Lévis", href: "/preparation-sol-rotoculteur-levis/" },
  { title: "Débroussaillage terrain vacant Lévis", href: "/debroussaillage-terrain-vacant-levis/" },
  { title: "Défrichage terrain Lévis", href: "/defrichage-terrain-levis/" },
  { title: "Déneigement entrée résidentielle Lévis", href: "/deneigement-entree-residentielle-levis/" },
  { title: "Fauchage mécanique Lévis", href: "/fauchage-mecanique-levis/" },
];

export function getRelatedArticles(currentHref: string) {
  return relatedArticles.filter((article) => article.href !== currentHref);
}
