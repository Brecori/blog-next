import { FC } from "react";

export const Breaker: FC = () => {
  return (
    <div className="pb-16 flex items-center gap-4">
      <div className="h-px flex-1 bg-slate-700" />
      <p className="whitespace-nowrap  font-medium uppercase tracking-normal text-slate-300  text-2xl">
        Explorações{" "}
        <span className="italic text-indigo-400">Gastronômicas</span>
      </p>
      <div className="h-px flex-1 bg-slate-700" />
    </div>
  );
};
