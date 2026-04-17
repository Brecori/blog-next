import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="text-slate-100 bg-slate-900 min-h-screen py-36 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(248,113,113,0.14),transparent_28%)]">
      <div className="max-w-360 mx-auto px-8">{children}</div>
    </div>
  );
};
