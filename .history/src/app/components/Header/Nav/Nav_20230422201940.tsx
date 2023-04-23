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
          path === "/"
            ? "inline-block border-b border-primary border-b-2"
            : "hover:inline-block border-b border-secondary    "
        }
      >
        Domov
      </Link>
      <Link
        href="/onas"
        className={
          path === "/onas"
            ? "inline-block border-b border-gray-300    "
            : "hover:inline-block border-b border-red    "
        }
      >
        O nás
      </Link>
      <Link
        href="/sluzby"
        className={
          path === "/sluzby"
            ? "inline-block border-b border-gray-500    "
            : "hover:inline-block border-b border-red    "
        }
      >
        Služby
      </Link>
      <Link
        href="/kontakt"
        className={
          path === "/kontakt"
            ? "inline-block border-b border-gray-300    "
            : "hover:inline-block border-b border-primary    "
        }
      >
        Kontakt
      </Link>
    </div>
  );
};
