"use client";

import Link from "next/link";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";

type NavItemLinkProps = {
  href: string;
  children: ReactNode;
};
/** Этот компонент точно всегда будет клиентским. Для смены состояния активности нужно быть гидрированным */
export const NavItemLink: FC<NavItemLinkProps> = ({ href, children }) => {
  let isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={clsx(
        "relative block px-3 py-2 transition",
        isActive
          ? "text-teal-500 dark:text-teal-400"
          : "hover:text-teal-500 dark:hover:text-teal-400",
      )}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
      )}
    </Link>
  );
};
