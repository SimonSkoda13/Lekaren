import React from "react";
import { LucideIcon } from "lucide-react";

export interface HeaderContactItemProps {
  icon: LucideIcon;
  text: React.ReactNode;
  href?: string;
  className?: string;
}

export const HeaderContactItem = (props: HeaderContactItemProps) => {
  const { icon, text, href, className } = props;

  const Icon = icon;

  return (
    <a
      href={href}
      className={`flex lg:gap-3 gap-2 font-medium hover:text-primary-400 transition-all ease-in-out duration-200 ${className}`}
    >
      <span className="icon text-primary-500 flex items-center">
        <Icon size={"1.1em"} strokeWidth={2.5} />
      </span>
      <span className="text">{text}</span>
    </a>
  );
};
