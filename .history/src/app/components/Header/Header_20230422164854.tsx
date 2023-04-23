import Link from "next/link";
import React from "react";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <header className="fixed w-full top-2 z-10 px-2">
      <div className="flex bg-white rounded-full">
        <h1 className="py-2 px-4 text-2xl font-bold">Lekárne</h1>
        <div className="py-2 px-4 flex gap-4 items-center mx-auto" text-lg>
          <Link href="/">
            <p className="text-xl font-bold">Domov</p>
          </Link>
          <Link href="/onas">
            <p className="text-xl font-bold">O nás</p>
          </Link>
          <Link href="/sluzby">
            <p className="text-xl font-bold">Služby</p>
          </Link>
          <Link href="/kontakt">
            <p className="text-xl font-bold">Kontakt</p>
          </Link>
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
