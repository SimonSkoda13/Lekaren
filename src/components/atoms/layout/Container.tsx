import React from "react";

export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container = (props: ContainerProps) => {
  const { children, className } = props;
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};
