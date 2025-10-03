import { StatCard } from "@/components/sections/StatsSection/components/StatCard";

export const StatsSection = () => {
    return (
        <section className="relative bg-blue-700 box-border caret-transparent z-[1] py-[70px] before:accent-auto before:bg-[url('https://demo.spruko.com/html/bootstrap/hostma/dist/assets/images/backgrounds/8.jpg')] before:bg-center before:bg-no-repeat before:bg-cover before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-[0.06] before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-hind_siliguri">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1400px]">
                <div className="box-border caret-transparent text-center mb-12">
                    <div className="text-white text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                        Why Choose Us?
                    </div>
                    <div className="text-white box-border caret-transparent opacity-80">
                        Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    </div>
                </div>
                <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                        <StatCard
                            iconSrc="https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-4.svg"
                            title="Domain Registered"
                            value="36"
                            cardVariant="before:bg-blue-700 after:bg-blue-700"
                            iconVariant="bg-blue-700/20"
                            valueVariant="text-blue-700"
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                        <StatCard
                            iconSrc="https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-5.svg"
                            title="Resellers"
                            value="25"
                            cardVariant="before:bg-orange-500 after:bg-orange-500"
                            iconVariant="bg-orange-500/20"
                            valueVariant="text-orange-500"
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                        <StatCard
                            iconSrc="https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-6.svg"
                            title="Total Clients"
                            value="500"
                            cardVariant="before:bg-green-500 after:bg-green-500"
                            iconVariant="bg-green-500/20"
                            valueVariant="text-green-500"
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                        <StatCard
                            iconSrc="https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-7.svg"
                            title="Happy Customers"
                            value="200"
                            cardVariant="before:bg-red-400 after:bg-red-400"
                            iconVariant="bg-red-400/20"
                            valueVariant="text-red-400"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
