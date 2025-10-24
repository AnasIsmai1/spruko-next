import { ServiceCard } from "@/components/sections/ServicesSection/components/ServiceCard";
import {
    Gem,
    Network
} from 'lucide-react'
import {
    RiComputerLine,
    RiShieldKeyholeLine
} from 'react-icons/ri';

export const ServicesSection = () => {
    return (
        <section className="relative box-border caret-transparent overflow-hidden py-[70px]">
            <img
                src="../assets/images/patterns/2.png"
                alt="img"
                className="absolute box-border caret-transparent h-[200px] opacity-10 w-[200px] z-0 right-0 top-[14%]"
            />
            <img
                src="../assets/images/patterns/7.png"
                alt="img"
                className="absolute bottom-[-7%] box-border caret-transparent h-[200px] left-[-3%] opacity-30 scale-x-[-1px] scale-y-[-1px] w-[200px] z-0"
            />
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1300px]">
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full text-center w-full mb-12 px-3">
                        <div className="relative box-border caret-transparent inline-block mb-2 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:left-[-30px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-5 before:border-separate before:top-2/4 before:font-hind_siliguri after:accent-auto after:bg-orange-500 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:right-[-30px] after:text-center after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:top-2/4 after:font-hind_siliguri">
                            <span className="text-blue-700 font-semibold box-border caret-transparent">
                                Services
                            </span>
                        </div>
                        <div className="text-slate-900 text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                            Best Services You{" "}
                            <span className="text-blue-700 box-border caret-transparent">
                                Get
                            </span>
                        </div>
                        <div className="box-border caret-transparent opacity-80">
                            Domain &amp; Hosting Services
                        </div>
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12 flex">
                        <ServiceCard
                            title="Reliability"
                            description="Justo aliquyam duo vero clita aliquyam vero eirmod stet amet. Dolores est eos et est kasd, invidunt aliquyam no sadipscing."
                            iconVariant="bg-orange-500"
                            icon={<Gem size={30} />}
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12 flex">
                        <ServiceCard
                            title="Data Management"
                            description="Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam nemo enim."
                            iconVariant="bg-blue-700"
                            icon={<Network size={30} />}
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12 flex">
                        <ServiceCard
                            title="Data Recovery"
                            description="Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut."
                            iconVariant="bg-green-500"
                            icon={<RiComputerLine size={30} />}
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12 flex">
                        <ServiceCard
                            title="Top Notch Security"
                            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos."
                            iconVariant="bg-red-400"
                            icon={<RiShieldKeyholeLine size={30} />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
