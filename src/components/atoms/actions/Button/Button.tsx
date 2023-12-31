import React from "react";
import { LucideIcon } from "lucide-react";

export interface ButtonProps {
  children?: React.ReactNode;
  icon?: LucideIcon;
}

export const Button = (props: ButtonProps) => {
  const { icon, children } = props;

  const Icon = icon;

  return (
    <button
      className={
        "bg-primary-500 text-white px-8 py-4 flex items-center text-sm lg:text-base rounded-md shadow-xl font-medium "
      }
    >
      {Icon && (
        <span className={"mr-2 tracking-wide hover:bg-primary-600 transition-colors duration-200 ease-in-out"}>
          <Icon strokeWidth={2.5} size={"1em"} />
        </span>
      )}
      {children}
    </button>
  );
};
