import { FC } from "react";

type PostHeadingProps = {
  children: string;
  as?: "h1" | "h2";
};

export const PostHeading: FC<PostHeadingProps> = ({
  children,
  as: Tag = "h2",
}) => {
  const headingClassesMap: Record<
    NonNullable<PostHeadingProps["as"]>,
    string
  > = {
    h1: "text-3xl/tight font-extrabold sm:text-3xl/tight",
    h2: "text-2xl/tight font-bold",
  };

  return (
    <Tag className={headingClassesMap[Tag]}>
      <p className="group-hover:text-slate-300 transition">{children}</p>
    </Tag>
  );
};
