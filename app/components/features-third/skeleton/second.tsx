import { cn } from "@/lib/utils";
import Image from "next/image";
import { Gridlogo } from "../../icons";
import { motion } from "motion/react";
import { useMemo } from "react";

export const SkeletonTwo = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-4 space-y-4 w-full h-full absolute px-8">
      <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
        <GridContainer />
        <GridContainer src="/mohanlal.webp" />
        <GridContainer src="/rajnikanth.webp" />

        <GridContainer />
      </div>
      <div className="grid grid-cols-5 gap-1">
        <GridContainer />
        <GridContainer src="/kamal-hassan.webp" />
        <GridContainer>
          <div className="h-full w-full bg-white dark:bg-neutral-900 rounded-[12px] flex items-center justify-center">
            <Gridlogo />
          </div>
        </GridContainer>
        <GridContainer src="/Chiranjeevi.webp" />
        <GridContainer />
      </div>
      <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
        <GridContainer />
        <GridContainer src="/Mamooty.webp" />
        <GridContainer src="/Nagarjuna.webp" />

        <GridContainer />
      </div>
    </div>
  );
};

interface GridContainerProps {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  alt?: string;
  containerClassName?: string;
}

const GridContainer = ({
  children,
  className,
  src,
  containerClassName,
  alt,
}: GridContainerProps) => {
  const random = useMemo(
    () => ({
      duration: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 0.5 + 0.2,
    }),
    []
  );

  return (
    <div
      className={cn(
        "w-full justify-self-center aspect-square border border-dashed border-neutral-200 rounded-xl relative p-1",
        "[--pattern-fg:var(--color-neutral-950)/5] dark:[--pattern-fg:var(--color-neutral-50)/10]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-full h-full rounded-[12px] p-px relative z-10",
          className
        )}
      >
        {children ?? (
          <>
            {src && (
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={random}
              >
                <Image
                  width={120}
                  height={120}
                  src={src}
                  alt="grid image"
                  className="object-cover aspect-square rounded-[12px] relative z-20"
                />
              </motion.div>
            )}
          </>
        )}
      </div>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] rounded-xl bg-fixed"></div>
    </div>
  );
};
