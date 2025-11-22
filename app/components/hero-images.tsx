import React from "react";

import Image from "next/image";
import { cn } from "../lib/utlis";
import { motion } from "motion/react";

const HeroImages = ({
  firstImageSrc = "/hero-main.webp",
  SecondImageSrc = "/hero-main2.webp",
}) => {
  return (
    <div className="relative">
      <div className="relative img min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-20 perspective-distant translate-x-10 md:translate-x-29">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="perspective-[4000px] shadow-2xl"
        >
          <Image
            src={SecondImageSrc}
            alt="demo 1 for agentforce"
            height={1080}
            width={1920}
            className={cn(
              "absolute inset-0 mask-r-from-20% mask-b-from-20% shadow-2xl rounded-xl"
            )}
            style={{
              color: "transparent",
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
        >
          <Image
            src={firstImageSrc}
            alt="demo 1 for agentforce"
            height={1080}
            width={1920}
            className={cn(
              "absolute inset-0 -translate-x-10 rounded-xl mask-r-from-50% mask-b-from-50% shadow-xl"
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 md:h-100 w-full mask-t-from-10% bg-background z-50"></div>
    </div>
  );
};

export default HeroImages;
