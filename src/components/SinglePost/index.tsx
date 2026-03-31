import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { FC, Suspense } from "react";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export const SinglePost: FC<SinglePostProps> = async ({ slug }) => {
  const post = await findPostBySlugCached(slug);

  return (
    <article className="pt-40 pb-16">
      <header className="group flex flex-col gap-4 mb-6">
        <PostHeading>{post.title}</PostHeading>
        <Image
          src={post.coverImageUrl}
          width={1200}
          height={800}
          alt={post.title}
          className="rounded-xl"
        />

        <p>
          {post.author} |{" "}
          <Suspense>
            <PostDate dateTime={post.createdAt} />
          </Suspense>
        </p>
      </header>
      <p className="text-xl mb-6">{post.excerpt}</p>
      <SafeMarkdown markdown={post.content} />
    </article>
  );
};
