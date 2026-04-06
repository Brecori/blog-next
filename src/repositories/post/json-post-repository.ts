import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { SIM_WAIT_TIME } from "@/lib/constants";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json",
);

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIM_WAIT_TIME <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIM_WAIT_TIME));
  }

  private async readFromDisk(): Promise<{ posts: PostModel[] }> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson: { posts: PostModel[] } = JSON.parse(jsonContent);
    return parsedJson;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const { posts } = await this.readFromDisk();

    return posts.filter((post) => post.published);
  }

  async findFirstPublic(): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts[0];

    if (!post) throw new Error(`No public post found`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const { posts } = await this.readFromDisk();

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error(`Post with slug ${slug} not found`);

    return post;
  }
}
