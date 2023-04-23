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
      <div className="w-full h-full absolute left-0 top-0">
        <Image
          src={image}
          alt="Next.js logo"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
      </div>
      <div className="cntn relative content-center h-full flex flex-col z-10">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-2xl">{description}</p>
      </div>
    </section>
  );
};
