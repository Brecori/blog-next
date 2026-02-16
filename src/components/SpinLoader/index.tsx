import clsx from "clsx";
import { FC } from "react";

type SpinLoaderProps = {
  className?: string;
};

export const SpinLoader: FC<SpinLoaderProps> = ({ className = "" }) => {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className="w-10 h-10 border-5 border-t-slate-500 border-slate-800 rounded-full animate-spin"></div>
    </div>
  );
};
