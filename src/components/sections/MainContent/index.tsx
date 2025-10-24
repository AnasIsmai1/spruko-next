import { TopHeader } from "@/components/sections/TopHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/sections/Footer";
import { SupportSection } from "../SupportSection";
import { StatsSection } from "../StatsSection";
import { BlogSection } from "../BlogSection";
import { DomainSection } from "../DomainSection";
import { BenefitsSection } from "../BenefitsSection";
import { FeaturesSection } from "../FeaturesSection";
import { ServicesSection } from "../ServicesSection";
import { TestimonialsSection } from "../TestimonialsSection";
import { WebsiteBuilder } from "../WebsiteBuilder";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[1000px]">
      <TopHeader />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <WebsiteBuilder />
      <DomainSection />
      <BenefitsSection />
      <StatsSection />
      <BlogSection />
      <SupportSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};
