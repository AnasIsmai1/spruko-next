export type BlogCardProps = {
  blogImageSrc: string;
  categoryText: string;
  categoryVariant: string;
  title: string;
  titleVariant: string;
  description: string;
  profileImageSrc: string;
  authorName: string;
  timeAgo: string;
  blogUrl: string;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <div className="relative text-neutral-800 bg-white shadow-[rgba(0,0,0,0.1)_0px_3px_10px_0px] box-border caret-transparent flex flex-col break-words w-full mb-6 rounded-[10px] md:mb-0">
      <div className="relative box-border caret-transparent break-words">
        <a
          href={props.blogUrl}
          className="box-border caret-transparent break-words hover:text-blue-700 hover:border-blue-700 text-gray-500"
        >
          <img
            src={props.blogImageSrc}
            alt="blog-image"
            className="box-border caret-transparent break-words w-full rounded-t-[5px]"
          />
        </a>
        <span
          className={`absolute text-white text-[13px] font-medium box-border caret-transparent block leading-[0px] break-words text-center text-nowrap p-3 rounded-[50px] left-5 -bottom-2.5 ${props.categoryVariant}`}
        >
          {props.categoryText}
        </span>
      </div>
      <div className="box-border caret-transparent flex flex-col grow break-words p-6">
        <h5 className="text-slate-900 text-xl font-semibold box-border caret-transparent break-words mb-2 font-urbanist">
          <a
            href={props.blogUrl}
            className={`box-border caret-transparent break-words hover:text-blue-700 hover:border-blue-700 ${props.titleVariant}`}
          >
            {props.title}
          </a>
        </h5>
        <div className="text-slate-500 box-border caret-transparent break-words">
          {props.description}
        </div>
        <div className="items-center box-border caret-transparent flex break-words mt-auto pt-6">
          <div className="relative items-center bg-cover box-border caret-transparent flex shrink-0 h-[42px] justify-center leading-[0px] break-words w-[42px] mr-4 rounded-[50%]">
            <img
              src={props.profileImageSrc}
              alt="img"
              className="box-border caret-transparent break-words w-10 rounded-[50%]"
            />
          </div>
          <div className="box-border caret-transparent break-words">
            <a
              href="javascript://void(0);"
              className="text-slate-900 font-semibold box-border caret-transparent leading-[19.2px] break-words mb-2 font-urbanist hover:text-blue-700 hover:border-blue-700"
            >
              {props.authorName}
            </a>
            <small className="text-slate-500 text-sm box-border caret-transparent block leading-[21px] break-words">
              {props.timeAgo}
            </small>
          </div>
          <div className="box-border caret-transparent break-words ml-auto">
            <a
              href="javascript://void(0)"
              className="text-slate-500 box-border caret-transparent inline-block break-words hover:text-blue-700 hover:border-blue-700"
            >
              <i className="bg-gray-100 box-border caret-transparent inline-block leading-[17.6px] break-words mr-1 p-2 rounded-[50%] font-feather before:accent-auto before:box-border before:caret-transparent before:text-slate-500 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[17.6px] before:list-outside before:list-disc before:break-words before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-feather"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

