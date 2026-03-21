import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="pb-16 text-center">
      <p>
        <span>Copyright &copy;{new Date().getFullYear()} - </span>
        <Link href="/" className="underline">
          Pantry 42
        </Link>
      </p>
    </footer>
  );
};
