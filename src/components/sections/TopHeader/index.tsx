"use client";

import { useEffect, useState } from "react";

export const TopHeader = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);

        if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="bg-transparent">
      <header
        className={`
                    fixed z-[100] top-0 inset-x-0 w-full
                    transition-all duration-300 ease-in-out
                    ${isScrolled ? "bg-white shadow-md" : "bg-blue-600/40"}
                    ${isHeaderVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                `}
      >
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8 list-none m-0 p-0">
                <li>
                  <a
                    href="#home"
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
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
                    className={` font-medium transition-colors ${
                      isScrolled
                        ? "text-gray-600 hover:text-blue-600"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    WHMCS
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right side - Action buttons */}
            <div className="flex items-center gap-3">
              <a
                href="/register"
                className="text-white text-sm font-semibold bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded transition-colors"
              >
                Register
              </a>
              <a
                href="/login"
                className={`text-sm font-semibold px-4 py-2 rounded border transition-colors ${
                  isScrolled
                    ? "text-gray-700 border-gray-300 hover:bg-gray-50"
                    : "text-white border-white/40 hover:bg-white/10"
                }`}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
