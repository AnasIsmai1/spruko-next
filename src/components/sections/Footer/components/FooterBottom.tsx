export type FooterBottomProps = {
    variant: string;
    paymentsTitle?: string;
    paymentIcons?: Array<{
        src: string;
        alt: string;
    }>;
    morePaymentsLink?: string;
    morePaymentsText?: string;
    links?: Array<{
        href: string;
        text: string;
    }>;
    copyrightYear?: string;
    companyName?: string;
    companyLink?: string;
    designerName?: string;
    designerLink?: string;
};

export const FooterBottom = (props: FooterBottomProps) => {
    if (props.variant === "payments") {
        return (
            <div className="box-border caret-transparent py-4 border-t border-white/20">
                <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                    <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[58.3333%]">
                            <div className="items-center box-border caret-transparent block md:flex">
                                <p className="box-border caret-transparent min-h-0 min-w-0 mr-4 md:min-h-[auto] md:min-w-[auto]">
                                    {props.paymentsTitle || "Payments We Accept:"}
                                </p>
                                <div className="box-border flex gap-2 items-center caret-transparent min-h-0 min-w-0 mt-4 md:min-h-[auto] md:min-w-[auto] md:mt-0">
                                    {props.paymentIcons?.map((icon, index) => (
                                        <img
                                            key={index}
                                            src={icon.src}
                                            alt={icon.alt}
                                            className="bg-white/10 box-border caret-transparent h-[50px] w-20 mr-2 mb-2 rounded-[5px] md:mb-0"
                                        />
                                    ))}
                                    <a
                                        href={props.morePaymentsLink || "payment-options.html"}
                                        className="box-border caret-transparent"
                                    >
                                        <i className="box-border caret-transparent inline-block leading-4 mr-1 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
                                        {props.morePaymentsText || "And more"}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[41.6667%]">
                            <ul className="box-border caret-transparent block justify-normal list-none mt-4 pl-0 md:flex md:justify-end md:mt-0">
                                {props.links?.map((link, index) => (
                                    <li
                                        key={index}
                                        className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]"
                                    >
                                        <a
                                            href={link.href}
                                            className={`text-sm box-border caret-transparent leading-[21px] opacity-80 px-4 border-r-0 border-white/20 ${index < (props.links?.length || 0) - 1 ? "md:border-r" : ""}`}
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="box-border caret-transparent py-4 border-t border-white/20 text-center">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <span className="text-sm box-border caret-transparent leading-[21px] opacity-80">
                    {" "}
                    Copyright ©{" "}
                    <span className="box-border caret-transparent">
                        {props.copyrightYear || "2025"}
                    </span>
                    <a
                        href={props.companyLink || "index.html"}
                        className="box-border caret-transparent"
                    >
                        {props.companyName || "Hostma."}
                    </a>{" "}
                    Designed with{" "}
                    <span className="text-red-400 font-black box-border caret-transparent inline-block leading-[14px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-red-400 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></span>{" "}
                    by{" "}
                    <a
                        href={props.designerLink || "https://spruko.com/"}
                        className="box-border caret-transparent"
                    >
                        {props.designerName || "Spruko"}
                    </a>{" "}
                    All Rights Reserved{" "}
                </span>
            </div>
        </div>
    );
};
