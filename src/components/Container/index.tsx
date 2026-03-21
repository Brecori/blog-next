import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="text-slate-100 bg-slate-900 min-h-screen ">
      <div className="max-w-360 mx-auto px-8">{children}</div>
    </div>
  );
};
