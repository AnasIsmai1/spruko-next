import { TestimonialSlider } from "@/components/sections/TestimonialsSection/components/TestimonialSlider";

export const TestimonialsSection = () => {
    return (
        <section className="relative box-border caret-transparent overflow-hidden py-[70px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1300px]">
                <div className="box-border caret-transparent text-center mb-12">
                    <div className="relative box-border caret-transparent inline-block mb-2 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:left-[-30px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-5 before:border-separate before:top-2/4 before:font-hind_siliguri after:accent-auto after:bg-orange-500 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:right-[-30px] after:text-center after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:top-2/4 after:font-hind_siliguri">
                        <span className="text-blue-700 font-semibold box-border caret-transparent">
                            Reviews
                        </span>
                    </div>
                    <div className="text-slate-900 text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                        What Do People Say{" "}
                        <span className="text-blue-700 box-border caret-transparent">
                            About Us
                        </span>
                    </div>
                    <div className="box-border caret-transparent opacity-80">
                        Client Reviews
                    </div>
                </div>
                <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="relative box-border caret-transparent shrink-0 max-w-full text-center w-full px-3 md:text-left md:w-3/12 before:accent-auto before:bg-[linear-gradient(to_right,rgba(20,87,230,0.1)_0%,rgba(0,0,0,0)_100%)] before:bottom-[-5%] before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[200px] before:left-[-17%] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-[200px] before:z-0 before:rounded-[50%] before:border-separate before:font-hind_siliguri before:md:text-left">
                        <span className="box-border caret-transparent text-center md:text-left">
                            <i className="text-orange-500 text-5xl italic box-border caret-transparent leading-[72px] text-center md:text-left before:accent-auto before:box-border before:caret-transparent before:text-orange-500 before:inline-block before:text-5xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[48px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons before:md:text-left"></i>
                        </span>
                        <p className="text-slate-900 text-[23.05px] font-semibold box-border caret-transparent leading-[27.66px] text-center mb-12 font-urbanist md:text-[28px] md:leading-[33.6px] md:text-left">
                            Clients Say About Us
                        </p>
                        <div className="absolute box-border caret-transparent text-center w-full z-10 left-0 bottom-2.5">
                            <span
                                role="button"
                                aria-label="Go to slide 1"
                                className="bg-transparent box-content caret-black inline h-auto opacity-100 w-auto mx-0 rounded-none md:aspect-auto md:bg-black md:box-border md:caret-transparent md:inline-block md:h-2 md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:mx-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                            ></span>
                            <span
                                role="button"
                                aria-label="Go to slide 2"
                                className="bg-transparent box-content caret-black inline h-auto opacity-100 w-auto mx-0 rounded-none md:aspect-auto md:bg-black md:box-border md:caret-transparent md:inline-block md:h-2 md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:mx-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                            ></span>
                            <span
                                role="button"
                                aria-label="Go to slide 3"
                                className="bg-transparent box-content caret-black inline h-auto w-auto mx-0 rounded-none md:aspect-auto md:bg-blue-600 md:box-border md:caret-transparent md:inline-block md:h-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:mx-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                            ></span>
                            <span
                                role="button"
                                aria-label="Go to slide 4"
                                className="bg-transparent box-content caret-black inline h-auto opacity-100 w-auto mx-0 rounded-none md:aspect-auto md:bg-black md:box-border md:caret-transparent md:inline-block md:h-2 md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:mx-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                            ></span>
                            <span
                                role="button"
                                aria-label="Go to slide 5"
                                className="bg-transparent box-content caret-black inline h-auto opacity-100 w-auto mx-0 rounded-none md:aspect-auto md:bg-black md:box-border md:caret-transparent md:inline-block md:h-2 md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:mx-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                            ></span>
                            <span
                                role="button"
                                aria-label="Go to slide 6"
                                className="bg-transparent box-content caret-black inline h-auto opacity-100 w-auto mx-0 rounded-none md:aspect-auto md:bg-black md:box-border md:caret-transparent md:inline-block md:h-2 md:opacity-20 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:mx-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"
                            ></span>
                        </div>
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-9/12">
                        <div className="relative box-border caret-transparent py-[50px] before:accent-auto before:bg-[url('https://demo.spruko.com/html/bootstrap/hostma/dist/assets/images/backgrounds/16.jpg')] before:bg-center before:bg-no-repeat before:bg-cover before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-[0.065] before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:rounded-[5px] before:border-separate before:left-[6%] before:top-0 before:font-hind_siliguri">
                            <img
                                src="../assets/images/patterns/9.png"
                                alt="img"
                                className="absolute box-border caret-transparent invert-[1] h-[100px] left-[-6%] opacity-20 w-[100px] z-0 top-0"
                            />
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
