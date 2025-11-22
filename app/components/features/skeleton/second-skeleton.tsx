import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  CheckCircle,
  Loader2,
  Waves,
  XCircle,
} from "lucide-react";

const SkeletonTwo = () => {
  return (
    <div
      className={cn(
        "max-w-[85%] group h-full my-auto bg-neutral-100 dark:bg-neutral-900 mx-auto w-full p-4 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-2xl flex flex-col",
        "perspective-distant rotate-y-20 rotate-x-40 -rotate-z-20",
        "[--pattern-fg:var(--color-neutral-950)]/5  dark:[--pattern-fg:var(--color-white)]/10]"
      )}
    >
      <div className="flex items-center gap-4">
        <XCircle size={16} />
        <p className="text-sm text-black dark:text-white">Campaign Planner</p>
      </div>
      <div className="relative flex-1 bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 mt-4 border border-neutral-200 rounded-2xl">
        <Pattern />
        <div
          className="absolute inset-0 h-full w-full bg-white/60 dark:bg-neutral-900 divide-y divide-neutral-300 dark:divide-neutral-700 rounded-2xl translate-x-4 -translate-y-4
          group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
        >
          <Row
            icon={<CheckCircle size={16} className="text-green-400" />}
            text="Fetching Data"
            time="10s"
            className="pt-5"
          />

          <Row
            icon={<Loader2 size={16} className="text-blue-400 animate-spin" />}
            text="Processing Request"
            time="4s"
          />

          <Row
            icon={<AlertTriangle size={16} className="text-yellow-400" />}
            text="Low Confidence"
            time="2s"
          />

          <Row
            icon={<XCircle size={16} className="text-red-400" />}
            text="Failed to Fetch"
            time="0s"
          />
        </div>
      </div>
    </div>
  );
};

export default SkeletonTwo;

const Row = ({
  icon,
  text,
  time,
  className,
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between p-4", className)}>
      <div className="flex items-center gap-4">
        {icon}
        <p className="text-sm text-black dark:text-white">{text}</p>
      </div>
      <div className="flex items-center gap-1">
        <Waves size={16} />
        <p className="text-xs">{time}</p>
      </div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};
