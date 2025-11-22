import { Plus } from "lucide-react";
import Container from "../container";
import Heading from "../headiing";
import SubHeading from "../sub-heading";
import Card, { CardCTA, CardContent, CardSkeleton, CardTitle } from "./card";
import SkeletonOne from "./skeleton/first-skeleton";
import Skeletonthree from "./skeleton/third-skeleton";
import SkeletonTwo from "./skeleton/second-skeleton";

const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32">
      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <Heading className="text-center lg:text-left">
          Built for Fast Moving Teams That Need Control.
        </Heading>
        <div className="flex items-baseline">
          <SubHeading
            tag="p"
            className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-inter max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            Agents work inside your existing tools, with built-in approvals,
            brand and policy guardrails, and full traceability. Every action is
            auditable, every outcome accountable.
          </SubHeading>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 my-10 md:my-20">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne></SkeletonOne>
          </CardSkeleton>
          <CardContent>
            <CardTitle>
              Prebuilt Agents,
              <br /> Tuned to Your Workflows
            </CardTitle>
            <CardCTA>
              <Plus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="card-2">
          <CardSkeleton>
            <SkeletonTwo />
          </CardSkeleton>
          <CardContent>
            <CardTitle>
              Automate Handoffs, <br />
              Reduce Ops Friction
            </CardTitle>
            <CardCTA>
              <Plus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="card-3 rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton>
            <Skeletonthree />
          </CardSkeleton>
          <CardContent>
            <CardTitle>
              Approvals, Guardrails,
              <br /> and Full Auditability
            </CardTitle>
            <CardCTA>
              <Plus />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Features;
