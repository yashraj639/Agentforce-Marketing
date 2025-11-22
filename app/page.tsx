import FeaturesSecondary from "./components/features-secondary/features-secondary";
import Features from "./components/features";
import Hero from "./components/hero";
import LogoCloud from "./components/logo-cloud";
import Speed from "./components/speed";
import Outcomes from "./components/outcomes/outcomes";
import FeaturesThird from "./components/features-third/features-third";
import Pricing from "./components/pricing";
import Faq from "./components/faq";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <LogoCloud/>
      <Features/>
      <Speed/>
      <FeaturesSecondary/>
      <Outcomes/>
      <FeaturesThird/>
      <Pricing/>
      <Faq/>
    </div>
  );
}
