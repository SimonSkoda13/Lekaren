import React from "react";

export interface ImageGradientProps {}

export const ImageGradient = (props: ImageGradientProps) => {
  const {} = props;
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 opacity-50" />
      {children}
    </div>
  );
};
