import { FC } from "react";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  createdAt: string;
  title: string;
  excerpt: string;
};

export const PostSummary: FC<PostSummaryProps> = ({
  postHeading,
  createdAt,
  title,
  excerpt,
}) => {
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <PostDate dateTime={createdAt} />

      <PostHeading as={postHeading}>{title}</PostHeading>
      <p className="overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
        {excerpt}
      </p>
    </div>
  );
};
