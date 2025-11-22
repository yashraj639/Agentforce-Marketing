import React from "react";
import Container from "./container";
import Logo from "./logo";
import SubHeading from "./sub-heading";
import { Button } from "./ui/button";
import Link from "next/link";
import { Send } from "lucide-react";
import { cn } from "../lib/utlis";

const Footer = () => {
  return (
    <footer className="py-10 md:py-20 lg:py-32 relative overflow-hidden border-t border-neutral-200 dark:border-neutral-800 perspective-distant z-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-20">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo />
            <SubHeading>Safe, observable, outcome-driven AI</SubHeading>
            <div>
              <Button className="shadow-brand">Start a 30-day trial</Button>
            </div>
          </div>
          <FooterList
            title="Product"
            items={[
              "Agent Simulator",
              "Workflow Builder",
              "Guardrail Engine",
              "Playground",
              "Integrations",
              "Pricing",
            ]}
          />
          <FooterList
            title="Company"
            items={["About", "Careers", "Contact", "Blog"]}
          />
          <div className="flex flex-col gap-4">
            <p className="font-medium text-neutral-400">Newsletter</p>
            <div className="border relative border-neutral-200  flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-md">
              <input
                className="bg-transparent outline-none py-2 pl-2 pr-12 placeholder-neutral-400 text-neutral-600 text-sm"
                type="email"
                placeholder="Enter your Email"
              />
              <button className="cursor-pointer px-4 py-2 rounded-[7px] bg-black inset-y-0 right-0 absolute">
                <Send className="text-neutral-200 size-4" />
              </button>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 font-inter max-w-xl text-sm md:text-sm lg:text-sm">
              Get the latest product news and behind the scenes updates.
            </p>
          </div>
        </div>
      </Container>
      <Container className=" flex flex-col sm:flex-row justify-between mt-10 relative z-20 gap-4 md:gap-0">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Agentforce AI. All rights reserved.
        </p>
        <div className="flex md:items-end items-start flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-neutral-500">
              {" "}
              <Link href="#">Privacy Policy</Link>
            </p>
            <p className="text-sm text-neutral-500">
              {" "}
              <Link href="#">Terms of Service</Link>
            </p>
          </div>
        </div>
      </Container>
      <div
        className={cn(
          "flex items-center justify-center gap-20",
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)]"
        )}
        style={{
          transform: "rotateX(50deg)",
        }}
      ></div>
    </footer>
  );
};

export default Footer;

interface FooterListProps {
  title: string;
  items: string[];
}

const FooterList = ({ title, items }: FooterListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-neutral-400">{title}</p>
      <ul className="list-none flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-neutral-600 text-sm hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200"
          >
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
