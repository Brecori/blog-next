import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { asyncDelay } from "@/utils/async-delay";
import { SIM_WAIT_TIME } from "@/lib/constants";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIM_WAIT_TIME, true);
    console.log("findAllPublic", Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIM_WAIT_TIME, true);
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) throw new Error(`Post with id ${slug} not found`);

    return post;
  }

  async findFirstPublic(): Promise<PostModel> {
    await asyncDelay(SIM_WAIT_TIME, true);
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.published, true),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    if (!post) throw new Error(`No public post found`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIM_WAIT_TIME, true);
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIM_WAIT_TIME, true);
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.id, id), eq(posts.published, true)),
    });

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }
}
