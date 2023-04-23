import { Phone } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export interface ContactProps {
  items?: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
}

export const Contact = (props: ContactProps) => {
  const { items } = props;
  return (
    <section className="cntn z-10 relative top-[-2rem]">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 items-start bg-white rounded-xl shadow-lg divide-x-2">
        {items?.map((item) => (
          <><div className="flex flex-col items-start gap-4 p-6 py-10">
            {/* <Image
            src={item.icon}
            alt={"contactIcon" + item.title}
            width={100}
            height={100}
          /> */}
            <div className="flex w-full flex-row gap-4 items-center">
              {item.icon}
              <h2 className="text-xl font-bold text-secondary">{item.title}</h2>
            </div>
            <p className="text-lg font-medium text-secondary-light">
              {item.description}
            </p>
          </div>
        ))}</>
      </div>
    </section>
  );
};
