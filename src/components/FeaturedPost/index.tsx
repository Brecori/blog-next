import { FC } from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export const FeaturedPost: FC = async () => {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/posts/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group cursor-pointer">
      <PostCoverImage
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
      />
      <PostSummary
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        postHeading="h1"
        postLink={postLink}
        title={post.title}
      />
    </section>
  );
};
