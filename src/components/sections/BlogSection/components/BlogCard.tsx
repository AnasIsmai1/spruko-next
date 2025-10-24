import { Heart } from "lucide-react";

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
        <div className="relative text-neutral-800 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 box-border caret-transparent flex flex-col break-words w-full mb-6 rounded-[10px] md:mb-0">
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
                            className="bg-slate-200 p-1 rounded-full box-border caret-transparent inline-block break-words hover:text-blue-700 hover:border-blue-700"
                        >
                            <Heart size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
