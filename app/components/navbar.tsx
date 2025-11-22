"use client";
import { useState } from "react";
import Logo from "./logo";
import Container from "./container";
import Link from "next/link";
import { Button } from "./ui/button";
import { PanelRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ModeToggleButton from "./mode-toggle";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Product", href: "#product" },
  { name: "Socials", href: "#socials" },
  { name: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delay: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -14 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative flex justify-between md:hidden p-4">
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <PanelRight className="size-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(18px)",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-4 dark:bg-[rgba(0,0,0,0.4)]"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="rounded-full hover:bg-muted transition"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Nav Links */}
            <motion.nav
              variants={parent}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start gap-8 mt-12"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={child}
                  className="text-2xl font-medium text-neutral-700 dark:text-neutral-300 hover:text-foreground transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>

            {/* Footer Buttons */}
            <div className="flex justify-end items-center gap-6 mt-auto">
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Login
              </Link>
              <Button className="hover:shadow-brand">Signup</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-5 hidden lg:flex items-center justify-between">
      {/* Left */}
      <Logo />

      {/* Center */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Right */}
      <div className="flex items-center gap-8">
        <ModeToggleButton />
        <Link
          href="/login"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Login
        </Link>
        <Button className="hover:shadow-brand">Signup</Button>
      </div>
    </Container>
  );
};
