import { Phone } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

export interface ContactProps {
  items?: {
    title: string;
    description: string;
    icon: ReactNode;
    link?: string;
  }[];
}

export const Contact = (props: ContactProps) => {
  const { items } = props;
  return (
    <section className="cntn z-10 relative top-[-2rem]">
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 items-start bg-white rounded-xl shadow-lg divide-x divide-primary">
        {items?.map((item) => (
          <Link href={item?.link as Url}>
            <div className="flex flex-col h-fulld items-start gap-4 p-6 py-10">
              <div className="flex w-full flex-row gap-4 items-center">
                {item.icon}
                <h2 className="text-xl font-bold text-secondary">
                  {item.title}
                </h2>
              </div>
              <p className="text-lg font-medium text-secondary-light">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
