import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const SkeletonOne = () => {
  return (
    <div className="h-full w-full perspective-distant -translate-y-10 -rotate-y-20 rotate-z-15 rotate-x-30 scale-[1.2] mask-tl-from-50%">
      <SkeletonCard
        className="absolute bottom-0 left-10 z-30 max-w-[90%]"
        icon={<XCircle size={16} />}
        title="Campaign Planner"
        description="Creates clear campaign briefs using product info, audience data, and past results"
        badge={<Badge variant="danger" text="120s" />}
      />
      <SkeletonCard
        className="absolute bottom-10 left-4 inset-x-0 z-20"
        icon={<CheckCircle size={16} />}
        title="Issue Tracker"
        description="Creates clear campaign briefs using product info, audience data, and past results"
        badge={<Badge variant="success" text="10s" />}
      />
      <SkeletonCard
        className="absolute bottom-16 left-4 z-10 max-w-[80%]"
        icon={<AlertTriangle size={16} />}
        title="Risk Analysis"
        description="Creates clear campaign briefs using product info, audience data, and past results"
        badge={<Badge variant="warning" text="40s" />}
      />
    </div>
  );
};

export default SkeletonOne;

interface SkeletonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className?: string;
}

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto mx-auto w-full  bg-white dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {icon}
        <p className="text-sm text-black dark:text-white">{title}</p>
        {badge}
      </div>

      <p className="text-[10px] md:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3">
        {description}
      </p>

      <div className="flex items-center gap-4 mt-4">
        <Tag text="Google Ads" />
        <Tag text="SaaS" />
        <Tag text="Content" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <button className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
      {text}
    </button>
  );
};

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
      icon: <AlertTriangle size={14} className="text-yellow-500" />,
      bg: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    },
  };

  const current = variants[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium",
        current.bg
      )}
    >
      {current.icon}
      <p>{text}</p>
    </div>
  );
};
