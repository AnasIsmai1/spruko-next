import { FeatureCard } from "@/components/sections/FeaturesSection/components/FeatureCard";

export const FeaturesSection = () => {
    return (
        <section className="relative box-border caret-transparent z-[1] py-[70px] before:accent-auto before:bg-fixed before:bg-[url('https://demo.spruko.com/html/bootstrap/hostma/dist/assets/images/patterns/28.jpg')] before:bg-center before:bg-no-repeat before:bg-cover before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-5 before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-hind_siliguri">
            <img
                src="../assets/images/patterns/7.png"
                alt="img"
                className="absolute box-border caret-transparent h-[200px] opacity-10 w-[200px] z-[-1] right-0 top-0"
            />
            <img
                src="../assets/images/patterns/2.png"
                alt="img"
                className="absolute box-border caret-transparent h-[200px] opacity-10 rotate-90 w-[200px] z-[-1] -left-2.5 bottom-0"
            />
            <img
                src="../assets/images/patterns/9.png"
                alt="img"
                className="absolute box-border caret-transparent invert-[1] h-20 opacity-20 w-20 z-[-1] left-[14%] top-1/4"
            />
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center mb-12">
                    <div className="relative box-border caret-transparent inline-block mb-2 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:left-[-30px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-5 before:border-separate before:top-2/4 before:font-hind_siliguri after:accent-auto after:bg-orange-500 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:right-[-30px] after:text-center after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:top-2/4 after:font-hind_siliguri">
                        <span className="text-blue-700 font-semibold box-border caret-transparent">
                            Features
                        </span>
                    </div>
                    <div className="text-slate-900 text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                        Web Hosting{" "}
                        <span className="text-blue-700 box-border caret-transparent">
                            Plans
                        </span>
                    </div>
                    <div className="box-border caret-transparent opacity-80">
                        Choose Correct Plan For Your Business
                    </div>
                </div>
                <div className="box-border caret-transparent flex flex-wrap justify-center -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <FeatureCard
                            iconSrc="https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-1.svg"
                            title="Shared Hosting"
                            price="$8.99"
                            description="Magna dolore elitr ut et labore stet dolor tempor at ipsum, amet quis nostrum exercitationem."
                            href="linux-shared-hosting.html"
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <FeatureCard
                            iconSrc="https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-2.svg"
                            title="Multidomain Hosting"
                            price="$18.99"
                            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui quidem rerum facilis."
                            href="windows-shared-hosting.html"
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <FeatureCard
                            iconSrc="https://c.animaapp.com/mgaw9cwoEDF0Th/assets/icon-3.svg"
                            title="Cloud Hosting"
                            price="$28.99"
                            description="Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores rerum hic tenetur."
                            href="cloud.html"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
