"use client";
import Container from "../container";
import { cn } from "../../lib/utlis";
import { SkeletonOne } from "./features-2-skeleton/first";
import { SkeletonTwo } from "./features-2-skeleton/second";
import { CloudSync, VideoCall, WorkflowAutomation } from "../icons";

const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-10 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
          <div className="card-one">
            <CardContent>
              <h2 className="text-lg md:text-xl font-semibold font-display dark:text-neutral-200">
                Agent Studio
              </h2>
              <CardDescription>
                Design, launch and customize AI agents for marketing, sales,
                support and ops, built around your workflows
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="card-two">
            <CardContent>
              <h2 className="text-lg md:text-xl font-semibold font-display dark:text-neutral-200">
                Multi-Agent Orchestration
              </h2>
              <CardDescription>
                Coordinate multiple agents across workflows using memory,
                interrupts, and conditional logic.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <FeatureGridCard
            icon={<WorkflowAutomation />}
            title="Workflow Automation"
            description="Automate campaigns, tickets and CRM updates without manual handoffs."
          />
          <FeatureGridCard
            icon={<CloudSync />}
            title="Integration Fabric"
            description="Connect CRMs, service desks, data warehouses and cloud apps seamlessly."
          />
          <FeatureGridCard
            icon={<VideoCall />}
            title="Human-in-the-Loop"
            description="Add reviews, approvals and escalations without slowing work."
          />
        </div>
      </Container>
    </section>
  );
};
export default FeaturesSecondary;

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
        "relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  tag?: "p";
};

export const CardDescription = ({
  children,
  className,
  tag: Tag = "p",
}: HeadingProps) => {
  return (
    <Tag
      className={cn(
        "max-w-sm font-inter text-neutral-400 dark:text-neutral-600 mt-2 text-balance",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const CardContent = ({ children }: { children?: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

interface FeatureGridCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureGridCard = ({
  icon,
  title,
  description,
  className,
}: FeatureGridCardProps) => {
  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold font-display ">{title}</h3>
      </div>
      <p className="text-sm font-inter text-neutral-500 dark:text-neutral-400 mt-1 text-balance">
        {description}
      </p>
    </div>
  );
};
