import { TopHeader } from "@/components/sections/TopHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/sections/Footer";

export const MainContent = () => {
    return (
        <div className="box-border caret-transparent flex flex-col min-h-[1000px]">
            <TopHeader />
            <HeroSection />
            <Footer />
        </div>
    );
};
