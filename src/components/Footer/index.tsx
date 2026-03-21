import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="  bg-black w-full text-slate-100">
      <div className="max-w-360 mx-auto px-4 py-8 lg:px-8 lg:py-16 flex flex-col gap-8 items-start lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
          <Link href="/" className="text-xl">
            Pantry 42
          </Link>
          <p className="text-sm mt-2 text-slate-300">
            Selecionando sabores extraordinários do universo culinário —
            conhecidos e inexplorados. Desde 2024, explorando ingredientes,
            ideias e experiências além do comum.
          </p>
        </div>
        <div className="flex gap-4 w-full justify-center text-center lg:justify-end lg:text-start">
          <p className="">
            &copy; {new Date().getFullYear()} Pantry 42 - Exploradores do
            universo culinário.
          </p>
          <Rocket width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};
