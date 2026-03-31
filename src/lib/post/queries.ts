import { postRepository } from "@/repositories/post";
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = async () => {
  "use cache";

  cacheTag("posts");
  return await postRepository.findAllPublic();
};

export const findPostBySlugCached = async (slug: string) => {
  "use cache";

  cacheTag(`post-${slug}`);
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
};

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);

export const findFirstPublicPostCached = async () => {
  "use cache";

  const post = await postRepository.findFirstPublic().catch(() => undefined);

  if (!post) notFound();
  cacheTag(`post-${post.slug}`);

  return post;
};
