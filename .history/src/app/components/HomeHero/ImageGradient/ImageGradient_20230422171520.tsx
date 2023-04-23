import React from "react";

export interface ImageGradientProps {
  children: React.ReactNode;
}

export const ImageGradient = (props: ImageGradientProps) => {
  const { children } = props;
  return (
    <div className="relative w-full h-full overflow-hidden z-10">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900 via-gray-300 to-gray-400"></div>
      {children}
    </div>
  );
};
