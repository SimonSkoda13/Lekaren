import Link from "next/link";
import React from "react";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <header className="fixed w-full top-2 z-10 px-2">
      <div className="flex bg-white rounded-full">
        <h1 className="py-2 px-4 text-2xl font-bold">Lekárne</h1>
        <div className="py-2 px-4 flex gap-4 items-center mx-auto">
          <Link href="/lekaren">
            <p className="text-xl font-bold">Lekárne</p>
          </Link>
          <Link href="/lekaren">
            <p className="text-xl font-bold">O nás</p>
          </Link>
        </div>
        {/* button order self */}
        <div className="flex justify-center items-center px-5 p-0 bg-primary rounded-full ">
          <Link href="/order">
            <p className="text-xl font-bold">Objednať sa</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
