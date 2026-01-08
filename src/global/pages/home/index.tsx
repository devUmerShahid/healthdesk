import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import SecurityCompliance from "./components/SecurityCompliance";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <Testimonials />          {/* Social Proof / Early Testimonials */}
      <PainPoints />
      <Features />
      <HowItWorks />
      <Pricing />
      <SecurityCompliance />
      <CTA />
    </div>
  );
}