import { ArrowUpRight, LayoutDashboard, Search, Server } from "lucide-react";

const Services = () => {
    const services = [
        {
            title: "Frontend development",
            description:
                "Responsive interfaces built with React, Vue, TypeScript, and Tailwind CSS for clean user journeys across screen sizes.",
            icon: LayoutDashboard,
        },
        {
            title: "Backend systems",
            description:
                "API-driven features, authentication flows, dashboards, and database-backed product logic for practical business needs.",
            icon: Server,
        },
        {
            title: "SEO and launch polish",
            description:
                "Fast page structure, readable content sections, metadata thinking, and production-ready refinements before release.",
            icon: Search,
        },
    ];

    const process = ["Scope", "Design", "Build", "Ship"];

    return (
        <section id="services" className="bg-(--white-surface) px-5 py-24 text-(--text-dark) md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end">
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-(--primary-dark)">
                            Services
                        </p>
                        <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                            Focused web work for products that need to look ready.
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

                <div className="grid gap-5 md:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article key={service.title} className="border border-black/10 p-6">
                                <div className="mb-12 flex items-center justify-between">
                                    <Icon className="text-(--primary-dark)" size={28} />
                                    <ArrowUpRight size={20} />
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
        </section>
    );
};

export default Services;
