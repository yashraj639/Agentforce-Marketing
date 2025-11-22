import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "max-w-l bg-neutral-50 dark:bg-neutral-800 rounded-lg",

        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

export const CardTitle = ({
  children,
  className,
  tag: Tag = "h3",
}: {
  children: React.ReactNode;
  className?: string;
  tag?: "h3";
}) => {
  return (
    <Tag
      className={cn(
        "text-lg md:text-2xl font-semibold font-display",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "size-5 md:size-10 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center active:scale-[0.98] transition duration-200",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardSkeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
