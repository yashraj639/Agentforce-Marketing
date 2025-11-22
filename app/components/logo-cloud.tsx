"use client";
import Image from "next/image";
import { motion } from "motion/react";
import SubHeading from "./sub-heading";

const LogoCloud = () => {
  const logos = [
    {
      title: "OpenAI",
      src: "/openai.webp",
    },
    {
      title: "Oracle",
      src: "/oracle.webp",
    },
    {
      title: "Portola",
      src: "/portola.webp",
    },
    {
      title: "Granola",
      src: "/granola.webp",
    },
    {
      title: "Hello Paitent",
      src: "/hello-patient.webp",
    },
    {
      title: "Character Ai",
      src: "/characterai.png",
    },
  ];
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="pb-10 md:pb-15">
      <SubHeading className="text-neutral-600 font-medium dark:text-neutral-400 text-lg text-center max-w-xl mx-auto">
        Trusted by modern operators across industries. <br />
        <span className="text-neutral-400 ">
          From pilot to scale without chaos.
        </span>
      </SubHeading>
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mt-10"
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.title}
            variants={child}
            whileHover={{ scale: 1.1 }}
            className="relative flex flex-col items-center group"
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={100}
              height={100}
              className="size-20 mx-auto object-contain dark:filter dark:invert"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LogoCloud;
