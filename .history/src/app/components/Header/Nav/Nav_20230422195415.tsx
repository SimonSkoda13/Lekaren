"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Nav = () => {
  const { asPath } = useRouter();
  return (
    <div className="py-4 px-4 flex gap-8 items-center mx-auto text-lg font-medium">
      <Link href="/">Domov</Link>
      <Link href="/onas">O nás</Link>
      <Link href="/sluzby">Služby</Link>
      <Link href="/kontakt">Kontakt</Link>
    </div>
  );
};
