import clsx from "clsx";
import { ComponentProps, FC, useId } from "react";

type InputTextProps = {
  labelText?: string;
} & ComponentProps<"input">;

export const InputText: FC<InputTextProps> = ({ labelText = "", ...props }) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        className={clsx(
          "text-base/tight bg-slate-300 outline-0 ring-1 ring-slate-400 rounded text-slate-900 p-2 transition focus:ring-2 focus:ring-indigo-950 disabled:bg-slate-500 disabled:placeholder-slate-600 disabled:text-slate-600 read-only:bg-slate-400",
          props.className,
        )}
        {...props}
        id={id}
      />
    </div>
  );
};
