import Image from "next/image";
import React from "react";

export interface HomeHeroProps {
  title: string;
  image: string;
  description: string;
}

export const HomeHero = (props: HomeHeroProps) => {
  const { title, image, description } = props;
  return (
    <section className="relative h-[80vh] z-0 px-0">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400"></div>
        <Image
          src={image}
          alt="Next.js logo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-20"
        />
      </div>

      <div className="cntn relative  h-full flex justify-center flex-wrap flex-col z-10">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <p className="text-2xl text-primary">{description}</p>
      </div>
    </section>
  );
};
