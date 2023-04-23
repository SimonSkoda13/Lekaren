import React from "react";

export interface ImageGradientProps {
  children: React.ReactNode;
}

export const ImageGradient = (props: ImageGradientProps) => {
  const { children } = props;
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-500 overflow-hidden z-10">
      <div className="absolute inset-0 z-10"></div>
      {children}
    </div>
  );
};
