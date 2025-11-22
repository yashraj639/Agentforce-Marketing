import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import Shield from "../../Illustrations/Shield";

const Skeletonthree = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <Shield />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-70% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-400"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
};

export default Skeletonthree;
