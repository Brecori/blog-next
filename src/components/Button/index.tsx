import { ComponentProps, FC } from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "ghost" | "danger";
type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSizes;
} & ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  ...props
}) => {
  const buttonVariants: Record<ButtonVariant, string> = {
    default: clsx("bg-indigo-700 text-slate-100"),
    ghost: clsx("bg-slate-300 text-slate-900"),
    danger: clsx("bg-red-800 text-red-100"),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(
      "text-xs/tight px-3 py-1 rounded-sm",
      "[&>svg]:w-3 [&>svg]:h-3",
      "gap-1",
    ),
    md: clsx(
      "text-base/tight px-6 py-2 rounded-md",
      "[&>svg]:w-4 [&>svg]:h-4",
      "gap-2",
    ),
    lg: clsx(
      "text-lg/tight px-9 py-3 rounded-lg",
      "[&>svg]:w-5 [&>svg]:h-5",
      "gap-3",
    ),
  };

  const buttonClasses = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    "flex items-center justify-center  cursor-pointer transition-opacity duration-300 hover:opacity-80 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:hover:opacity-50 disabled:opacity-50",
  );

  return <button {...props} className={buttonClasses} />;
};
