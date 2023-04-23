"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Nav = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="py-4 px-4 flex gap-8 items-center mx-auto text-lg font-medium">
      <Link
        href="/"
        className={
          path === "/onas"
            ? "inline-block border-primary border-b-2"
            : "transition-all duration-300 transform inline-block hover:border-b border-secondary"
        }
      >
        Domov
      </Link>
      <Link
        href="/onas"
        className={
          path === "/onas"
            ? "inline-block border-primary border-b-2"
            : "transition-all duration-300 transform inline-block hover:border-b border-secondary"
        }
      >
        O nás
      </Link>
      <Link
        href="/sluzby"
        className={
          path === "/onas"
            ? "inline-block border-primary border-b-2"
            : "transition-all duration-300 transform inline-block hover:border-b border-secondary"
        }
      >
        Služby
      </Link>
      <Link
        href="/kontakt"
        className={
          path === "/onas"
            ? "inline-block border-primary border-b-2"
            : "transition-all duration-300 transform inline-block hover:border-b border-secondary"
        }
      >
        Kontakt
      </Link>
    </div>
  );
};
