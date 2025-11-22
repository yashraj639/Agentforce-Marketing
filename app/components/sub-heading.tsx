import React from "react";
import { cn } from "../lib/utlis";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "p";
};

const SubHeading = ({ children, className, tag: Tag = "h2" }: HeadingProps) => {
  return (
    <Tag
      className={cn(
        "text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-inter max-w-xl",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SubHeading;
