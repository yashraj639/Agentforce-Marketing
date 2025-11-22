"use client";
import { motion } from "motion/react";
import {
  Barchart,
  Csv,
  FileIcon,
  GmailLight,
  Googlesheets,
  Headphones,
  Hubspot,
  Looker,
  Salesforce,
  Zendesk,
} from "../../icons";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const SkeletonOne = () => {
  type CardsData = {
    id: string;
    topIcon: React.ReactNode;
    iconBg: string;
    title: string;
    description: string;
    tags: { text: string; icon: React.ReactNode }[];
  };

  const cardsData: CardsData[] = [
    {
      id: "connect-data",
      topIcon: <FileIcon className="size-3 text-white" />,
      iconBg: "bg-blue-500",
      title: "Connect Data",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure access.",
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
      id: "support-assistant",
      topIcon: <Headphones className="size-4 text-white" />,
      iconBg: "bg-orange-500",
      title: "Customer Support Assistant",
      description:
        "Resolves customer issues, drafts replies, and auto-fills CRM forms.",
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
      id: "automated-reporting",
      topIcon: <Barchart className="size-4 text-white" />,
      iconBg: "bg-yellow-500",
      title: "Automated Reporting",
      description: "Compiles performance dashboards & sends weekly summaries.",
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

  const [activeCards, setActiveCards] = useState<CardsData[] | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCards((prev) => {
        //  First Run → start with first item
        if (!prev) {
          return [cardsData[0]];
        }

        //  Stop when all cardData shown
        if (prev.length >= cardsData.length) {
          clearInterval(interval);
          return prev;
        }

        //  Add next item at the *start*
        return [cardsData[prev.length], ...prev];
      });
    }, 1000); // delay per cardsData

    return () => clearInterval(interval);
  }, [cardsData]);

  return (
    <motion.div
      layout
      className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100  dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2"
    >
      {activeCards?.map((card, idx) => (
        <Card key={card.id} {...card} />
      ))}
    </motion.div>
  );
};

interface TagItem {
  text: string;
  icon: React.ReactNode;
}

interface CardProps {
  topIcon: React.ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
}

const Card = ({
  topIcon,
  iconBg = "bg-blue-400",
  title,
  description,
  tags,
}: CardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 shadow-black/10 gap-4 border bg-white dark:bg-neutral-800 border-transparent ring-1 rounded-[16px] ring-black/10 flex items-starmotion.t"
    >
      <div
        className={cn(
          "size-6 shrink-0 rounded-full flex mt-1 items-center justify-center",
          iconBg
        )}
      >
        {topIcon}
      </div>

      <div>
        <p className="text-md font-semibold text-neutral-800 dark:text-neutral-200">{title}</p>
        <p className="text-xs font-medium text-neutral-600 dark:text-neutral-200">{description}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag.text}>
              {tag.icon}
              <span className="text-xs text-neutral-500">{tag.text}</span>
            </Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 w-fit rounded-sm px-1 py-0.5 border border-neutral-200 dark:border-neutral-600 text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
