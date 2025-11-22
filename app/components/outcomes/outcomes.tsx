"use client";
import Container from "../container";
import Heading from "../headiing";
import SubHeading from "../sub-heading";
import HeroImages from "../hero-images";

const Outcomes = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <Heading>
          Governed AI, <br />
          Trusted Outcomes
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents with built-in approvals, brand guardrails, and audit
          trails. Every step is visible, reviewable, and compliant
        </SubHeading>
        <HeroImages
          firstImageSrc={"/outcome1.webp"}
          SecondImageSrc={"/outcome2.webp"}
        />
      </Container>
    </section>
  );
};

export default Outcomes;
