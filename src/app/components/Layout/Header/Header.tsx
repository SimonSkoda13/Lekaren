import React from "react";
import { HeaderLogo } from "@/app/components/Layout/Header/components/HeaderLogo";
import { Container } from "@/components/atoms/layout/Container";
import { HeaderContactItems } from "@/app/components/Layout/Header/components/HeaderContactItems";
import Link from "next/link";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <header className={"h-16 lg:h-24 w-full flex items-center "}>
      <Container className={`flex justify-between`}>
        <div className="logo h-full flex">
          <Link href="/">
            <HeaderLogo className={"w-40 lg:w-52"} />
          </Link>
        </div>
        <HeaderContactItems />
      </Container>
    </header>
  );
};
