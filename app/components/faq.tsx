"use client";
import { motion } from "motion/react";
import Container from "./container";
import Heading from "./headiing";
import { FaqIcon } from "./icons";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utlis";

const Faq = () => {
  const questions = [
    {
      question: "What is Agentforce AI?",
      answer:
        "Agentforce AI is a workflow automation and AI agent platform that helps teams automate tasks, support, and operations using intelligent agents.",
    },
    {
      question: "How does Agentforce AI automate workflows?",
      answer:
        "Agentforce AI connects to your CRMs, helpdesks, APIs, and tools to run multi-step workflows using rules, triggers, and AI-based decision-making.",
    },
    {
      question: "Do I need coding knowledge to use Agentforce AI?",
      answer:
        "No. Agentforce AI provides a no-code interface where you can build automation flows, connect tools, and deploy AI agents easily.",
    },
    {
      question: "Is my data secure with Agentforce AI?",
      answer:
        "Yes. Agentforce AI includes built-in guardrails, access control, and enterprise-grade security to keep your data private and compliant.",
    },
    {
      question: "Can I integrate Agentforce AI with my existing tools?",
      answer:
        "Yes. Agentforce offers integrations for Salesforce, HubSpot, Google Sheets, Slack, Zendesk, and many more.",
    },
  ];

  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container>
        <FaqIcon className="size-22" />
        <Heading className="my-10 md:my-20">Frequently Asked Questions</Heading>

        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Questions
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;

const Questions = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 p-4 md:p-8"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-lg md:text-xl lg:text-2xl tracking-tight text-left">
          {question}
        </h3>
        <div className="cursor-pointer size-6 relative rounded-full flex items-center justify-center">
          <CircleMinus
            className={cn(
              "size-6 absolute inset-0 transition-all duration-300",
              open && "scale-0.98 rotate-90"
            )}
          />
          <CirclePlus
            className={cn(
              "size-6 absolute inset-0 transition-all duration-300 scale-0 -rotate-90",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="overflow-hidden"
      >
        <p className="text-left mt-4">
          {answer.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>
      </motion.div>
    </button>
  );
};
