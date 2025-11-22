"use client";
import Container from "./container";
import Heading from "./headiing";
import SubHeading from "./sub-heading";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import HeroImages from "./hero-images";

const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <Heading tag="h1">
          Agents that do the work <br />
          Approvals that keep you safe.
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes <br />
          without changing how your teams work.
        </SubHeading>
        <div className="cta-btns flex gap-6">
          <Button className="hover:shadow-brand">Start your free trial</Button>

          <Button asChild variant="outline" className="group">
            <Link href="/demos" className="flex items-center gap-2">
              View role based demo
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
        <HeroImages />
      </Container>
    </section>
  );
};

export default Hero;
