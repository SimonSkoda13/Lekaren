import React from "react";

export interface NavProps {}

export const Nav = (props: NavProps) => {
  const {} = props;
  return (
    <div className="py-4 px-4 flex gap-8 items-center mx-auto text-lg font-medium">
      <Link href="/">Domov</Link>
      <Link href="/onas">O nás</Link>
      <Link href="/sluzby">Služby</Link>
      <Link href="/kontakt">Kontakt</Link>
    </div>
  );
};
