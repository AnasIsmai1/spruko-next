import { BlogCard } from "@/components/sections/BlogSection/components/BlogCard";

export const BlogSection = () => {
    return (
        <section className="relative box-border caret-transparent py-[70px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center mb-12">
                    <div className="relative box-border caret-transparent inline-block mb-2 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:left-[-30px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-5 before:border-separate before:top-2/4 before:font-hind_siliguri after:accent-auto after:bg-orange-500 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:right-[-30px] after:text-center after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:top-2/4 after:font-hind_siliguri">
                        <span className="text-blue-700 font-semibold box-border caret-transparent">
                            Our Blog
                        </span>
                    </div>
                    <div className="text-slate-900 text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
                        Our Latest{" "}
                        <span className="text-blue-700 box-border caret-transparent">
                            Blog
                        </span>
                    </div>
                    <div className="box-border caret-transparent opacity-80">
                        Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    </div>
                </div>
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <BlogCard
                            blogImageSrc="../assets/images/blog/3.jpg"
                            categoryText="Hosting"
                            categoryVariant="bg-orange-500"
                            title="Starting a Web Hosting Business"
                            titleVariant=""
                            description="To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it..."
                            profileImageSrc="../assets/images/profile/1.jpg"
                            authorName="Megan Peters"
                            timeAgo="1 day ago"
                            blogUrl="blog-details.html"
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <BlogCard
                            blogImageSrc="../assets/images/blog/6.jpg"
                            categoryText="Email"
                            categoryVariant="bg-cyan-400"
                            title="Email Hosting For Your Projects"
                            titleVariant=""
                            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque..."
                            profileImageSrc="../assets/images/profile/2.jpg"
                            authorName="Mike Rowe-Soft"
                            timeAgo="2 days ago"
                            blogUrl="blog-details.html"
                        />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <BlogCard
                            blogImageSrc="../assets/images/blog/5.jpg"
                            categoryText="Cloud"
                            categoryVariant="bg-green-500"
                            title="Cloud Hosting growing faster"
                            titleVariant="text-gray-500"
                            description="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut .."
                            profileImageSrc="../assets/images/profile/5.jpg"
                            authorName="Navin Telsko"
                            timeAgo="4 days ago"
                            blogUrl="blog-details.html"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
