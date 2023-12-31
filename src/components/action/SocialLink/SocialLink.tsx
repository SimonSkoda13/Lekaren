import React from "react";
import { Facebook, LucideIcon } from "lucide-react";
import Link from "next/link";

export interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  className?: string;
}

export const SocialLink = (props: SocialLinkProps) => {
  const { icon, className, href } = props;

  const Icon = icon;
  return (
    <Link
      href={href}
      target={"_blank"}
      rel="noopener"
      className={`text-primary-400 hover:text-primary-500 transition-colors duration-200  ease-in-out p-4 ${className} rounded-xl hover:bg-primary-50`}
    >
      <Icon size={"1em"} strokeWidth={1.5} />
    </Link>
  );
};
