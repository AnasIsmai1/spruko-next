export type FooterColumnProps = {
    type: "brand" | "links" | "newsletter";
    title?: string;
    logoUrl?: string;
    logoAlt?: string;
    description?: string;
    contactInfo?: {
        phone?: string;
        email?: string;
        address?: string;
    };
    socialLinks?: Array<{
        href: string;
        iconClass: string;
    }>;
    links?: Array<{
        href: string;
        text: string;
    }>;
    newsletterPlaceholder?: string;
    supportTitle?: string;
    supportLinks?: Array<{
        href: string;
        text: string;
    }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
    if (props.type === "brand") {
        return (
            <div className="box-border caret-transparent shrink-0 max-w-full w-full mb-6 px-3 md:w-3/12 md:mb-0">
                <a
                    href="index.html"
                    className="text-gray-500 box-border caret-transparent inline-block mb-4 hover:text-blue-700 hover:border-blue-700"
                >
                    <img
                        src={props.logoUrl}
                        alt={props.logoAlt}
                        className="box-border caret-transparent"
                    />
                </a>
                <p className="font-light box-border caret-transparent opacity-80 mb-6">
                    {props.description}
                </p>
                <ul className="box-border caret-transparent list-none pl-0">
                    {props.contactInfo?.phone && (
                        <li className="box-border caret-transparent text-left mb-2">
                            <a
                                href="register-domain.html"
                                className="text-sm box-border caret-transparent leading-[21px]"
                            >
                                <i className="text-lg italic box-border caret-transparent leading-[27px] mr-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                                {props.contactInfo.phone}
                            </a>
                        </li>
                    )}
                    {props.contactInfo?.email && (
                        <li className="box-border caret-transparent text-left mb-2">
                            <a
                                href="register-domain.html"
                                className="text-sm box-border caret-transparent leading-[21px]"
                            >
                                <i className="text-lg italic box-border caret-transparent leading-[27px] mr-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                                {props.contactInfo.email}
                            </a>
                        </li>
                    )}
                    {props.contactInfo?.address && (
                        <li className="box-border caret-transparent text-left">
                            <a
                                href="register-domain.html"
                                className="text-sm box-border caret-transparent leading-[21px]"
                            >
                                <i className="text-lg italic box-border caret-transparent leading-[27px] mr-4 before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                                {props.contactInfo.address}
                            </a>
                        </li>
                    )}
                </ul>
                <div className="items-center box-border caret-transparent flex mt-6">
                    {props.socialLinks?.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="text-white/90 text-xs font-medium items-center bg-sky-400 box-border caret-transparent flex shrink-0 h-[37px] justify-center leading-[18px] text-center align-middle w-[37px] mr-2 rounded-[50%] hover:text-white hover:border-blue-700"
                        >
                            <i
                                className={`italic box-border caret-transparent block leading-[0px] ${social.iconClass} before:accent-auto before:box-border before:caret-transparent before:text-white/90 before:inline-block before:text-xs before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-3 before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons`}
                            ></i>
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    if (props.type === "links") {
        return (
            <div className="box-border caret-transparent shrink-0 max-w-full w-full mb-6 px-3 md:w-3/12 md:mb-0">
                <h4 className="text-[21.525px] font-semibold box-border caret-transparent leading-[25.83px] mb-2 font-urbanist md:text-2xl md:leading-[28.8px]">
                    {props.title}
                </h4>
                <ul className="box-border caret-transparent list-none mb-4 pl-0">
                    {props.links?.map((link, index) => (
                        <li
                            key={index}
                            className="box-border caret-transparent text-left mb-2 before:accent-auto before:bg-white/10 before:box-border before:caret-transparent before:text-white before:inline-block before:text-[8px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[8px] before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:mr-1.5 before:p-1 before:rounded-[50%] before:border-separate before:font-bootstrap_icons"
                        >
                            <a
                                href={link.href}
                                className="text-sm box-border caret-transparent leading-[21px]"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (props.type === "newsletter") {
        return (
            <div className="box-border caret-transparent shrink-0 max-w-full w-full mb-6 px-3 md:w-3/12 md:mb-0">
                <h4 className="text-[21.525px] font-semibold box-border caret-transparent leading-[25.83px] mb-2 font-urbanist md:text-2xl md:leading-[28.8px]">
                    {props.title}
                </h4>
                <form className="box-border caret-transparent mb-6">
                    <div className="relative items-center box-border caret-transparent flex">
                        <input
                            type="text"
                            placeholder={props.newsletterPlaceholder}
                            className="text-gray-500 text-sm bg-clip-padding box-border caret-transparent block leading-[31.5px] w-full pl-5 pr-[60px] py-1.5 rounded-[800px]"
                        />
                        <button
                            type="button"
                            className="absolute text-[13.6px] font-medium items-center bg-transparent bg-[linear-gradient(to_right,rgb(20,87,230)_0%,rgb(38,143,230)_100%)] caret-transparent flex shrink-0 h-[37px] justify-center leading-[20.4px] text-center align-middle w-[37px] mr-1 p-2 rounded-[50%] right-0 hover:bg-blue-700/80"
                        >
                            <i className="text-base font-normal box-border caret-transparent block leading-[17.6px] font-feather before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[17.6px] before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-feather"></i>
                        </button>
                    </div>
                </form>
                <h4 className="text-[21.525px] font-semibold box-border caret-transparent leading-[25.83px] mb-2 font-urbanist md:text-2xl md:leading-[28.8px]">
                    {props.supportTitle}
                </h4>
                <ul className="box-border caret-transparent list-none mb-4 pl-0">
                    {props.supportLinks?.map((link, index) => (
                        <li
                            key={index}
                            className="box-border caret-transparent text-left mb-2 before:accent-auto before:bg-white/10 before:box-border before:caret-transparent before:text-white before:inline-block before:text-[8px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[8px] before:list-outside before:list-none before:text-left before:indent-[0px] before:normal-case before:visible before:mr-1.5 before:p-1 before:rounded-[50%] before:border-separate before:font-bootstrap_icons"
                        >
                            <a
                                href={link.href}
                                className="text-sm box-border caret-transparent leading-[21px]"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return null;
};
