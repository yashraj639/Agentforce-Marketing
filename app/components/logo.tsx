import Link from "next/link";
import React from "react";
import { cn } from "../lib/utlis";
import { SVGLogoIcon } from "./icons";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1", className)}>
      <SVGLogoIcon />
      <span className="text-sm text-neutral-600">Agentforce</span>
    </Link>
  );
};

export default Logo;

