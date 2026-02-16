import { postRepository } from "@/repositories/post";
import { FC } from "react";

export const PostsList: FC = async () => {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};
