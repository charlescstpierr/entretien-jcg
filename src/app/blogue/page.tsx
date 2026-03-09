import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { getAllPosts } from "@/lib/blog";

export const metadata = createMetadata({
  title: "Blogue - Conseils entretien paysager et déneigement",
  description:
    "Consultez nos articles et conseils sur l'entretien de pelouse, l'aménagement paysager et le déneigement au Québec. Astuces, guides et tendances.",
  path: "/blogue",
});

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-dark-blue py-20 text-white">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Blogue" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Blogue</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Conseils, astuces et actualités sur l&apos;entretien paysager et le
            déneigement dans la région de Lévis.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-lg text-gray-500">
              Aucun article pour le moment. Revenez bientôt!
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <FadeInOnScroll key={post.slug} delay={index * 100}>
                  <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="inline-block rounded-full bg-emerald-primary/10 px-3 py-1 text-xs font-medium text-emerald-primary">
                          {post.category}
                        </span>
                        <time
                          dateTime={post.date}
                          className="text-sm text-gray-500"
                        >
                          {new Date(post.date).toLocaleDateString("fr-CA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <h2 className="mb-2 text-xl font-semibold">
                        <Link
                          href={`/blogue/${post.slug}`}
                          className="hover:text-emerald-primary"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mb-4 flex-1 text-gray-600">
                        {post.description}
                      </p>
                      <Link
                        href={`/blogue/${post.slug}`}
                        className="inline-flex items-center font-medium text-emerald-primary hover:underline"
                      >
                        Lire l&apos;article
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </FadeInOnScroll>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
