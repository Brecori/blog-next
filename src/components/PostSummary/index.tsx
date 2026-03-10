import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { FC } from "react";
import { PostHeading } from "../PostHeading";
import { PostModel } from "@/models/post/post-model";

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
      <time
        className="text-slate-300 text-sm/tight"
        dateTime={formatDatetime(createdAt)}
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};
