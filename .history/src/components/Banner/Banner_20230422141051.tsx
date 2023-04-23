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
      <div className="w-full h-full mx-0 z-0">
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
      <div className="relative flex flex-col z-10 ">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  );
};
