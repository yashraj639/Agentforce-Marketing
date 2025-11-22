"use client";
import { motion } from "motion/react";
import {
  Codereview,
  EmailLockOutline,
  FileSearch2,
  Reports,
  UserAdmin,
} from "../../icons";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export const SkeletonOne = () => {
  const cardItems = [
    {
      topIcon: <EmailLockOutline className="size-3 text-white" />,
      iconBg: "bg-blue-400",
      title: "Secure Email Sync",
      description: "Protect inbox access with real-time auth policies.",
      badge: <Badge variant="warning" text="Pending" />,
    },
    {
      topIcon: <Codereview className="size-3 text-white" />,
      iconBg: "bg-red-400",
      title: "Code Review",
      description: "Review PRs and enforce coding standards automatically.",
      badge: <Badge variant="success" text="Deployed" />,
    },
    {
      topIcon: <FileSearch2 className="size-3 text-white" />,
      iconBg: "bg-orange-400",
      title: "File Scanner",
      description: "Scan security issues and classify risk levels.",
      badge: <Badge variant="danger" text="Failed" />,
    },
    {
      topIcon: <UserAdmin className="size-3 text-white" />,
      iconBg: "bg-black",
      title: "User Provisioning",
      description: "Automatically manage user roles & offboarding.",
      badge: <Badge variant="warning" text="Scheduled" />,
    },
    {
      topIcon: <Reports className="size-3 text-white" />,
      iconBg: "bg-purple-400",
      title: "Weekly Reports",
      description: "Auto-generate summaries across all workflows.",
      badge: <Badge variant="success" text="Generated" />,
    },
  ];

  return (
    <div className="flex-1 rounded-t-3xl gap-3 flex flex-col bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mx-auto w-full h-full absolute md:inset-x-10 md:inset-y-2 p-2">
      {cardItems.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.2 }}
        >
          <Card {...item} />
        </motion.div>
      ))}
    </div>
  );
};

interface CardProps {
  topIcon: React.ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  badge: React.ReactNode;
}

const Card = ({
  topIcon,
  iconBg = "bg-blue-400",
  title,
  description,
  badge,
}: CardProps) => {
  return (
    <div className="p-4 shadow-black/10 gap-4 border bg-white dark:bg-neutral-800 border-transparent ring-1 rounded-[16px] ring-black/10 flex flex-1 items-start">
      <div
        className={cn(
          "size-6 shrink-0 rounded-full flex items-center justify-center",
          iconBg
        )}
      >
        {topIcon}
      </div>
      <div className="flex justify-between items-center w-full relative overflow-hidden">
        <div className="items-center gap-2 flex">
          <p className="md:text-sm text-xs text-neutral-600 dark:text-neutral-400">
            {title}
          </p>
          <div className="flex items-center gap-4">{badge}</div>
        </div>
        <p className="md:text-sm text-[10px] text-neutral-500 dark:text-neutral-400 flex-nowrap max-w-[16rem] w-full text-left whitespace-nowrap">
          {description}
        </p>
      </div>
    </div>
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
        "inline-flex items-center gap-2 px-2 py-1 rounded-full text-[10px] font-medium",
        current.bg
      )}
    >
      {current.icon}
      <p>{text}</p>
    </div>
  );
};
