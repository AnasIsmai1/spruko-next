import { FooterContent } from "@/components/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/components/sections/Footer/components/FooterBottom";
import BubbleWhite from "@/assets/footer/6.png";
import SheetWhite from "@/assets/footer/4.png";

export const Footer = () => {
  return (
    <footer className="relative text-white bg-blue-700 shadow-[rgba(0,0,0,0.1)_0px_4px_16px_0px] box-border caret-transparent mt-auto">
      <img
        src="../assets/images/patterns/9.png"
        alt="img"
        className="absolute box-border caret-transparent h-[100px] opacity-30 top-[-11%] rotate-45 w-[100px] z-0 right-[32%]"
      />
      <img
        // src={SheetWhite.src}
        alt="img"
        className="absolute box-border caret-transparent h-20 opacity-50 w-20 z-0 left-[8%] top-[18%] opacity-0"
      />
      <img
        src={BubbleWhite.src}
        alt="img"
        className="absolute box-border caret-transparent h-20 opacity-15 w-20 z-0 left-[8%] top-[18%]"
      />
      <FooterContent />
      <FooterBottom
        variant="payments"
        paymentsTitle="Payments We Accept :"
        paymentIcons={[
          {
            src: "https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-8.svg",
            alt: "Icon",
          },
          {
            src: "https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-9.svg",
            alt: "Icon",
          },
          {
            src: "https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-10.svg",
            alt: "Icon",
          },
          {
            src: "https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-11.svg",
            alt: "Icon",
          },
        ]}
        morePaymentsLink="payment-options.html"
        morePaymentsText="And more"
        links={[
          { href: "terms-of-service.html", text: "Terms of Service" },
          { href: "privacy-policy.html", text: "Privacy Policy" },
          { href: "legal.html", text: "Legal" },
        ]}
      />
      <FooterBottom
        variant=""
        copyrightYear="2025"
        companyName=" Hostma."
        companyLink="index.html"
        designerName="Spruko"
        designerLink="https://spruko.com/"
      />
    </footer>
  );
};
