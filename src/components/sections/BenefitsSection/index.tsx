export const BenefitsSection = () => {
    return (
        <section className="relative box-border caret-transparent py-[70px]">
            <img
                src="../assets/images/patterns/12.png"
                alt="img"
                className="absolute box-border caret-transparent opacity-10 -rotate-90 w-40 z-0 right-0 bottom-[0%]"
            />
            <img
                src="../assets/images/patterns/11.png"
                alt="img"
                className="absolute box-border caret-transparent h-20 opacity-15 w-20 z-0 left-[8%] top-[18%]"
            />
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center mb-12">
                    <div className="relative box-border caret-transparent inline-block mb-2 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:left-[-30px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-5 before:border-separate before:top-2/4 before:font-hind_siliguri after:accent-auto after:bg-orange-500 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:right-[-30px] after:text-center after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:top-2/4 after:font-hind_siliguri">
                        <span className="text-blue-700 font-semibold box-border caret-transparent">
                            Benefits
                        </span>
                    </div>
                    <div className="text-slate-900 text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                        Free Add-Ons With Every{" "}
                        <span className="text-blue-700 box-border caret-transparent">
                            Domain Name
                        </span>
                    </div>
                    <div className="box-border caret-transparent opacity-80">
                        Checkout Add-On Benefits
                    </div>
                </div>
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]"></div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]"></div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]"></div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]"></div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]"></div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]"></div>
                </div>
            </div>
        </section>
    );
};
