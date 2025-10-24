import { FooterColumn } from "@/components/sections/Footer/components/FooterColumn";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Logo from "@/assets/footer/logo-white.png";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent py-12">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1300px]">
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <FooterColumn
            type="brand"
            logoUrl={Logo.src}
            logoAlt="img"
            description=" At dolor clita amet erat takimata sed tempor invidunt lorem. Justo sea nonumy. "
            contactInfo={{
              phone: "+125 254 3562",
              email: "hostma@company.com",
              address: "San Francisco, CA ",
            }}
            socialLinks={[
              { href: "javascript://void(0);", icon: <FaFacebook size={16} /> },
              { href: "javascript://void(0);", icon: <Instagram size={16} /> },
              { href: "javascript://void(0);", icon: <Linkedin size={16} /> },
              { href: "javascript://void(0);", icon: <Twitter size={16} /> },
            ]}
          />
          <FooterColumn
            type="links"
            title="Domains"
            links={[
              { href: "register-domain.html", text: "Register Domain Name" },
              { href: "register-domain.html", text: "View Domain Pricing" },
              { href: "premium-domains.html", text: "Premium Domains" },
              { href: "domain-transfer.html", text: "Transfer Your Domain" },
              { href: "domain-transfer.html", text: "Bulk Domain Transfer" },
              { href: "free-with-domain.html", text: "Free With Every Domain" },
              { href: "name-suggestion-tool.html", text: "Name Suggestion" },
              { href: "whois-lookup.html", text: "Whois Lookup" },
              { href: "premium-domains.html", text: "View Promos" },
            ]}
          />
          <FooterColumn
            type="links"
            title="Hosting & Products"
            links={[
              { href: "linux-shared-hosting.html", text: "Linux Hosting" },
              { href: "windows-shared-hosting.html", text: "Windows Hosting" },
              {
                href: "wordpress-shared-hosting.html",
                text: "WordPress Hosting",
              },
              { href: "dedicated-server.html", text: "Dedicated Servers" },
              { href: "linux-reseller-hosting.html", text: "Reseller Hosting" },
              { href: "cloud.html", text: "Cloud Hosting" },
              { href: "ssl-certificates.html", text: "SSL Certificates" },
              { href: "sitelock.html", text: "SiteLock" },
              { href: "codeguard-backup.html", text: "Codeguard" },
            ]}
          />
          <FooterColumn
            type="newsletter"
            title="Get in Touch With Us"
            newsletterPlaceholder="Enter Your Email..."
            supportTitle="Support"
            supportLinks={[
              { href: "blog.html", text: "Our Blog" },
              { href: "contact-us.html", text: "Contact Support" },
              { href: "contact-us.html", text: "Report Abuse" },
              { href: "login.html", text: "Affiliate" },
              {
                href: "cancellation-refund.html",
                text: "Cancellation & Refund Policy",
              },
              { href: "payment-options.html", text: "Payment Options" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
