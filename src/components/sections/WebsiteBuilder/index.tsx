import WebBuilder from "@/assets/website-builder/69.png";

export const WebsiteBuilder = () => {
  return (
    <section className="relative text-white bg-blue-700 box-border caret-transparent z-[1] overflow-hidden py-[50px] before:accent-auto before:bg-[url('https://demo.spruko.com/html/bootstrap/hostma/dist/assets/images/backgrounds/7.jpg')] before:bg-center before:bg-no-repeat before:bg-cover before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-[0.08] before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:top-0 before:font-hind_siliguri">
      <img
        src="../assets/images/patterns/18.png"
        alt="img"
        className="absolute box-border caret-transparent left-[-3%] opacity-10 scale-x-[-1px] scale-y-[-1px] w-[200px] z-[-1] bottom-0"
      />
      <img
        src="../assets/images/patterns/18.png"
        alt="img"
        className="absolute box-border caret-transparent opacity-10 w-[200px] z-[-1] right-0 inset-y-0"
      />
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1300px]">
        <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[58.3333%]">
            <div className="box-border caret-transparent text-left mb-6">
              <div className="text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                Building Website is Easy
              </div>
              <div className="box-border caret-transparent opacity-80">
                Get Website Builder, Plugins, Themes, Icons and more.
              </div>
            </div>
            <p className="box-border caret-transparent mb-4">
              Create your website instantly, no coding/design skills required.
              Choose over 100 themes or simply drag-and-drop to customize your
              design.
            </p>
            <a className="font-medium bg-orange-500 box-border caret-transparent inline-block text-center align-middle border border-orange-500 px-[19.2px] py-[11.04px] rounded-[4.8px] border-solid">
              Get Started
            </a>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[41.6667%]">
            <div className="box-border caret-transparent text-center mt-12 md:mt-0 flex justify-end">
              <img
                src={WebBuilder.src}
                alt="img"
                className="box-border caret-transparent max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
