import Link from "next/link";
import { FC } from "react";

type PostHeadingProps = {
  children: string;
  url: string;
  as?: "h1" | "h2";
};

export const PostHeading: FC<PostHeadingProps> = ({
  children,
  url,
  as: Tag = "h2",
}) => {
  const headingClassesMap: Record<
    NonNullable<PostHeadingProps["as"]>,
    string
  > = {
    h1: "text-2xl/tight font-extrabold sm:text-3xl/tight",
    h2: "text-xl/tight font-bold",
  };

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link className="group-hover:text-slate-300 transition" href={url}>
        {children}
      </Link>
    </Tag>
  );
};
