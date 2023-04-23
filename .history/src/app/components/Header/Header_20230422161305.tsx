import React from "react";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <>
      <header className="bg-white">
        <div className="cntn flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12"></div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold">Lekárne</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <Link href="/lekaren">
                <a className="text-xl font-bold">Lekárne</a>
              </Link>
            </div>
            <div className="mr-4">
              <Link href="/lekaren">
                <a className="text-xl font-bold">O nás</a>
              </Link>
            </div>
            <div className="mr-4"></div>
          </div>
        </div>
      </header>
    </>
  );
};
