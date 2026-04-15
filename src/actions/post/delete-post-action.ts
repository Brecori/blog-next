"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";

export async function deletePostAction(id: string) {
  // TODO: checar login

  if (!id || typeof id !== "string") {
    return {
      error: "Invalid post ID",
    };
  }

  const post = await postRepository.findById(id);

  if (!post) {
    return {
      error: "Post not found",
    };
  }

  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  updateTag("posts");
  updateTag(`post-${post.slug}`);

  return {
    success: true,
    error: "",
  };
}
