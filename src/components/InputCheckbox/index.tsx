import clsx from "clsx";
import { ComponentProps, FC, useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
  type?: "checkbox";
} & ComponentProps<"input">;

export const InputCheckbox: FC<InputCheckboxProps> = ({
  labelText = "",
  type = "checkbox",
  ...props
}) => {
  const id = useId();

  return (
    <div className="flex  gap-2 items-center">
      <input
        {...props}
        className={clsx(
          "outline-0 focus:ring-1 focus:ring-slate-500",
          props.className,
        )}
        id={id}
        type={type}
      />
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
};
