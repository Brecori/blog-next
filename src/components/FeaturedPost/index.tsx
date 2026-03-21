import { FC } from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";
import Link from "next/link";

export const FeaturedPost: FC = async () => {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="">
      <Link
        href={postLink}
        className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group cursor-pointer"
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
