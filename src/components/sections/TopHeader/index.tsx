"use client";

import { useEffect, useState } from "react";

export const TopHeader = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled past threshold (e.g., 50px)
            if (currentScrollY > 50) {
                setIsScrolled(true);

                // Hide header when scrolling down, show when scrolling up
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
        <div className="bg-transparent box-border caret-transparent h-auto">
            <header
                className={`
                    fixed box-border caret-transparent z-[100] top-0 inset-x-0 w-full
                    transition-all duration-300 ease-in-out
                    ${isScrolled ? 'bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_16px_0px]' : 'bg-blue-700'}
                    ${isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                `}
            >
                <div className="box-border caret-transparent">
                    <div className="items-center box-border caret-transparent flex h-[85px] justify-between max-w-[1140px] w-full mx-auto px-3">
                        {/* Left side - Logo and menu button */}
                        <div className="items-center box-border caret-transparent flex">
                            <div className="bg-white/10 box-border caret-transparent block border mr-3 px-2.5 py-[5px] rounded-[50px] border-solid border-white/10 md:hidden">
                                <a
                                    href="javascript:void(0);"
                                    className="box-border caret-transparent hover:text-blue-700 hover:border-blue-700"
                                >
                                    <span className="box-border caret-transparent">
                                        <i className={`text-xl italic box-border caret-transparent fill-current leading-[30px] ${isScrolled ? 'text-blue-700' : 'text-white'}`}></i>
                                    </span>
                                </a>
                            </div>
                            <a
                                href="index.html"
                                className="box-border caret-transparent block hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="../assets/images/brand/logo-white.png"
                                    alt="Logo"
                                    className={`box-border caret-transparent h-10 ${isScrolled ? 'hidden' : 'block'}`}
                                />
                                <img
                                    src="../assets/images/brand/logo-color.png"
                                    alt="Logo"
                                    className={`box-border caret-transparent h-10 ${isScrolled ? 'block' : 'hidden'}`}
                                />
                            </a>
                        </div>

                        {/* Center - Navigation */}
                        <nav className="hidden md:block">
                            <ul className="box-border caret-transparent flex list-none pl-0 gap-8">
                                <li className="box-border caret-transparent">
                                    <a
                                        href="#home"
                                        className={`text-base font-medium transition-colors ${isScrolled ? 'text-blue-700' : 'text-white hover:text-white/80'}`}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="box-border caret-transparent">
                                    <a
                                        href="#domains"
                                        className={`text-base font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white/80 hover:text-white'}`}
                                    >
                                        Domains
                                    </a>
                                </li>
                                <li className="box-border caret-transparent">
                                    <a
                                        href="#websites"
                                        className={`text-base font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white/80 hover:text-white'}`}
                                    >
                                        Websites
                                    </a>
                                </li>
                                <li className="box-border caret-transparent">
                                    <a
                                        href="#hosting"
                                        className={`text-base font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white/80 hover:text-white'}`}
                                    >
                                        Hosting
                                    </a>
                                </li>
                                <li className="box-border caret-transparent">
                                    <a
                                        href="#cloud"
                                        className={`text-base font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white/80 hover:text-white'}`}
                                    >
                                        Cloud
                                    </a>
                                </li>
                                <li className="box-border caret-transparent">
                                    <a
                                        href="#email"
                                        className={`text-base font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white/80 hover:text-white'}`}
                                    >
                                        Email & Productivity
                                    </a>
                                </li>
                                <li className="box-border caret-transparent">
                                    <a
                                        href="#security"
                                        className={`text-base font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white/80 hover:text-white'}`}
                                    >
                                        Security
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Right side - Action buttons */}
                        <div className="box-border caret-transparent flex gap-2">
                            <a
                                href="register.html"
                                className="text-white text-[13.6px] font-medium bg-orange-500 box-border caret-transparent leading-[20.4px] align-middle border border-orange-500 px-4 py-2 rounded-[4.8px] border-solid hover:bg-orange-600 transition-colors"
                            >
                                Register
                            </a>
                            <a
                                href="login.html"
                                className={`text-[13.6px] font-medium box-border caret-transparent leading-[20.4px] align-middle border px-4 py-2 rounded-[4.8px] border-solid transition-colors ${isScrolled
                                        ? 'text-gray-700 border-gray-300 hover:bg-gray-50'
                                        : 'text-white border-white/50 hover:bg-white/10'
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
