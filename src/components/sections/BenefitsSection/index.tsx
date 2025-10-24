import type { ComponentType, SVGProps } from "react";
import {
  Mail,
  Hexagon,
  Cpu,
  PanelsTopLeft,
  ShieldAlert,
  FastForward,
  Mailbox,
} from "lucide-react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const benefits: Array<{ title: string; desc: string; icon: IconType }> = [
  {
    title: "Free Email Forwarding",
    desc: "Amet ipsum justo no dolores lorem per clita elitr et ut, amet aliquyam et sed invidunt at asd accusam, magni dolores eos.",
    icon: Mailbox,
  },
  {
    title: "Bulk Tools",
    desc: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.",
    icon: Hexagon,
  },
  {
    title: "DNS Management",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    icon: Cpu,
  },
  {
    title: "Easy To Use Control Panel",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam, nisi ut aliquid commodi consequatur.",
    icon: PanelsTopLeft,
  },
  {
    title: "Domain Theft Protection",
    desc: "Nam libero tempore, nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    icon: ShieldAlert,
  },
  {
    title: "Domain Forwarding",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    icon: FastForward,
  },
];

export const BenefitsSection = () => {
  return (
    <section
      className="relative box-border caret-transparent py-[70px]"
      aria-label="Benefits and add-ons"
    >
      <img
        src="../assets/images/patterns/12.png"
        alt=""
        aria-hidden="true"
        className="absolute box-border caret-transparent opacity-10 -rotate-90 w-40 z-0 right-0 bottom-[0%]"
      />
      <img
        src="../assets/images/patterns/11.png"
        alt=""
        aria-hidden="true"
        className="absolute box-border caret-transparent h-20 opacity-15 w-20 z-0 left-[8%] top-[18%]"
      />
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1300px]">
        <div className="box-border caret-transparent text-center mb-12">
          <div className="relative box-border caret-transparent inline-block mb-2 before:accent-auto before:bg-orange-500 before:box-border before:caret-transparent before:text-gray-500 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:left-[-30px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-5 before:border-separate before:top-2/4 before:font-hind_siliguri after:accent-auto after:bg-orange-500 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:right-[-30px] after:text-center after:indent-[0px] after:normal-case after:visible after:w-5 after:border-separate after:top-2/4 after:font-hind_siliguri">
            <span className="text-blue-700 font-semibold box-border caret-transparent">
              Benefits
            </span>
          </div>
          <div className="text-slate-900 text-[32px] font-bold box-border caret-transparent leading-[38.4px] mb-2 font-urbanist">
            Free Add-Ons With Every{" "}
            <span className="text-blue-700 box-border caret-transparent">
              Domain Name
            </span>
          </div>
          <div className="box-border caret-transparent opacity-80">
            Checkout Add-On Benefits
          </div>
        </div>
        <div className="box-border caret-transparent -mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ title, desc, icon: Icon }) => (
            <article
              key={title}
              role="listitem"
              className="relative box-border caret-transparent bg-card border border-border rounded-xl p-6 md:p-7 shadow-sm hover:shadow transition-shadow group hover:cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  {/* subtle circle accent behind the icon */}
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 inset-0 rounded-full bg-muted"
                  />
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-[#1447E6] stroke-[#1447E6] group-hover:text-white group-hover:fill-[#1447E6] group-hover:stroke-white transition-colors"
                  />
                  <span className="sr-only">{`${title} icon`}</span>
                </span>
                <h3 className="text-primary text-xl font-bold leading-tight">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
