"use client";
import Container from "./container";
import Heading from "./headiing";
import SubHeading from "./sub-heading";
import HeroImages from "./hero-images";

const Speed = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-10 relative overflow-hidden">
      <Container>
        <Heading>
          Built for Speed <br /> Designed for Scale
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report <br />
          outcomes—without changing how your teams work
        </SubHeading>
        <HeroImages />
      </Container>
    </section>
  );
};

export default Speed;
