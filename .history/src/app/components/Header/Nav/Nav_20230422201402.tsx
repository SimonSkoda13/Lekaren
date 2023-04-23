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
            ? "inline-block border-b border-gray-300 w-1/4 pb-1"
            : "hover:inline-block border-b border-red w-1/2 pb-1"
        }
      >
        Domov
      </Link>
      <Link
        href="/onas"
        className={
          path === "/onas"
            ? "inline-block border-b border-gray-300 w-1/4 pb-1"
            : "hover:inline-block border-b border-red w-1/2 pb-1"
        }
      >
        O nás
      </Link>
      <Link
        href="/sluzby"
        className={
          path === "/sluzby"
            ? "inline-block border-b border-gray-300 w-1/4 pb-1"
            : "hover:inline-block border-b border-red w-1/2 pb-1"
        }
      >
        Služby
      </Link>
      <Link
        href="/kontakt"
        className={
          path === "/kontakt"
            ? "inline-block border-b border-gray-300 w-1/4 pb-1"
            : "hover:inline-block border-b border-red-900 w-1/2 pb-1"
        }
      >
        Kontakt
      </Link>
    </div>
  );
};
