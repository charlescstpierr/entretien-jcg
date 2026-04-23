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
.blog {
  padding: 92px 0 72px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),
    radial-gradient(circle at 82% 18%, rgba(243, 228, 37, 0.1), transparent 28rem);
}

.blog .section-title {
  max-width: 860px;
}

.blog-intro {
  max-width: 780px;
  margin: 18px 0 0;
  color: rgba(244, 241, 232, 0.8);
  font-size: 1.12rem;
  line-height: 1.72;
}

.blog-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.18fr);
  gap: 18px;
  align-items: stretch;
  margin-top: 34px;
}

.blog-feature {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: clamp(24px, 3vw, 34px);
  border: 1px solid rgba(243, 228, 37, 0.24);
  border-radius: 18px;
  background:
    linear-gradient(145deg, rgba(225, 7, 18, 0.18), rgba(17, 21, 28, 0.96) 58%),
    #12161d;
  box-shadow: var(--shadow);
}

.blog-feature h3 {
  margin: 0;
  font-family: var(--font-condensed);
  font-size: clamp(2rem, 3.2vw, 3rem);
  line-height: 0.95;
}

.blog-feature p {
  margin: 18px 0 0;
  color: rgba(244, 241, 232, 0.78);
  line-height: 1.75;
}

.blog-feature-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.blog-phone {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  color: white;
  font-weight: 900;
}

.blog-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
}

.blog-chips span {
  padding: 8px 10px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.86);
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  font-weight: 800;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 0;
}

.blog-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 18px;
  align-items: start;
  min-height: auto;
  padding: clamp(20px, 2.6vw, 28px);
  border-radius: 18px;
  color: var(--dark-text);
  background: #f5f3ee;
  border: 1px solid rgba(31, 35, 43, 0.1);
  border-left: 7px solid var(--red);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.24);
}

.blog-number {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #0d0f13;
  background: var(--gold);
  font-family: var(--font-condensed);
  font-size: 1.35rem;
  font-weight: 900;
}

.blog-card time {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 10px;
  color: var(--red-deep);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.blog-card h3 {
  margin: 0;
  font-family: var(--font-condensed);
  font-size: clamp(1.7rem, 2.3vw, 2.25rem);
  line-height: 1;
}

.blog-card p {
  margin: 12px 0 0;
  color: rgba(31, 35, 43, 0.76);
  line-height: 1.65;
}

.blog-card .text-link {
  align-self: center;
  margin-top: 0;
  white-space: nowrap;
}

@media (max-width: 980px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .blog {
    padding: 68px 0 52px;
  }

  .blog-card {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .blog-card .text-link {
    justify-self: start;
    white-space: normal;
  }

  .blog-feature-actions,
  .blog-feature-actions .btn,
  .blog-phone {
    width: 100%;
  }
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
          <span class="section-tag">Aide au choix</span>
          <h2 class="section-title">Le bon service, selon l’état de votre terrain</h2>
          <p class="blog-intro">
            Trois guides courts pour savoir quoi préparer, quoi demander et quand réserver. L’objectif est simple :
            passer plus vite d’un besoin vague à une soumission claire.
          </p>
          <div class="blog-layout">
            <aside class="blog-feature">
              <div>
                <h3>Une situation, une prochaine étape.</h3>
                <p>
                  Sélectionnez le cas qui ressemble le plus à votre entrée, votre lot ou votre végétation. Chaque
                  guide vous donne les repères utiles avant d’appeler.
                </p>
                <div class="blog-chips" aria-label="Types de travaux couverts">
                  <span>Accès d’hiver</span>
                  <span>Terrain envahi</span>
                  <span>Grand lot</span>
                </div>
              </div>
              <div class="blog-feature-actions">
                <button class="btn btn-primary" type="button" data-open-quote>
                  Demander une soumission
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <a class="blog-phone" href="tel:+14182346807">418 234-6807</a>
              </div>
            </aside>

            <div class="blog-grid" aria-label="Guides de services Entretien JCG">
              <article class="blog-card">
                <span class="blog-number">01</span>
                <div>
                  <time datetime="2026-01-15">Entrée enneigée</time>
                  <h3>Déneigement résidentiel à Lévis</h3>
                  <p>
                    À lire avant les premières bordées pour prévoir l’espace, les obstacles et un accès plus fiable
                    tout l’hiver.
                  </p>
                </div>
                <a class="text-link" href="/deneigement-entree-residentielle-levis/">
                  Préparer mon entrée
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </article>

              <article class="blog-card">
                <span class="blog-number">02</span>
                <div>
                  <time datetime="2026-04-01">Boisé à dégager</time>
                  <h3>Défrichage de terrain</h3>
                  <p>
                    Les bons repères pour ouvrir l’accès, nettoyer un terrain envahi et préparer une vente, un projet
                    ou un aménagement.
                  </p>
                </div>
                <a class="text-link" href="/defrichage-terrain-levis/">
                  Voir le guide
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </article>

              <article class="blog-card">
                <span class="blog-number">03</span>
                <div>
                  <time datetime="2026-05-10">Végétation haute</time>
                  <h3>Fauchage mécanique</h3>
                  <p>
                    Pour les grands terrains, fossés et lots vacants : comprendre quand la machinerie devient le choix
                    le plus efficace.
                  </p>
                </div>
                <a class="text-link" href="/fauchage-mecanique-levis/">
                  Comparer les options
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>`.trim();

const blogSectionPattern = new RegExp(
  '<section class="blog" id="blog">[\\s\\S]*?</section>',
);

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

function extractRegex(html: string, regex: RegExp, label: string) {
  const match = html.match(regex);

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
  return html.replace(blogSectionPattern, modernBlogSection);
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
