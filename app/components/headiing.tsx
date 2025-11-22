import React from "react";
import { cn } from "../lib/utlis";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2";
};

const Heading = ({ children, className, tag: Tag = "h2" }: HeadingProps) => {
  return (
    <Tag
      className={cn(
        "font-display font-bold text-3xl md:text-4xl lg:text-6xl tracking-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
