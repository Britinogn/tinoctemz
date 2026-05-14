import { HugeiconsIcon } from "@hugeicons/react";

import {
    GithubIcon,
    Linkedin01FreeIcons,
    Mail01Icon,
    NewTwitterIcon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
    const icons = [
        {
            icon: GithubIcon,
            href: "https://github.com/britinogn",
        },
        {
            icon: NewTwitterIcon,
            href: "https://x.com/britinogn",
        },
        {
            icon: Linkedin01FreeIcons,
            href: "https://linkedin.com/in/britinogn",
        },
        {
            icon: Mail01Icon,
            href: "mailto:brightonwuemeri@email.com",
        },
    ];

    return (
        <footer className="flex w-full flex-col items-center gap-6 border-t border-black/10 bg-(--white-surface) px-5 py-10 text-(--text-dark)">
            <p className="text-sm text-(--text-muted)">
                (c) {new Date().getFullYear()} Bright Onwuemeri. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
                {icons.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-(--text-muted) transition hover:text-(--primary-dark)"
                    >
                        <HugeiconsIcon icon={item.icon} size={20} />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
