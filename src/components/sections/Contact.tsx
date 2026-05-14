import { ArrowUpRight } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    GithubIcon,
    Linkedin01FreeIcons,
    Mail01Icon,
    NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { pageLayout } from "@/constants/layout";

const Contact = () => {
    const socialLinks = [
        {
            name: "Email",
            icon: Mail01Icon,
            href: "mailto:brightonwuemeri@email.com",
        },
        {
            name: "X (Twitter)",
            icon: NewTwitterIcon,
            href: "https://x.com/britinogn",
        },
        {
            name: "LinkedIn",
            icon: Linkedin01FreeIcons,
            href: "https://linkedin.com/in/britinogn",
        },
        {
            name: "GitHub",
            icon: GithubIcon,
            href: "https://github.com/britinogn",
        },
    ];

    return (
        <section id="contact" className="bg-(--surface) px-5 py-24 text-(--text-primary) md:px-8">
            <div className={`${pageLayout.inner} ${pageLayout.columns}`}>
                <div className={`${pageLayout.content} border-y border-(--border) py-16`}>
                    <p className="mb-10 text-sm uppercase tracking-[0.28em] text-(--primary)">
                        Contact
                    </p>
                    <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                        Have a website, dashboard, or launch page that needs proper execution?
                    </h2>
                    
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.name === "Email" ? "_self" : "_blank"}
                                rel={link.name === "Email" ? "" : "noopener noreferrer"}
                                className="group flex flex-col items-start justify-between border border-(--border) bg-(--surface-secondary) p-6 transition-colors hover:border-(--primary)"
                            >
                                <div className="mb-8 text-(--text-secondary) transition-colors group-hover:text-(--primary)">
                                    <HugeiconsIcon icon={link.icon} size={40} strokeWidth={1.5} />
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <span className="text-lg font-semibold text-(--text-primary)">
                                        {link.name}
                                    </span>
                                    <ArrowUpRight 
                                        size={20} 
                                        className="text-(--text-secondary) transition-colors group-hover:text-(--primary)" 
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
