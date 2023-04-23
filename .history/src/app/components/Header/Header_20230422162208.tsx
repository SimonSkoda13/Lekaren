import Link from "next/link";
import React from "react";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <header className="fixed w-full top-2 z-10 px-2">
      <div className="cntn flex items-center bg-white rounded-full">
        <div className="flex items-center">
            <h1 className="text-2xl font-bold">Lekárne</h1>
        <div className="flex items-center">
          <div className="mr-4">
            <Link href="/lekaren">
              <p className="text-xl font-bold">Lekárne</p>
            </Link>
          </div>
          <div className="mr-4">
            <Link href="/lekaren">
              <p className="text-xl font-bold">O nás</p>
            </Link>
          </div>
          <div className="mr-4"></div>
        </div>
      </div>
    </header>
  );
};
