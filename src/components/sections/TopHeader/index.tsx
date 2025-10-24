"use client";

import { useEffect, useState } from "react";

export const TopHeader = () => {
  const [isFixedHeaderVisible, setIsFixedHeaderVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show fixed header after scrolling past 100px
      if (currentScrollY > 100) {
        setIsFixedHeaderVisible(true);
      } else {
        setIsFixedHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const NavigationLinks = ({ isScrolled }: { isScrolled: boolean }) => (
    <ul className="flex items-center gap-8 list-none m-0 p-0">
      <li>
        <a
          href="#home"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-900 hover:text-blue-600"
              : "text-white hover:text-white/80"
          }`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#domains"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          Domains
        </a>
      </li>
      <li>
        <a
          href="#websites"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          Websites
        </a>
      </li>
      <li>
        <a
          href="#hosting"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          Hosting
        </a>
      </li>
      <li>
        <a
          href="#cloud"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          Cloud
        </a>
      </li>
      <li>
        <a
          href="#email"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          Email & Productivity
        </a>
      </li>
      <li>
        <a
          href="#security"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          Security
        </a>
      </li>
      <li>
        <a
          href="#pages"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          Pages
        </a>
      </li>
      <li>
        <a
          href="#whmcs"
          className={`text-sm font-medium transition-colors ${
            isScrolled
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          }`}
        >
          WHMCS
        </a>
      </li>
    </ul>
  );

  const ActionButtons = ({ isScrolled }: { isScrolled: boolean }) => (
    <div className="flex items-center gap-3">
      <a
        href="/register"
        className="text-white text-sm font-semibold bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded transition-colors"
      >
        Register
      </a>
      <a
        href="/login"
        className={`text-sm font-semibold px-6 py-2.5 rounded border transition-colors ${
          isScrolled
            ? "text-gray-700 border-gray-300 hover:bg-gray-50"
            : "text-white border-white/40 hover:bg-white/10"
        }`}
      >
        Login
      </a>
    </div>
  );

  return (
    <>
      {/* Static Header - Scrolls with page */}
      <header className="relative z-50 w-full bg-[#2A65E4]">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left Side - Navigation */}
            <nav className="hidden lg:block">
              <NavigationLinks isScrolled={false} />
            </nav>

            {/* Right side - Action buttons */}
            <ActionButtons isScrolled={false} />
          </div>
        </div>
      </header>

      {/* Fixed Header - Appears on scroll */}
      <header
        className={`
          fixed z-[100] inset-x-0 top-0 w-full
          bg-white shadow-md
          transition-transform duration-300 ease-in-out
          ${isFixedHeaderVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <nav className="hidden lg:block">
              <NavigationLinks isScrolled={true} />
            </nav>

            <ActionButtons isScrolled={true} />
          </div>
        </div>
      </header>
    </>
  );
};
