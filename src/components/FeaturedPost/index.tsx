import { FC } from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import Link from "next/link";
import { ErrorMessage } from "../ErrorMessage";

export const FeaturedPost: FC = async () => {
  const posts = await findAllPublicPostsCached();

  if (posts.length === 0)
    return (
      <ErrorMessage
        contentTitle="Ops!"
        content="Ainda não há nenhuma receita intergalática."
      />
    );

  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="pb-16">
      <h1 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
        Destaque
      </h1>
      <Link
        href={postLink}
        className="grid grid-cols-1 gap-8  sm:grid-cols-2 group cursor-pointer"
      >
        <PostCoverImage
          imageProps={{
            width: 1200,
            height: 720,
            src: post.coverImageUrl,
            alt: post.title,
            priority: true,
          }}
        />
        <PostSummary
          createdAt={post.createdAt}
          excerpt={post.excerpt}
          postHeading="h1"
          title={post.title}
        />
      </Link>
    </section>
  );
};
