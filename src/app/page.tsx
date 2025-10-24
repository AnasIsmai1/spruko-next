import { FloatingButtons } from "@/components/FloatingButton";
import { MainContent } from "@/components/sections/MainContent";
import { CookieConsent } from "@/components/CookiesButton";
import { TopInfoBar } from "@/components/sections/TopInfoBar";
import { TopContactBar } from "@/components/sections/TopContactBar";

export default function Home() {
  return (
    <div className="relative text-gray-500 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent flex flex-col justify-start tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] overflow-x-clip text-start indent-[0px] normal-case visible border-separate font-hind_siliguri">
      <FloatingButtons variant="" href="#top" iconClass="" />
      <TopContactBar />
      <TopInfoBar />
      <MainContent />
      <CookieConsent />
    </div>
  );
}
