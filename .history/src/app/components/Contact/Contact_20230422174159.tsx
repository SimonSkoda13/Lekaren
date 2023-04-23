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
    <section className="cntn z-10 relative top-[-2rem]">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 items-start bg-red-400 rounded-xl">
        {items?.map((item) => (
          <div className="flex flex-col items-start gap-4 p-6">
            {/* <Image
            src={item.icon}
            alt={"contactIcon" + item.title}
            width={100}
            height={100}
          /> */}
            <div>
              <Phone size={40} />
              <h2 className="text-2xl font-bold">{item.title}</h2>
            </div>
            <p className="text-lg font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
