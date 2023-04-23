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
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="absolute top-0 left-0 w-[100vw] min-h-[80vh] z-10 bg-black bg-opacity-50"></div>
    </div>
  );
};
