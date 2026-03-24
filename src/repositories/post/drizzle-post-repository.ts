import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) throw new Error(`Post with id ${slug} not found`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.id, id), eq(posts.published, true)),
    });

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findAll();

//   const postBySlug = await repo.findBySlugPublic("bolo-de-eclipse-de-plutao");
//   console.log(postBySlug);

//   const postById = await repo.findById("bc9a540f-66a9-4ab0-8d50-6216ab1cac53");
//   console.log(postById);

//   posts.map((post) => {
//     console.log(post.slug, post.id, post.published);
//   });
// })();
