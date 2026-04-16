"use client";

import clsx from "clsx";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import { BrandLogo } from "../../BrandLogo";
import { AdminMenuLinks } from "./Links";

export const AdminMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div ref={menuRef} className="relative flex items-center text-slate-100">
      <AdminMenuLinks iconSize={16} containerClasses="hidden md:flex gap-8" />

      <button
        type="button"
        aria-label={
          isOpen ? "Fechar menu administrativo" : "Abrir menu administrativo"
        }
        aria-expanded={isOpen}
        aria-controls="admin-mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
        className="flex items-center justify-center  md:hidden"
      >
        <MenuIcon size={24} />
      </button>

      <>
        <div
          id="admin-mobile-menu"
          className={clsx(
            "fixed top-0 right-0 bottom-0 z-10 flex w-full flex-col  bg-slate-950 p-8 md:hidden transition duration-500",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <BrandLogo />
            <button
              type="button"
              aria-label="Fechar menu administrativo"
              onClick={() => setIsOpen(false)}
              className="flex  shrink-0 items-center justify-center "
            >
              <XIcon size={20} />
            </button>
          </div>

          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Admin Menu
          </div>

          <AdminMenuLinks iconSize={18} />
        </div>
      </>
    </div>
  );
};
