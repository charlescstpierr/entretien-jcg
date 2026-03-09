import type { FAQCategory } from "@/types";

export const faqCategories: FAQCategory[] = [
  {
    category: "Entretien de pelouse",
    slug: "entretien-de-pelouse",
    items: [
      {
        question: "À quelle fréquence la tonte est-elle effectuée?",
        answer:
          "Nous effectuons la tonte sur une base hebdomadaire durant la haute saison (mai à septembre) et aux deux semaines au début et en fin de saison. La fréquence peut être ajustée selon la croissance du gazon et les conditions météorologiques.",
      },
      {
        question: "Quels produits utilisez-vous pour la fertilisation et le traitement des mauvaises herbes?",
        answer:
          "Nous utilisons des produits homologués par Santé Canada et conformes à la réglementation municipale de Lévis. Notre programme de fertilisation comprend des engrais à libération lente adaptés aux besoins spécifiques de votre sol. Les traitements contre les mauvaises herbes sont ciblés et respectueux de l'environnement.",
      },
      {
        question: "Quand est le meilleur moment pour faire aérer ma pelouse?",
        answer:
          "L'aération est idéale au printemps (mai-juin) ou à l'automne (septembre-octobre), lorsque le gazon est en période de croissance active. Nous recommandons une aération annuelle pour la plupart des terrains, et deux fois par an pour les sols très compactés ou les terrains à fort achalandage.",
      },
      {
        question: "Est-ce que vous offrez des forfaits saisonniers pour l'entretien de pelouse?",
        answer:
          "Oui, nous proposons des forfaits saisonniers qui regroupent la tonte, la fertilisation, l'aération et le traitement des mauvaises herbes à un tarif avantageux. Contactez-nous pour une soumission personnalisée selon la superficie de votre terrain et les services souhaités.",
      },
      {
        question: "Quel territoire desservez-vous pour l'entretien de pelouse?",
        answer:
          "Nous desservons l'ensemble de la ville de Lévis, incluant les secteurs de Saint-Nicolas, Charny, Saint-Romuald, Saint-Jean-Chrysostome, Saint-Étienne-de-Lauzon et Breakeyville. Pour les secteurs limitrophes, contactez-nous pour vérifier la disponibilité.",
      },
    ],
  },
  {
    category: "Aménagement paysager",
    slug: "amenagement-paysager",
    items: [
      {
        question: "Offrez-vous un service de conception de plans d'aménagement?",
        answer:
          "Oui, nous offrons un service complet de conception. Nous nous déplaçons chez vous pour évaluer votre terrain, discuter de vos besoins et de votre budget, puis nous préparons un plan d'aménagement détaillé avec une soumission précise. La rencontre initiale est sans frais et sans engagement.",
      },
      {
        question: "Quelle est la meilleure période pour réaliser des travaux d'aménagement paysager?",
        answer:
          "La saison idéale s'étend de mai à octobre. Pour les projets de pavé uni et de terrassement, nous recommandons de planifier les travaux entre juin et septembre. Les plantations se font idéalement au printemps ou à l'automne, lorsque les conditions sont favorables à l'enracinement.",
      },
      {
        question: "Quel est le délai typique pour un projet d'aménagement?",
        answer:
          "Le délai varie selon l'envergure du projet. Une plantation de plates-bandes peut être réalisée en une journée, tandis qu'un projet complet avec pavé uni, murets et plantation peut prendre de 3 à 10 jours ouvrables. Nous vous communiquons un échéancier précis avec votre soumission.",
      },
      {
        question: "Offrez-vous une garantie sur vos travaux d'aménagement?",
        answer:
          "Oui, nous offrons une garantie d'un an sur la main-d'oeuvre et les installations. Les végétaux sont garantis pour une saison de croissance complète, à condition que les consignes d'arrosage et d'entretien soient respectées. Les matériaux (pavé uni, pierre) sont couverts par la garantie du fabricant.",
      },
      {
        question: "Faut-il un permis municipal pour des travaux d'aménagement paysager?",
        answer:
          "Certains travaux nécessitent un permis de la Ville de Lévis, notamment la construction de murets de plus de 1 mètre de hauteur, les modifications de drainage et l'abattage d'arbres. Nous nous occupons de vérifier les exigences réglementaires et pouvons vous accompagner dans les démarches si nécessaire.",
      },
    ],
  },
  {
    category: "Déneigement",
    slug: "deneigement",
    items: [
      {
        question: "À partir de quelle accumulation intervenez-vous?",
        answer:
          "Notre contrat standard prévoit une intervention à partir de 5 cm d'accumulation de neige. Pour les clients commerciaux ou ceux qui désirent un seuil d'intervention différent, nous offrons des options personnalisées. Le déglaçage est effectué systématiquement lors de pluie verglaçante.",
      },
      {
        question: "À quelle heure le déneigement est-il complété?",
        answer:
          "Pour les clients résidentiels, le déneigement est complété avant 7 h les jours de semaine. Pour les clients commerciaux, l'heure est déterminée selon vos heures d'ouverture. En cas de précipitations continues durant la journée, nous effectuons des passages supplémentaires au besoin.",
      },
      {
        question: "Quand dois-je réserver mon contrat de déneigement?",
        answer:
          "Nous recommandons de réserver votre contrat avant le 1er novembre pour garantir votre place. Les contrats saisonniers couvrent la période du 15 novembre au 15 avril. Les places sont limitées pour assurer un service de qualité à chacun de nos clients.",
      },
      {
        question: "Quel type d'abrasif utilisez-vous pour le déglaçage?",
        answer:
          "Nous utilisons un mélange de sel de déglaçage et de gravier certifié, adapté aux températures québécoises. Pour les clients qui le souhaitent, nous offrons des options plus écologiques à base de chlorure de magnésium, moins nocif pour la végétation et les surfaces en béton.",
      },
      {
        question: "Que se passe-t-il en cas de bris lors du déneigement?",
        answer:
          "Nous sommes entièrement assurés en responsabilité civile. En cas de dommage accidentel à votre propriété lors de nos opérations, nous prenons en charge la réparation. Nous effectuons un relevé de votre propriété avant le début de la saison pour repérer les obstacles et minimiser les risques.",
      },
    ],
  },
];
