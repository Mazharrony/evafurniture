import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { posts, getPost } from "@/data/posts";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Eva Design Furniture Journal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOgImage({
    eyebrow: post ? post.category : "Journal",
    title: post ? post.title : "Journal",
  });
}
