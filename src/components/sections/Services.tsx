import { HugeiconsIcon } from "@hugeicons/react";
import {
    ArrowUpRight02Icon,
    DatabaseIcon,
    Globe02Icon,
    PaintBrush01Icon,
    Rocket01Icon,
    Search01Icon,
    WebDesign01Icon,
} from "@hugeicons/core-free-icons";
import { pageLayout } from "@/constants/layout";

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description:
                "Professional web development for dynamic, responsive websites tailored to your business goals, user flows, and growth needs.",
            icon: WebDesign01Icon,
        },
        {
            title: "Web Design",
            description:
                "Visually polished, user-focused interfaces with clear layouts, strong hierarchy, and memorable brand presentation.",
            icon: PaintBrush01Icon,
        },
        {
            title: "Web Hosting",
            description:
                "Reliable hosting setup for fast, secure, and accessible websites, with deployment support for projects of different sizes.",
            icon: Globe02Icon,
        },
        {
            title: "SEO Optimization",
            description:
                "Search-ready structure, readable content flow, performance awareness, and technical refinements that improve online visibility.",
            icon: Search01Icon,
        },
        {
            title: "Backend Systems",
            description:
                "API-driven features, authentication flows, dashboards, and database-backed product logic for practical business needs.",
            icon: DatabaseIcon,
        },
        {
            title: "Launch Support",
            description:
                "Production-ready checks, responsive fixes, domain setup, and final polish so the website is ready to use after delivery.",
            icon: Rocket01Icon,
        },
    ];

    const process = ["Scope", "Design", "Build", "Ship"];

    return (
        <section id="services" className="bg-(--white-surface) px-5 py-24 text-(--text-dark) md:px-8">
            <div className={`${pageLayout.inner} ${pageLayout.columns}`}>
                <div className={pageLayout.content}>
                <div className="mb-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-end">
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-(--primary-dark)">
                            Services
                        </p>
                        <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                            Complete web services for businesses that need to look ready and work properly.
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 border border-black/10">
                        {process.map((item) => (
                            <div key={item} className="border-r border-black/10 p-4 last:border-r-0">
                                <p className="text-sm uppercase tracking-[0.18em] text-(--text-muted)">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        return (
                            <article key={service.title} className="border border-black/10 bg-(--white-surface) p-6 shadow-[0_18px_55px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-(--primary)">
                                <div className="mb-12 flex items-center justify-between">
                                    <HugeiconsIcon
                                        icon={service.icon}
                                        size={28}
                                        strokeWidth={1.5}
                                        className="text-(--primary-dark)"
                                    />
                                    <HugeiconsIcon
                                        icon={ArrowUpRight02Icon}
                                        size={20}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                                <p className="mt-4 leading-7 text-(--text-muted)">
                                    {service.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
