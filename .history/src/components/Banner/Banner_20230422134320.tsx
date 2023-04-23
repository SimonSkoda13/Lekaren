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
    <div className="absolute left-0 top-0 w-[100vw] min-h-[80vh]">
      <div className="w-full h-full z-0">
        <Image
          src={image}
          alt="Next.js logo"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(5px) brightness(0.8)",
          }}
        />
      </div>
      <div className="relative flex flex-col content-center pl-8 md:gap-5 md:pt-[30%] md:pl-[30%] z-10 bg-transparent">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  );
};
