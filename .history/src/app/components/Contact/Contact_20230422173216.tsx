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
    <section className="cntn z-10 relative min-h-[45px]: w-full top-[-2rem] grid grid-cols-2 md:grid-cols-4 items-start bg-red-400 rounded-full">
      <div>sdcs</div>
      <div>sdcs</div>
      <div>sdcs</div>
      <div>sdcs</div>
    </section>
  );
};
