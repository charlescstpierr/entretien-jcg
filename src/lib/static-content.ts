import fs from "node:fs";
import path from "node:path";

type PageSource = {
  slug: string;
  file: string;
  footerLabel: string;
};

export type StaticMetadata = {
  title: string;
  description: string;
  canonical: string;
};

export type StaticPageContent = StaticMetadata & {
  slug: string;
  jsonLd: string;
  footerLabel: string;
  mainHtml: string;
};

const pageSources = [
  {
    slug: "defrichage-terrain-levis",
    file: "defrichage-terrain-levis/index.html",
    footerLabel: "Entretien JCG • Défrichage terrain Lévis",
  },
  {
    slug: "deneigement-entree-residentielle-levis",
    file: "deneigement-entree-residentielle-levis/index.html",
    footerLabel: "Entretien JCG • Déneigement entrée résidentielle Lévis",
  },
  {
    slug: "fauchage-mecanique-levis",
    file: "fauchage-mecanique-levis/index.html",
    footerLabel: "Entretien JCG • Fauchage mécanique Lévis",
  },
  {
    slug: "politique-confidentialite",
    file: "politique-confidentialite/index.html",
    footerLabel: "Entretien JCG • Politique de confidentialité",
  },
] satisfies PageSource[];

const routeReplacements: Array<[RegExp, string]> = [
  [/(?:\.\/|\.\.\/)assets\//g, "/assets/"],
  [/href="\.\/deneigement-entree-residentielle-levis\/index\.html"/g, 'href="/deneigement-entree-residentielle-levis/"'],
  [/href="\.\/defrichage-terrain-levis\/index\.html"/g, 'href="/defrichage-terrain-levis/"'],
  [/href="\.\/fauchage-mecanique-levis\/index\.html"/g, 'href="/fauchage-mecanique-levis/"'],
  [/href="\.\/politique-confidentialite\/index\.html"/g, 'href="/politique-confidentialite/"'],
  [/href="\.{2}\/deneigement-entree-residentielle-levis\/index\.html"/g, 'href="/deneigement-entree-residentielle-levis/"'],
  [/href="\.{2}\/defrichage-terrain-levis\/index\.html"/g, 'href="/defrichage-terrain-levis/"'],
  [/href="\.{2}\/fauchage-mecanique-levis\/index\.html"/g, 'href="/fauchage-mecanique-levis/"'],
  [/href="\.{2}\/politique-confidentialite\/index\.html"/g, 'href="/politique-confidentialite/"'],
  [/href="\.{2}\/index\.html#([^"]+)"/g, 'href="/#$1"'],
  [/href="\.{2}\/index\.html"/g, 'href="/"'],
];

const extraCss = `
.blog-intro {
  max-width: 720px;
  margin: 14px 0 0;
  color: rgba(244, 241, 232, 0.78);
  font-size: 1.08rem;
  line-height: 1.7;
}

.modal-call {
  display: grid;
  gap: 4px;
  margin-top: 18px;
  padding: 16px 18px;
  border: 1px solid rgba(142, 0, 7, 0.16);
  border-radius: 14px;
  color: #111;
  background: rgba(255, 255, 255, 0.72);
}

.modal-call span {
  color: rgba(31, 35, 43, 0.68);
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.modal-call strong {
  color: var(--red-deep);
  font-family: var(--font-condensed);
  font-size: 2rem;
  line-height: 1;
}
`;

const modernBlogSection = `
<section class="blog" id="blog">
        <div class="container">
          <span class="section-tag">Guides pratiques</span>
          <h2 class="section-title">Des conseils simples pour mieux planifier vos travaux</h2>
          <p class="blog-intro">
            Déneigement, défrichage ou fauchage : trouvez rapidement les bons repères pour préparer votre terrain,
            poser les bonnes questions et choisir le service adapté à votre situation.
          </p>
          <div class="blog-grid">
            <article class="blog-card">
              <time datetime="2026-01-15">Hiver et accès</time>
              <h3>Déneigement entrée résidentielle Lévis</h3>
              <p>
                Préparez votre entrée avant les premières bordées et découvrez comment garder un accès plus
                sécuritaire, dégagé et facile à utiliser tout l’hiver.
              </p>
              <a class="text-link" href="/deneigement-entree-residentielle-levis/">
                Voir les conseils déneigement
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            <article class="blog-card">
              <time datetime="2026-04-01">Terrain à ouvrir</time>
              <h3>Défrichage terrain Lévis</h3>
              <p>
                Voyez quoi prévoir pour dégager un terrain boisé ou envahi, ouvrir l’accès et rendre l’espace prêt
                pour un aménagement, une vente ou des travaux.
              </p>
              <a class="text-link" href="/defrichage-terrain-levis/">
                Planifier un défrichage
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>

            <article class="blog-card">
              <time datetime="2026-05-10">Végétation haute</time>
              <h3>Fauchage mécanique Lévis</h3>
              <p>
                Comprenez quand le fauchage mécanique devient la meilleure option pour les grands terrains, les
                fossés, les lots vacants et les zones difficiles à entretenir.
              </p>
              <a class="text-link" href="/fauchage-mecanique-levis/">
                Explorer le fauchage mécanique
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>`.trim();

function readSource(relativePath: string) {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

function extract(html: string, start: string, end: string) {
  const startIndex = html.indexOf(start);
  const endIndex = html.indexOf(end, startIndex + start.length);

  if (startIndex < 0 || endIndex < 0) {
    throw new Error(`Missing static block: ${start}`);
  }

  return html.slice(startIndex + start.length, endIndex).trim();
}

function extractRegex(html: string, pattern: RegExp, label: string) {
  const match = html.match(pattern);

  if (!match) {
    throw new Error(`Missing static metadata: ${label}`);
  }

  return match[1].trim();
}

function normalizeRoutes(html: string) {
  return routeReplacements.reduce(
    (current, [pattern, replacement]) => current.replace(pattern, replacement),
    html,
  );
}

function withModernBlogSection(html: string) {
  return html.replace(
    <section class="blog" id="blog">[\s\S]*?<\/section>/,
    modernBlogSection,
  );
}

function metadataFrom(html: string, fallbackCanonical: string): StaticMetadata {
  return {
    title: extractRegex(html, /<title>([\s\S]*?)<\/title>/, "title"),
    description: extractRegex(
      html,
      /<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/>/,
      "description",
    ),
    canonical:
      html.match(/<link rel="canonical" href="([^"]+)" \/>/)?.[1] ??
      fallbackCanonical,
  };
}

function jsonLdFrom(html: string) {
  return html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1].trim() ?? "";
}

function withPhoneCta(modalHtml: string) {
  return modalHtml
    .replace(
      "Choisissez un service et nous vous dirigeons vers le formulaire complet plus bas.",
      "Pour une soumission rapide, appelez Entretien JCG ou choisissez un service pour remplir le formulaire.",
    )
    .replace(
      '</div>\n        <div style="display: grid; gap: 12px; margin-top: 22px;">',
      `</div>
        <a class="modal-call" href="tel:+14182346807" aria-label="Appeler Entretien JCG pour une soumission">
          <span>Soumission par téléphone</span>
          <strong>418 234-6807</strong>
        </a>
        <div style="display: grid; gap: 12px; margin-top: 22px;">`,
    );
}

export const staticPageSlugs = pageSources.map((page) => page.slug);

export function getSiteCss() {
  const homeHtml = readSource("index.html");
  const homeStyle = extract(homeHtml, "<style>", "</style>");
  const articleCss = readSource("assets/article.css");

  return `/* Article pages */\n${articleCss}\n\n/* Current Entretien JCG theme */\n${homeStyle}\n\n/* Next.js quote modal addition */\n${extraCss}`;
}

export function getHomeMetadata() {
  return metadataFrom(readSource("index.html"), "https://www.entretienjcg.ca/");
}

export function getHomeMainHtml() {
  return normalizeRoutes(withModernBlogSection(extract(readSource("index.html"), "<main>", "</main>")));
}

export function getHomeModalHtml() {
  return normalizeRoutes(
    withPhoneCta(
      extract(
        readSource("index.html"),
        '<div class="modal" id="quoteModal" aria-hidden="true">',
        "</div>\n\n    <script>",
      ),
    ),
  );
}

export function getStaticPage(slug: string): StaticPageContent | null {
  const source = pageSources.find((page) => page.slug === slug);

  if (!source) {
    return null;
  }

  const html = readSource(source.file);

  return {
    slug,
    footerLabel: source.footerLabel,
    ...metadataFrom(html, `https://www.entretienjcg.ca/${slug}/`),
    jsonLd: jsonLdFrom(html),
    mainHtml: normalizeRoutes(extract(html, "<main>", "</main>")),
  };
}
