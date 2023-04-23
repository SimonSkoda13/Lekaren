import React from "react";
import Image from "next/image";

export interface BannerProps {
  title: string;
  image: string;
  description: string;
}

// title and description are in the middle left of the image and they are above the image
export const Banner = (props: BannerProps) => {
  const { title, image, description } = props;
  return (
    <div className="relative left-0 top-0 w-full min-h-screen overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full z-10 px-4 py-8">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-2xl">{description}</p>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <Image
          src={image}
          alt="Next.js logo"
          fill
          objectFit="cover"
          objectPosition="center"
          style={{ filter: "brightness(0.7)" }}
        />
      </div>
    </div>
  );
};
