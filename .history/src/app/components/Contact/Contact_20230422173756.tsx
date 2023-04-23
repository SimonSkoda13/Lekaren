import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface ContactProps {
  items?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const Contact = (props: ContactProps) => {
  const { items } = props;
  return (
    <section className="cntn z-10 relative w-full min-h top-[-2rem] grid grid-cols-2 md:grid-cols-4 items-start bg-red-400 rounded-full">
      {items?.map((item) => (
        <div className="flex flex-col items-center gap-4 p-4">
          {/* <Image
            src={item.icon}
            alt={"contactIcon" + item.title}
            width={100}
            height={100}
          /> */}
          <Phone/>>
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-lg font-medium">{item.description}</p>
        </div>
      ))}
    </section>
  );
};
