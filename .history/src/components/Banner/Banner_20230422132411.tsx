import React from "react";
import Image from "next/image";

export interface BannerProps {
  title: string;
  image: string;
  description: string;
}

// title and description are in the middle left of the image and they are above the image
export const Banner = (props: BannerProps) => {
  return (
    <div className="relative w-[100vw] min-h-[80vh]">
      <div className="absolute left-0 top-0 w-[100vw] min-h-[80vh] z-0">
        <Image
          src="/lekarenbanner.jpg"
          alt="Next.js logo"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="absolute top-0 left-0 w-[100vw] min-h-[80vh] z-10 bg-black bg-opacity-50"></div>
    </div>
  );
};
