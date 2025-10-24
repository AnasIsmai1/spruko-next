import HeroImage from "@/assets/hero/1.png";
import Patterns from "@/assets/hero/6.png";
import Blue from "@/assets/hero/4.png";
import Bubble from "@/assets/hero/2.png";
import Bars from "@/assets/hero/10.png";

export const HeroSection = () => {
  return (
    <div className="box-border caret-transparent pt-[60px] md:pt-0">
      <section className="relative text-white bg-[url('https://demo.spruko.com/html/bootstrap/hostma/dist/assets/images/backgrounds/2.jpg')] bg-no-repeat bg-cover box-border caret-transparent h-full w-full z-[1] bg-center py-16 md:pt-28 before:accent-auto before:bg-[linear-gradient(rgb(20,87,230)_0%,rgba(20,87,230,0.8)_100%)] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-90 before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-hind_siliguri">
        <img
          src={Bubble.src}
          alt="img"
          className="absolute box-border caret-transparent h-[200px] opacity-20 top-[-3px] -rotate-90 w-[200px] z-[-1] right-0"
        />
        <img
          src={Blue.src}
          alt="img"
          className="absolute box-border caret-transparent h-20 opacity-15 w-20 z-[-1] left-[8%] top-[18%]"
        />
        <img
          src={Patterns.src}
          alt="img"
          className="absolute box-border caret-transparent h-20 opacity-50 w-20 z-[-1] left-[8%] top-[18%]"
        />
        <img
          src={Patterns.src}
          alt="img"
          className="absolute box-border caret-transparent h-[200px] opacity-20 top-[-7%] w-[200px] z-[-1] right-0"
        />
        <img
          src={Bars.src}
          alt="img"
          className="absolute box-border caret-transparent opacity-20 w-40 z-[-1] left-[0%] bottom-[0%]"
        />
        <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1300px]">
          <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[58.3333%]">
              <div className="box-border caret-transparent mb-12">
                <p className="text-[40px] font-semibold box-border caret-transparent leading-[52px] mb-4 font-urbanist md:text-[50px] md:leading-[65px]">
                  Trusted Web Hosting Site For Your{" "}
                  <span className="relative text-sky-300 text-[40px] box-border caret-transparent leading-[52px] md:text-[50px] md:leading-[65px]">
                    Website.
                    <span className="absolute text-[40px] bg-[linear-gradient(to_right,rgb(133,202,255)_0%,rgba(0,0,0,0)_100%)] bottom-[-10%] box-border caret-transparent block h-[5px] leading-[52px] rotate-[-3.999999319017103deg] w-[200px] rounded-[20%] scale-x-[1.0024418972480351] scale-y-[1.009863998744177] left-0 md:text-[50px] md:leading-[65px]"></span>
                  </span>
                </p>
                <p className="text-[18.64px] box-border caret-transparent leading-[27.96px] mb-4">
                  Dedicated resources, full root access &amp; easy scaling. It
                  is the virtual private server you&#39;ve been cravin&#39;
                </p>
              </div>
              <a
                href="#domain"
                className="font-medium bg-orange-500 box-border caret-transparent inline-block text-center align-middle border border-orange-500 mr-2 mb-2 px-[19.2px] py-[11.04px] rounded-[4.8px] border-solid md:mb-0"
              >
                <i className="italic box-border caret-transparent mr-2 before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                Get Started
              </a>
              <a
                href="contact-us.html"
                className="text-slate-600 font-medium bg-white box-border caret-transparent inline-block text-center align-middle border mb-2 px-[19.2px] py-[11.04px] rounded-[4.8px] border-solid border-white md:mb-0 hover:text-gray-700"
              >
                <i className="italic box-border caret-transparent mr-2 before:accent-auto before:box-border before:caret-transparent before:text-slate-600 before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                Contact Us
              </a>
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[41.6667%]">
              <div className="box-border caret-transparent text-center mt-6 md:text-right md:mt-0 flex justify-end">
                <img
                  src={HeroImage.src}
                  alt="img"
                  className="box-border caret-transparent max-w-full text-center md:text-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
