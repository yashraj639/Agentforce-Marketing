"use client";
import Container from "../container";
import { cn } from "../../lib/utlis";
import { SkeletonOne } from "./skeleton/first";
import { SkeletonTwo } from "./skeleton/second";
import SkeletonThree from "./skeleton/third";
import { Skeletonfour } from "./skeleton/four";

const FeaturesThird = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-10 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800  divide-neutral-200 dark:divide-neutral-800">
          <div className="card-one md:border-r border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg md:text-xl font-semibold font-display">
                Audit Trail
              </h2>
              <CardDescription>
                Tracks every agent action with full input-output visibility and
                timestamps.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="card-two border-b">
            <CardContent>
              <h2 className="text-lg md:text-xl font-semibold font-display">
                Role-Based Access
              </h2>
              <CardDescription>
                Controls who can launch, review, or manage agents based on
                roles.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="card-three md:border-r border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg md:text-xl font-semibold font-display">
                Approval Queue
              </h2>
              <CardDescription>
                Sends agent-generated content to human reviewers before it is
                published.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-50% mask-t-from-50% mask-b-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div className="card-four border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg md:text-xl font-semibold font-display">
                Guardrail Engine
              </h2>
              <CardDescription>
                Applies brand, tone, and policy checks before output goes live.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <Skeletonfour />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default FeaturesThird;

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
