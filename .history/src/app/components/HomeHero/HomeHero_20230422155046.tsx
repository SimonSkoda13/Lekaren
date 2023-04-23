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
      <div className="w-full h-full absolute left-0 top-0 filter brightness-150 absolute top-0 left-0 z-10">
        {/* make filter for image to odd brightness from top biggest to bottom lowest */}
        <Image
          src={image}
          alt="Next.js logo"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="cntn relative  h-full flex justify-center flex-wrap flex-col z-10">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <p className="text-2xl text-primary">{description}</p>
      </div>
    </section>
  );
};
