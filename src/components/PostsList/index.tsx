import { FC } from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";
import Link from "next/link";

export const PostsList: FC = async () => {
  const posts = await findAllPublicPostsCached();

  return (
    <div className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <Link
            className="flex flex-col gap-4 group cursor-pointer"
            href={postLink}
            key={post.id}
          >
            <PostCoverImage
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <PostSummary
              postHeading="h2"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </Link>
        );
      })}
    </div>
  );
};
