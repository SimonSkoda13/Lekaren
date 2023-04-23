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
    <section className="cntn relative top-[-2rem] grid grid-cols-2 md:grid-cols-4 items-start bg-white rounded-full"></section>
  );
};
