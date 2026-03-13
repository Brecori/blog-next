import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { FC } from "react";
import { PostHeading } from "../PostHeading";
import { PostModel } from "@/models/post/post-model";
import { PostDate } from "../PostDate";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export const PostSummary: FC<PostSummaryProps> = ({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}) => {
  return (
    <div className="flex flex-col gap-2 sm:justify-center">
      <PostDate dateTime={createdAt} />

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};
