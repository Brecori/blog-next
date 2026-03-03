import { postRepository } from "@/repositories/post";
import { FC } from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export const PostsList: FC = async () => {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
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
            <div className="flex flex-col gap-2 sm:justify-center">
              <time
                className="text-slate-300 text-sm/tight"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>

              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
