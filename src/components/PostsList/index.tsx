import { FC } from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export const PostsList: FC = async () => {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/posts/${post.slug}`;

        return (
          <div
            className="flex flex-col gap-4 group cursor-pointer"
            key={post.id}
          >
            <PostCoverImage
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
              linkProps={{
                href: postLink,
              }}
            />
            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
};
