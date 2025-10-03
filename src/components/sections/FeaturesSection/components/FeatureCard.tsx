export type FeatureCardProps = {
    iconSrc: string;
    title: string;
    price: string;
    description: string;
    href: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
    return (
        <div className="relative text-neutral-800 bg-white box-border caret-transparent flex flex-col break-words w-full border border-gray-200 mb-6 rounded-[10px] border-solid md:mb-0">
            <div className="box-border caret-transparent grow break-words p-6">
                <div className="items-center box-border caret-transparent flex break-words mb-6">
                    <span className="relative items-center box-border caret-transparent flex shrink-0 h-[42px] justify-center leading-[0px] break-words w-[42px] mr-4 rounded-[7px]">
                        <img
                            src={props.iconSrc}
                            alt="Icon"
                            className="box-border caret-transparent h-[42px] w-[42px]"
                        />
                    </span>
                    <div className="box-border caret-transparent grow break-words">
                        <h4 className="text-slate-900 text-[21.525px] font-semibold box-border caret-transparent leading-[25.83px] break-words font-urbanist md:text-2xl md:leading-[28.8px]">
                            {props.title}
                        </h4>
                    </div>
                </div>
                <p className="text-slate-500 box-border caret-transparent break-words mb-1">
                    Starts at
                </p>
                <h2 className="text-slate-900 text-[24.575px] font-semibold box-border caret-transparent leading-[29.49px] break-words mb-4 font-urbanist md:text-[32px] md:leading-[38.4px]">
                    {props.price}{" "}
                    <span className="text-slate-500 text-sm box-border caret-transparent leading-[16.8px] opacity-70 break-words">
                        / month
                    </span>
                </h2>
                <p className="box-border caret-transparent break-words mb-6">
                    {props.description}
                </p>
                <a
                    href={props.href}
                    className="text-white text-[13.6px] font-medium bg-blue-700 box-border caret-transparent inline-block leading-[20.4px] break-words text-center align-middle border border-blue-700 px-4 py-2 rounded-[4.8px] border-solid hover:bg-blue-700/80"
                >
                    Get Started Now
                </a>
            </div>
        </div>
    );
};
