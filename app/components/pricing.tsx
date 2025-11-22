import React from "react";
import Container from "./container";
import Heading from "./headiing";
import SubHeading from "./sub-heading";
import { Human, Lock, VideoCall } from "./icons";
import { Button } from "./ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utlis";

const Pricing = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-left flex justify-center flex-col gap-4">
            <SubHeading>Trusted by 500+ enterprise companies</SubHeading>
            <Heading className="mt-4">
              Affordable pricing. <br /> Easy scaling.
            </Heading>
            <SubHeading className="mt-4">
              Start small to explore automation, add agents as you scale, and
              unlock enterprise-grade guardrails, orchestration, and reporting
              when you're ready
            </SubHeading>
            <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
              <li>
                <Lock className="size-3.5" />
                <p>Built-in Guardrails</p>
              </li>
              <li>
                <Human className="size-3.5" />
                <p>Agent Orchestration</p>
              </li>
              <li>
                <VideoCall className="size-3.5" />
                <p>Human-in-the-Loop</p>
              </li>
            </ul>
          </div>
          <div className="grid-right flex flex-col gap-4">
            <PricingCard
              price={10}
              description="Perfect for individuals or small teams exploring automation."
              ctaText="Start your free trial"
              ctaLink="#"
              features={[
                "1 AI Agent Included",
                "Standard Integrations",
                "Basic Approval Flows",
                "7 Day Activity Logs",
              ]}
            />
            <PricingCard
              price={60}
              description="Perfect for individuals or small teams exploring automation."
              ctaText="Contact Sales"
              ctaLink="#"
              features={[
                "Upto 5 AI Agents",
                "Custom Integrations",
                "Custom Approval Flows",
                "30 Day Activity Logs",
                "ROI Integration",
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

interface PricingCardProps {
  price: number;
  description: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
  className?: string;
}

export const PricingCard = ({
  price,
  description,
  ctaText,
  ctaLink,
  features,
  className,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "p-4 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
        className
      )}
    >
      {/* LEFT */}
      <div className="flex flex-col gap-4">
        <Heading>
          ${price}
          <span className="text-sm md:text-xl lg:text-2xl text-neutral-400 dark:text-neutral-500">
            /mo
          </span>
        </Heading>

        <SubHeading>{description}</SubHeading>

        <div>
          <Button className="hover:shadow-brand">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <ul className="list-none flex flex-col gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 font-medium">
              <CircleCheck className="size-3.5 text-black dark:text-white" />
              <p>{f}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
