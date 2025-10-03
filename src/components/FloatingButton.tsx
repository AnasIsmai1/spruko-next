export type FloatingButtonsProps = {
    variant: string;
    href: string;
    iconClass: string;
};

export const FloatingButtons = (props: FloatingButtonsProps) => {
    if (props.variant === "switcher") {
        return (
            <div className="box-border caret-transparent">
                <a
                    role="button"
                    href={props.href}
                    className="fixed text-white bg-black box-border caret-transparent block h-[45px] leading-[48px] text-center w-[45px] z-[99] rounded-l-[4.8px] right-0 top-80"
                >
                    <i
                        className={`font-black box-border caret-transparent inline-block leading-4 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free ${props.iconClass}`}
                    ></i>
                </a>
            </div>
        );
    }

    return (
        <a
            href={props.href}
            className="fixed text-white items-center bg-orange-500 shadow-[rgba(0,0,0,0.15)_0px_8px_16px_0px] box-border caret-transparent hidden h-[50px] justify-center w-[50px] z-[99] border-orange-500 rounded-[50%] border-2 border-solid right-[36.8px] bottom-32 hover:text-orange-500 hover:bg-white"
        >
            <i
                className={`box-border caret-transparent inline-block leading-[17.6px] font-feather before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[17.6px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-feather ${props.iconClass}`}
            ></i>
        </a>
    );
};
