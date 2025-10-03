export type ServiceCardProps = {
  title: string;
  description: string;
  iconVariant: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="relative text-neutral-800 bg-white shadow-[rgba(0,0,0,0.1)_0px_3px_10px_0px] box-border caret-transparent flex flex-col break-words w-full border border-gray-200 mb-6 rounded-[10px] border-solid md:mb-0">
      <div className="box-border caret-transparent grow break-words text-center p-6">
        <span
          className={`relative text-white text-[21.104px] items-center box-border caret-transparent inline-flex shrink-0 h-[60px] justify-center leading-[0px] break-words w-[60px] mb-4 rounded-[50%] ${props.iconVariant}`}
        >
          <i className="italic box-border caret-transparent block break-words before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:text-[21.104px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.104px] before:list-outside before:list-disc before:break-words before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
        </span>
        <h5 className="text-slate-900 text-xl font-semibold box-border caret-transparent break-words mb-2 font-urbanist">
          {props.title}
        </h5>
        <p className="box-border caret-transparent break-words">
          {props.description}
        </p>
      </div>
    </div>
  );
};
