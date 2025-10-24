export type DomainPriceCardProps = {
    domain: string;
    price: string;
    domainColor: string;
    cardVariant: string;
    showNewBadge?: boolean;
};

export const DomainPriceCard = (props: DomainPriceCardProps) => {
    return (
        <div
            className={`group relative box-border caret-transparent z-[1] mb-4 p-[15px] rounded-[10px] md:mb-0 transition-all duration-150 ease ${props.cardVariant}`}
        >
            {props.showNewBadge && (
                <div className="absolute box-border caret-transparent h-40 w-40 z-[6] overflow-hidden left-0 top-0">
                    <span className="absolute text-white text-[10px] bg-red-400 box-border caret-transparent block leading-[15px] capitalize -rotate-45 w-[260px] py-px right-2.5 top-2.5">
                        New
                    </span>
                </div>
            )}
            <p
                className={`${props.domainColor} text-xl font-semibold box-border caret-transparent leading-[30px] transition-all duration-150 group-hover:text-white`}
            >
                {props.domain}
            </p>
            <p className="text-[13px] box-border caret-transparent leading-[19.5px] opacity-80 transition-all duration-150 group-hover:text-white">
                Starts at
            </p>
            <p className="text-lg font-semibold box-border caret-transparent leading-[27px] transition-all duration-150 group-hover:text-white">
                $ {props.price}
            </p>
        </div>
    );
};
