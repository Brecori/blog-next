"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

export const Navbar: FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const checkIfPageScrolled = () => {
    setHasScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    checkIfPageScrolled();

    window.addEventListener("scroll", checkIfPageScrolled);

    return () => {
      window.removeEventListener("scroll", checkIfPageScrolled);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "flex items-center  fixed top-0 left-0 right-0  z-1 transition-all duration-300 justify-between",
        hasScrolled ? "bg-black/75 backdrop-blur-sm h-18" : "bg-black h-25",
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-1 w-full lg:max-w-360 mx-auto px-8 "
      >
        <h1 className="text-2xl/tight font-bold text-indigo-500 italic">
          Pantry <span className="text-slate-100 ">42</span>
        </h1>
        <Image
          src="/images/rocket.png"
          alt="Logo da Pantry 42"
          width={42}
          height={42}
        />
      </Link>
    </nav>
  );
};
