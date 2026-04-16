import { ComponentProps, FC } from "react";

type ButtonProps = {} & ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
