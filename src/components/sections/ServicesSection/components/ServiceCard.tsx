export type ServiceCardProps = {
  title: string;
  description: string;
  iconVariant: string;
  icon?: any;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="relative text-neutral-800 bg-white box-border caret-transparent flex flex-col break-words w-full border border-gray-200 mb-6 rounded-[10px] border-solid md:mb-0 h-full flex-1 transform transition-transform transition-shadow duration-300 ease-in-out shadow-sm hover:-translate-y-2 hover:shadow-2xl">
      <div className="box-border caret-transparent grow break-words text-center p-6">
        <span
          className={`relative text-white text-[21.104px] items-center box-border caret-transparent inline-flex shrink-0 h-[60px] justify-center leading-[0px] break-words w-[60px] mb-4 rounded-[50%] ${props.iconVariant}`}
        >
          {props.icon && (
            <span
              className="flex items-center justify-center"
              aria-hidden="true"
            >
              {props.icon}
            </span>
          )}
        </span>
        <h5 className="text-slate-900 text-xl font-semibold box-border caret-transparent break-words mb-2 font-urbanist">
          {props.title}
        </h5>
        <p className="box-border caret-transparent break-words text-[15px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
