import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofStrip } from "@/components/sections/SocialProofStrip";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { RentStabilityBanner } from "@/components/sections/RentStabilityBanner";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BuyHomeCTA } from "@/components/sections/BuyHomeCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <FeaturesGrid />
      <RentStabilityBanner />
      <TestimonialsSection />
      <BuyHomeCTA />
    </>
  );
}
