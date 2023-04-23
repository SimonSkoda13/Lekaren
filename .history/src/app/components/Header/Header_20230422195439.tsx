import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Nav } from "./Nav/Nav";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const { asPath } = useRouter();
  const {} = props;
  return (
    <header className="cntn fixed w-full top-3 z-10">
      <div className="flex bg-white rounded-full ">
        {/* logo */}
        <div className="flex justify-center items-center px-4">
          <img src="/logoHeader.svg" alt="logo" className="w-[170px]" />
        </div>
        {/* nav */}
        <Nav/>>
        {/* button order self */}
        <div className="flex justify-center items-center px-5 p-0 bg-primary rounded-full text-lg font-bold">
          <Link href="/order">Objednať sa</Link>
        </div>
      </div>
    </header>
  );
};
