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
import resume from "@/assets/resume.pdf";

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
            href: "#services",
        },
        {
            name: "GitHub",
            icon: GithubIcon,
            href: "https://github.com/britinogn",
        },
        {
            name: "Resume",
            icon: File01Icon,
            href: resume,
        },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2"
        >
            <div className="flex items-center justify-between gap-1 border border-(--border) bg-(--white-surface)/95 px-2 py-2 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur">
                {navLinks.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        title={item.name}
                        className="flex h-10 min-w-10 items-center justify-center px-3 text-(--text-dark) transition hover:bg-(--primary-dark) hover:text-(--primary)"
                    >
                        <HugeiconsIcon icon={item.icon} size={18} />
                        <span className="sr-only">{item.name}</span>
                    </motion.a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Nav;
