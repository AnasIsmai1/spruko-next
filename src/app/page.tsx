import { FloatingButtons } from "@/components/FloatingButton";
import { MainContent } from "@/components/sections/MainContent";
import { CookieConsent } from "@/components/CookiesButton";

export default function Home() {
    return (
        <body className="relative text-gray-500 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent flex flex-col justify-start tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] overflow-x-clip text-start indent-[0px] normal-case visible border-separate font-hind_siliguri">
            <FloatingButtons
                variant="switcher"
                href="#switcher-canvas"
                iconClass=""
            />
            <FloatingButtons variant="" href="#top" iconClass="" />
            <MainContent />
            <CookieConsent />
        </body>
    );
};

