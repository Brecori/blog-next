import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="text-slate-950 bg-slate-100 min-h-screen ">
      <div className="max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
};
