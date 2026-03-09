import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createMetadata({ title: "Article introuvable" });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blogue/${post.slug}`,
  });
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-dark-blue py-20 text-white">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Blogue", href: "/blogue" },
              { label: post.title },
            ]}
          />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <article className="mx-auto max-w-3xl">
            <header className="mb-10">
              <div className="mb-4 flex items-center gap-4">
                <span className="inline-block rounded-full bg-emerald-primary/10 px-3 py-1 text-sm font-medium text-emerald-primary">
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
              <h1 className="text-4xl font-bold md:text-5xl">{post.title}</h1>
              <p className="mt-2 text-sm text-gray-500">
                Par {post.author}
              </p>
            </header>

            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-emerald-primary">
              <MDXRemote source={post.content} />
            </div>
          </article>
        </Container>
      </section>
    </>
  );
};

export default BlogPostPage;
