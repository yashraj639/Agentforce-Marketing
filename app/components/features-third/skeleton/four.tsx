"use client";
import { motion } from "motion/react";
import {
  Csv,
  FileIcon,
  GmailLight,
  Googlesheets,
  Hubspot,
  Looker,
  Salesforce,
  Zendesk,
} from "../../icons";
import { cn } from "@/lib/utils";
import {
  Feather,
  ListChecks,
  MousePointerClick,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Skeletonfour = () => {
  const cardsData = [
    {
      title: "Brand & Style",
      icon: <FileIcon className="size-4 text-blue-500" />,
      className:
        "bg-blue-100 border border-blue-100 dark:bg-blue-100/10 dark:border-blue-200/10",
      description:
        "Maintain consistent brand tone and messaging across all agent outputs automatically.",
      tags: [
        {
          text: "Zendesk",
          icon: <Zendesk className="size-3 text-black" />,
        },
        {
          text: "Salesforce",
          icon: <Salesforce className="size-3 text-black" />,
        },
        {
          text: "Gmail",
          icon: <GmailLight className="size-3 text-red-500" />,
        },
      ],
    },

    {
      title: "Compliance & Policy",
      icon: <ShieldCheck className="size-4 text-green-500" />,
      className:
        "bg-green-100 dark:bg-neutral-900/30 border border-green-100 dark:border-green-900/30",
      description:
        "Ensure every response follows regulatory, legal, and internal compliance rules.",
      tags: [
        {
          text: "Google Sheets",
          icon: <Googlesheets className="size-3 text-green-500" />,
        },
        {
          text: "Looker",
          icon: <Looker className="size-3 text-orange-500" />,
        },
        {
          text: "CSV",
          icon: <Csv className="size-3 text-neutral-500" />,
        },
      ],
    },

    {
      title: "Content Safety Filters",
      icon: <Feather className="size-4 text-indigo-500" />,
      className:
        "bg-indigo-100 border border-indigo-100 dark:bg-indigo-100/10 dark:border-indigo-200/10",
      description:
        "Protect your brand from harmful content with built-in safety filters that block sensitive or inappropriate material.",
      tags: [
        {
          text: "Zendesk",
          icon: <Zendesk className="size-3 text-black" />,
        },
        {
          text: "Salesforce",
          icon: <Salesforce className="size-3 text-black" />,
        },
        {
          text: "Gmail",
          icon: <GmailLight className="size-3 text-red-500" />,
        },
      ],
    },

    {
      title: "Approval Triggers",
      icon: <MousePointerClick className="size-4 text-gray-500" />,
      className:
        "bg-gray-100 border border-gray-100 dark:bg-gray-100/10 dark:border-gray-200/10",
      description:
        "Automatically route high-risk actions for manual approval before execution.",
      tags: [
        {
          text: "Salesforce",
          icon: <Salesforce className="size-3 text-black" />,
        },
        {
          text: "Hubspot",
          icon: <Hubspot className="size-3 text-orange-400" />,
        },
        {
          text: "Sheets",
          icon: <Googlesheets className="size-3 text-green-400" />,
        },
      ],
    },

    {
      title: "Output Quality Checks",
      icon: <ListChecks className="size-4 text-purple-500" />,
      className:
        "bg-purple-100 border border-purple-100 dark:bg-purple-100/10 dark:border-purple-200/10",
      description:
        "Run quality, factual accuracy, and consistency checks before sending responses to customers.",
      tags: [
        {
          text: "Google Sheets",
          icon: <Googlesheets className="size-3 text-green-500" />,
        },
        {
          text: "Looker",
          icon: <Looker className="size-3 text-orange-500" />,
        },
        {
          text: "CSV",
          icon: <Csv className="size-3 text-neutral-500" />,
        },
      ],
    },
  ];

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  const [selected, setSelected] = useState(cardsData[0]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    stopAutoplay();

    intervalRef.current = setInterval(() => {
      currentIndexRef.current =
        (currentIndexRef.current + 1) % cardsData.length;

      setSelected(cardsData[currentIndexRef.current]);
    }, 2000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <div className="flex gap-4 items-center justify-center max-w-lg mx-auto flex-wrap mb-4">
        {cardsData.map((cardsData, idx) => (
          <button
            onClick={() => setSelected(cardsData)}
            key={cardsData.title}
            className={cn(
              "px-2 py-1 rounded-sm relative text-xs gap-1 cursor-pointer active:scale-98 transition duration-200 flex items-center justify-center opacity-50 bg",
              selected.title === cardsData.title && "opacity-100",
              cardsData.className
            )}
          >
            {selected.title === cardsData.title && (
              <motion.div
                layoutId="selected"
                className="absolute inset-0 rounded-[5px] shadow-inner"
              ></motion.div>
            )}
            {cardsData.icon}
            {cardsData.title}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-[24rem] lg:max-w-md mx-auto w-full h-full absolute inset-x-0 p-2">
        <div className="flex flex-col gap-3">
          {cardsData.map((cardData, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <Card
                key={selected.title}
                topIcon={selected.icon}
                className={selected.className}
                title={selected.title}
                description={selected.description}
                tags={selected.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  topIcon: React.ReactNode;
  className?: string;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
}

const Card = ({ topIcon, className, title, description, tags }: CardProps) => {
  return (
    <motion.div
      key={title}
      className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm flex flex-col gap-4"
    >
      {/* Title Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <div
          className={cn(
            "size-8 flex items-center justify-center rounded-full text-white dark:text-neutral-900",
            className
          )}
        >
          {topIcon}
        </div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.1 }}
          className="text-base font-semibold text-neutral-900 dark:text-white"
        >
          {title}
        </motion.p>
      </motion.div>

      {/* Tone Guidelines text */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-2"
      >
        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Tone Guidelines
        </p>

        {/* Dashed Box */}
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-px py-3 bg-white/60 dark:bg-neutral-800/40">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <Tag key={tag.text}>
                {tag.icon}
                <span className="text-xs text-neutral-600 dark:text-neutral-300">
                  {tag.text}
                </span>
              </Tag>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 rounded-md px-2 py-1  border border-neutral-200 dark:border-neutral-700">
      {children}
    </div>
  );
};
