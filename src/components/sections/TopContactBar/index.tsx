export const TopContactBar = () => {
    return (
        <div className="bg-blue-600 py-4 text-base">
            <div className="max-w-[1300px] mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Left side - Support and Email */}
                    <div className="flex items-center gap-8">
                        {/* 24x7 Technical Support */}
                        <div className="flex items-center gap-2 text-white/90">
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" 
                                />
                            </svg>
                            <span>24x7 Technical Support</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2 text-white/90">
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                />
                            </svg>
                            <span>john@gmail.com</span>
                        </div>
                    </div>

                    {/* Right side - Help and Contact */}
                    <div className="flex items-center gap-6">
                        {/* Help */}
                        <a 
                            href="#help" 
                            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                        >
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                />
                            </svg>
                            <span>Help</span>
                        </a>

                        {/* Contact */}
                        <a 
                            href="#contact" 
                            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                        >
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                                />
                            </svg>
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
