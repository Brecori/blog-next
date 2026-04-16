"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type BrandLogoProps = {
  className?: string;
  titleClassName?: string;
  imageClassName?: string;
};

export const BrandLogo: FC<BrandLogoProps> = ({
  className,
  titleClassName,
  imageClassName,
}) => {
  return (
    <Link href="/" className={clsx("flex items-center gap-1", className)}>
      <h1
        className={clsx(
          "text-2xl/tight font-bold italic text-indigo-500",
          titleClassName,
        )}
      >
        Pantry <span className="text-slate-100">42</span>
      </h1>
      <Image
        src="/images/rocket.png"
        alt="Logo da Pantry 42"
        width={42}
        height={42}
        className={imageClassName}
      />
    </Link>
  );
};
