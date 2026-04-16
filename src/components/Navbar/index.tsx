"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { AdminMenu } from "../Admin/AdminMenu";
import { BrandLogo } from "../BrandLogo";

export const Navbar: FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const shouldShowAdminMenu = pathname.startsWith("/admin/post");

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
        "flex items-center  fixed top-0 left-0 right-0  z-1 transition-all duration-300 justify-between ",
        hasScrolled ? "bg-black/75 backdrop-blur-sm h-18" : "bg-black h-25",
      )}
    >
      <div className="w-full lg:max-w-360 mx-auto px-8 flex justify-between">
        <BrandLogo />

        {shouldShowAdminMenu && <AdminMenu />}
      </div>
    </nav>
  );
};
