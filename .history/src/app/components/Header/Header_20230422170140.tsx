import Link from "next/link";
import React from "react";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <header className="cntn fixed w-full top-2 z-10">
      <div className="flex bg-white rounded-full">
        <h1 className="py-2 px-4 text-2xl font-bold">Lekárne</h1>
        <div className="py-2 px-4 flex gap-8 items-center mx-auto text-lg font-medium">
          <Link href="/">Domov</Link>
          <Link href="/onas">O nás</Link>
          <Link href="/sluzby">Služby</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        {/* button order self */}
        <div className="flex justify-center items-center px-5 p-0 bg-primary rounded-full ">
          <Link href="/order">
            <p className="text-lg font-bold">Objednať sa</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
