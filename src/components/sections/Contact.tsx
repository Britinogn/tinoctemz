import { ArrowUpRight } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="bg-(--surface) px-5 py-24 text-(--text-primary) md:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 border-y border-(--border) py-16 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-(--primary)">
                        Contact
                    </p>
                    <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                        Have a website, dashboard, or launch page that needs proper execution?
                    </h2>
                </div>
                <a
                    href="mailto:brightonwuemeri@email.com"
                    className="inline-flex items-center justify-center gap-2 bg-(--primary) px-7 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-(--text-dark) transition hover:bg-(--primary-light)"
                >
                    Send message
                    <ArrowUpRight size={18} />
                </a>
            </div>
        </section>
    );
};

export default Contact;
