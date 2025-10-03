
export type StatCardProps = {
    iconSrc: string;
    title: string;
    value: string;
    cardVariant: string;
    iconVariant: string;
    valueVariant: string;
};

export const StatCard = (props: StatCardProps) => {
    return (
        <div
            className={`relative text-neutral-800 bg-white shadow-[rgba(0,0,0,0.1)_0px_3px_10px_0px] box-border caret-transparent flex flex-col break-words text-center w-full z-[1] overflow-hidden mb-6 rounded-[10px] md:mb-0 before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-20 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-5 before:break-words before:absolute before:text-center before:indent-[0px] before:normal-case before:top-[-12%] before:visible before:w-20 before:z-[-1] before:rounded-[50%] before:border-separate before:right-0 before:font-hind_siliguri after:accent-auto after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-20 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:opacity-5 after:break-words after:absolute after:right-[-8%] after:text-center after:indent-[0px] after:normal-case after:visible after:w-20 after:z-[-1] after:rounded-[50%] after:border-separate after:top-0 after:font-hind_siliguri ${props.cardVariant}`}
        >
            <div className="box-border caret-transparent grow break-words p-6">
                <img
                    src={props.iconSrc}
                    alt="Icon"
                    className={`box-border caret-transparent h-[60px] w-[60px] mb-4 mx-auto p-[13px] rounded-r-[50%] rounded-tl-[50%] ${props.iconVariant}`}
                />
                <h4 className="text-slate-900 text-[21.525px] font-semibold box-border caret-transparent leading-[25.83px] break-words mb-2 font-urbanist md:text-2xl md:leading-[28.8px]">
                    {props.title}
                </h4>
                <h2
                    className={`text-[24.575px] font-semibold box-border caret-transparent leading-[29.49px] break-words font-urbanist md:text-[32px] md:leading-[38.4px] ${props.valueVariant}`}
                >
                    {props.value}
                </h2>
            </div>
        </div>
    );
};
