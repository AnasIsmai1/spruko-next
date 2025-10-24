"use client";

import React, { useState } from "react";
import { Heart, Plus } from "lucide-react";

export type FooterBottomProps = {
  variant: string;
  paymentsTitle?: string;
  paymentIcons?: Array<{
    src: string;
    alt: string;
  }>;
  morePaymentsLink?: string;
  morePaymentsText?: string;
  links?: Array<{
    href: string;
    text: string;
  }>;
  copyrightYear?: string;
  companyName?: string;
  companyLink?: string;
  designerName?: string;
  designerLink?: string;
};

export const FooterBottom = (props: FooterBottomProps) => {
  // Easter-egg state: click the heart 3 times to reveal the secret
  const [heartClicks, setHeartClicks] = useState(0);
  const [secretVisible, setSecretVisible] = useState(false);

  const handleHeartClick = () => {
    const next = heartClicks + 1;
    setHeartClicks(next);
    if (next >= 3) {
      setSecretVisible((v) => !v);
      setHeartClicks(0);
    }
  };

  if (props.variant === "payments") {
    return (
      <div className="box-border caret-transparent py-6 border-t border-white/10 bg-gradient-to-b from-transparent to-white/2">
        <div className="box-border max-w-none w-full mx-auto px-4 md:max-w-[1300px]">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="shrink-0 w-full px-3 md:w-7/12">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <p className="text-sm opacity-90 font-medium">
                  {props.paymentsTitle || "Payments We Accept:"}
                </p>

                <div
                  className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1"
                  role="list"
                  aria-label={props.paymentsTitle || "Accepted payment methods"}
                >
                  {props.paymentIcons?.map((icon, index) => (
                    <img
                      key={index}
                      src={icon.src}
                      alt={icon.alt}
                      className="h-[44px] w-[80px] flex-shrink-0 rounded-md bg-white/5 p-1 object-contain shadow-sm hover:scale-105 transition-transform"
                    />
                  ))}

                  <a
                    href={props.morePaymentsLink || "payment-options.html"}
                    className="inline-flex items-center gap-2 text-sm opacity-90 px-3 py-2 rounded-md border border-white/6 hover:bg-white/3 transition-colors"
                    aria-label="More payment options"
                  >
                    <Plus size={16} />
                    <span>{props.morePaymentsText || "And more"}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full px-3 md:w-5/12">
              <ul className="flex flex-wrap justify-end gap-2 list-none p-0 m-0">
                {props.links?.map((link, index) => (
                  <li key={index} className="text-left">
                    <a
                      href={link.href}
                      className={`text-sm opacity-80 px-3 py-2 rounded-md hover:bg-white/3 transition-colors ${index < (props.links?.length || 0) - 1 ? "md:mr-2" : ""}`}
                      aria-label={link.text}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border py-6 border-t border-white/10 text-center">
      <div className="max-w-none w-full mx-auto px-4 md:max-w-[1140px]">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="text-sm opacity-80">
            <span className="sr-only">Copyright</span>
            ©{" "}
            <span className="font-medium">
              {props.copyrightYear || "2025"}
            </span>{" "}
            <a
              href={props.companyLink || "/"}
              className="ml-1 font-medium hover:underline"
            >
              {props.companyName || "Hostma."}
            </a>
            <span className="mx-2">•</span>
            <span className="mr-1">All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm opacity-80 flex items-center gap-2">
              Designed with
              <button
                type="button"
                aria-pressed={secretVisible}
                aria-label="Toggle designer heart secret"
                onClick={handleHeartClick}
                className="inline-flex items-center justify-center p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white/30"
                title="Click 3 times for a secret"
              >
                <Heart
                  size={18}
                  className={`text-red-400 ${secretVisible ? "animate-pulse" : ""}`}
                />
              </button>
              by{" "}
              <a
                href={props.designerLink || "https://spruko.com/"}
                className="ml-1 font-medium hover:underline"
              >
                {props.designerName || "Spruko"}
              </a>
            </span>

            {/* Visual easter-egg */}
            <div
              className={`text-sm ml-2 transition-opacity ${secretVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              aria-hidden={!secretVisible}
            >
              <span className="inline-flex items-center gap-2 text-yellow-300">
                🎉 <span className="font-semibold">Pssst — you found the secret!</span> 🎉
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
