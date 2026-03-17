import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { FC } from "react";

type PostDateProps = {
  dateTime: string;
};

export const PostDate: FC<PostDateProps> = ({ dateTime }) => {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={formatDatetime(dateTime)}
      title={formatRelativeDate(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
};
