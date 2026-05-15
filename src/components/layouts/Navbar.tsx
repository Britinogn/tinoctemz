// import React from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";

import {
    Home09Icon,
    Folder01Icon,
    GithubIcon,
    File01Icon,
    UserIcon,
    Briefcase01Icon,
} from "@hugeicons/core-free-icons";
// import resume from "@/assets/resume.pdf";

const Nav = () => {
    const navLinks = [
        {
            name: "Home",
            icon: Home09Icon,
            href: "/",
        },
        {
            name: "About",
            icon: UserIcon,
            href: "#about",
        },
        {
            name: "Projects",
            icon: Folder01Icon,
            href: "#projects",
        },
        {
            name: "Services",
            icon: Briefcase01Icon,
            href: "/#services",
        },
        {
            name: "GitHub",
            icon: GithubIcon,
            // href: "https://github.com/britinogn",
            href: "/github",
            // target: "_blank",
        },
        {
            name: "Resume",
            icon: File01Icon,
            href: "https://docs.google.com/document/d/1XZ9PsuHmWX43OVrSa7AWxyQzjIdDSwSj/edit?usp=sharing&ouid=112842809708175941652&rtpof=true&sd=true",
            target: "_blank",
        },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed left-1/2 top-10 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2"
        >
            <div className="flex items-center justify-between gap-2 rounded-tl-2xl rounded-br-2xl  border border-(--border) bg-(--white-surface)/60 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-md">
                {navLinks.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        target={item.target}
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        title={item.name}
                        className="flex h-12 min-w-12 items-center justify-center rounded-xl px-4 text-(--text-dark) transition-colors hover:bg-(--primary-dark) hover:text-white"
                    >
                        <HugeiconsIcon icon={item.icon} size={22} />
                        <span className="sr-only">{item.name}</span>
                    </motion.a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Nav;
