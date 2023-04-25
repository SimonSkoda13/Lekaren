import Image from "next/image";
import React from "react";
import { ImageGradient } from "./ImageGradient/ImageGradient";

export interface HomeHeroProps {
  title: string;
  image: string;
  description: string;
}

export const HomeHero = (props: HomeHeroProps) => {
  const { title, image, description } = props;
  return (
    <section className="relative h-[80vh] z-0 px-0">
      <div className="w-full h-full absolute left-0 top-0 ">
        {/* make filter for image to odd brightness from top biggest to bottom lowest */}
        <ImageGradient>
          <Image
            src={image}
            alt="Next.js logo"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </ImageGradient>
      </div>
      <div className="cntn relative gap-3 h-full flex justify-center flex-wrap flex-col z-10">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <p className="text-2xl text-primary">{description}</p>
      </div>
    </section>
  );
};