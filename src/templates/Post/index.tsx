import { findPublicPostBySlugCached } from "@/lib/post/queries/public";
import Image from "next/image";
import { FC, Suspense } from "react";
import { PostHeading } from "../../components/PostHeading";
import { PostDate } from "../../components/PostDate";
import { SafeMarkdown } from "../../components/SafeMarkdown";

type PostTemplateProps = {
  slug: string;
};

export const PostTemplate: FC<PostTemplateProps> = async ({ slug }) => {
  const post = await findPublicPostBySlugCached(slug);

  return (
    <article className="">
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
