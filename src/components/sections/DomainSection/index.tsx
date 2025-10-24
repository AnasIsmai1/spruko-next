import { DomainSearchForm } from "@/components/sections/DomainSection/components/DomainSearchForm";
import { DomainPriceCard } from "@/components/sections/DomainSection/components/DomainPriceCard";

export const DomainSection = () => {
    return (
        <section className="relative bg-gray-50 box-border caret-transparent z-[1] py-[70px] before:accent-auto before:bg-fixed before:bg-[url('https://demo.spruko.com/html/bootstrap/hostma/dist/assets/images/patterns/28.jpg')] before:bg-center before:bg-no-repeat before:bg-cover before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-5 before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-hind_siliguri">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1300px]">
                <div className="box-border caret-transparent flex flex-wrap justify-center text-center -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full mb-12 px-3">
                        <div className="text-slate-900 text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                            Looking For a{" "}
                            <span className="text-blue-700 box-border caret-transparent">
                                Domain?
                            </span>
                        </div>
                        <div className="box-border caret-transparent opacity-80">
                            Invidunt erat elitr ut accusam amet ipsum lorem
                        </div>
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-9/12">
                        <div className="box-border caret-transparent grow p-6">
                            <img
                                src="../assets/images/patterns/7.png"
                                alt="img"
                                className="absolute box-border caret-transparent h-[200px] opacity-10 w-[200px] z-[-1] right-0 top-0"
                            />
                            <img
                                src="../assets/images/patterns/24.png"
                                alt="img"
                                className="absolute box-border caret-transparent opacity-10 -rotate-90 w-40 z-[1] right-0 bottom-[0%]"
                            />
                            <img
                                src="../assets/images/patterns/24.png"
                                alt="img"
                                className="absolute box-border caret-transparent h-20 opacity-10 w-20 z-[1] left-[11%] top-[18%]"
                            />
                            <DomainSearchForm />
                            <div className="box-border caret-transparent flex flex-wrap justify-center -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[16.6667%]">
                                    <DomainPriceCard
                                        domain=".com"
                                        price="1,131"
                                        domainColor="text-white"
                                        cardVariant="bg-[linear-gradient(to_right,rgb(20,87,230)_0%,rgb(38,143,230)_100%)] text-white"
                                    />
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[16.6667%]">
                                    <DomainPriceCard
                                        domain=".biz"
                                        price="1,131"
                                        domainColor="text-blue-700"
                                        cardVariant="bg-white hover:bg-[#1447E6]"
                                    />
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[16.6667%]">
                                    <DomainPriceCard
                                        domain=".net"
                                        price="1,844"
                                        domainColor="text-green-500"
                                        cardVariant="bg-white hover:bg-[#1447E6]"
                                        showNewBadge={true}
                                    />
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[16.6667%]">
                                    <DomainPriceCard
                                        domain=".in"
                                        price="686"
                                        domainColor="text-orange-500"
                                        cardVariant="bg-white hover:bg-[#1447E6]"
                                    />
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[16.6667%]">
                                    <DomainPriceCard
                                        domain=".org"
                                        price="1,479"
                                        domainColor="text-sky-400"
                                        cardVariant="bg-white hover:bg-[#1447E6]"
                                        showNewBadge={true}
                                    />
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[16.6667%]">
                                    <DomainPriceCard
                                        domain=".online"
                                        price="1,479"
                                        domainColor="text-red-400"
                                        cardVariant="bg-white hover:bg-[#1447E6]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
