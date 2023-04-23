import React from "react";
import Image from "next/image";

export interface BannerProps {
  title: string;
  image: string;
  description: string;
}

export const Banner = (props: BannerProps) => {
  return (
    <div>
      <div className="fixed left-0 top-0 w-[100vw] min-h-[80vh] z-0">
        <Image
          src="/lekarenbanner.jpg"
          alt="Next.js logo"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
};
