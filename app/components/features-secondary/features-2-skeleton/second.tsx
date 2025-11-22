import { cn } from "@/lib/utils";
import { MicrosoftIcon, SVGLogoIcon, Slack, Googlecloud } from "../../icons";
import { CircleCheck, XCircle } from "lucide-react";

export const SkeletonTwo = () => {
  return (
    <div
      className="flex-1 rounded-t-3xl gap-2 flex items-center justify-center w-full h-full absolute inset-x-0 p-2"
      style={{
        transform: "rotateY(20deg) rotateX(30deg) rotateZ(-15deg) ",
      }}
    >
      <Circle className="flex items-center justify-center shadow-sm">
        <SVGLogoIcon className="size-8 text-neutral-400" />
        <Orbit className="[--orbit-duration:10s] [--translate-position:140px]">
          <Slack className="size-6" />
        </Orbit>
        <Orbit className="[--orbit-duration:12s] [--translate-position:160px]">
          <MicrosoftIcon className="size-6" />
        </Orbit>
        <Orbit className="[--orbit-duration:14s] [--translate-position:180px]">
          <Googlecloud className="size-6" />
        </Orbit>
        <Orbit className="[--orbit-duration:20s] [--translate-position:200px] size-auto ring-0 shadow-none bg-transparent w-60 h-20">
          <SkeletonCard
            className="absolute bottom-0 left-12 z-30 max-w-[90%]"
            icon={<XCircle size={16} />}
            title="Campaign Planner"
            description="Creates clear campaign briefs using product info, audience data, and past results"
          />
        </Orbit>
        <Orbit className="[--orbit-duration:25s] [--translate-position:220px] size-auto ring-0 shadow-none bg-transparent w-60 h-20">
          <SkeletonCard
            className="absolute bottom-0 left-12 z-30 max-w-[90%]"
            icon={<CircleCheck size={16} />}
            title="Ready-made templates"
          />
        </Orbit>
      </Circle>
      <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-60 bg-neutral-100/80 dark:bg-neutral-800/80 z-9 relative"></Circle>
      <Circle className=" shadow border-neutral-100 dark:border-neutral-700 size-80 bg-neutral-100/60 dark:bg-neutral-800/60 z-8"></Circle>
      <Circle className=" shadow border-neutral-100 dark:border-neutral-700 size-100 bg-neutral-100/40 dark:bg-neutral-800/40 z-7"></Circle>
      <Circle className=" shadow border-neutral-100 dark:border-neutral-700 size-120 bg-neutral-100/20 dark:bg-neutral-800/20 z-6"></Circle>
    </div>
  );
};

const Circle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-white absolute inset-0 dark:bg-neutral-800 border z-10 rounded-full m-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const Orbit = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "size-10 flex items-center justify-center absolute inset-0 m-auto border border-transparent rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:7s] bg-white dark:bg-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};

interface SkeletonCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;

  className?: string;
}

const SkeletonCard = ({
  icon,
  title,
  description,

  className,
}: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto mx-auto w-full bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {icon}
        <p className="text-xs text-black dark:text-white">{title}</p>
      </div>

      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-2">
        {description}
      </p>
    </div>
  );
};
