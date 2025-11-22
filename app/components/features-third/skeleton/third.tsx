import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { ArrowDown, ArrowUp } from "../../icons";

const SkeletonThree = () => {
  return (
    <div className="flex-1 rounded-t-3xl gap-3 flex flex-col mx-auto w-full h-full absolute  p-2 z-20 perspective-[4000px]">
      <ArrowDown className=" absolute left-32 -top-4 lg:left-60 lg:-top-4 mx-auto z-30 text-neutral-200" />
      <ArrowUp className="absolute left-22 -bottom-5 lg:left-52 lg:-bottom-10 mx-auto z-30" />
      <div
        className={cn(
          "flex items-center justify-center gap-20",
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]"
        )}
        style={{
          transform: "rotateY(20deg) rotateX(50deg) rotateZ(40deg)",
        }}
      >
        <Badge variant="warning" text="Processing" />
        <Badge variant="success" text="Feedback" />
      </div>
    </div>
  );
};

export default SkeletonThree;

const Badge = ({
  variant,
  text,
}: {
  variant: "danger" | "success" | "warning";
  text: string;
}) => {
  const variants = {
    danger: {
      icon: <XCircle size={14} className="text-red-500" />,
      bg: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    },
    success: {
      icon: <CheckCircle size={14} className="text-green-500" />,
      bg: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    warning: {
      icon: <AlertTriangle size={14} className="text-orange-500" />,
      bg: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    },
  };

  const current = variants[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
        current.bg
      )}
    >
      {current.icon}
      <p>{text}</p>
    </div>
  );
};
