import { ArrowUpRight, Code2 } from "lucide-react";
import heroImage from "@/assets/images/portrait.jpg";
import { pageLayout } from "@/constants/layout";

const About = () => {
    const highlights = ["Fullstack builds", "Modern portfolios", "Business platforms"];

    return (
        <section id="about" className="bg-(--white-surface) px-5 py-24 text-(--text-dark) md:px-8">
            <div className={`${pageLayout.inner} ${pageLayout.columns}`}>
                {/* <span className={pageLayout.verticalLine} /> */}

                <div className={`${pageLayout.content}`}>
                    <p className="mb-10 text-sm uppercase tracking-[0.28em] text-(--primary-dark)">
                        About
                    </p>

                    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] ">
                        <div className="order-2 md:order-1">
                            <div className="relative mx-auto max-w-110 pb-14 pl-12 sm:pl-16">
                                <div className="absolute bottom-0 left-0 top-16 w-[calc(100%-3rem)] border-b-16 border-l-16 border-(--primary)" />
                                <div className="absolute left-0 top-16 h-4 w-14 bg-(--primary)" />
                                <div className="absolute bottom-0 right-0 h-16 w-4 bg-(--primary)" />
                                <div className="absolute bottom-10 left-10 h-[70%] w-[calc(100%-2.5rem)] bg-(--white-secondary)" />
                                <img
                                    src={heroImage}
                                    alt="Bright Onwuemeri"
                                    className="relative z-10 aspect-[0.76] w-full object-cover object-top shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
                                />
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                                I keep websites simple to use and serious enough for business.
                            </h2>

                            <div className="mt-8 grid gap-8">
                                <p className="text-xl leading-9 text-(--text-muted)">
                                    I work across frontend, backend, and no-code delivery to help
                                    brands turn ideas into functional web experiences. The goal is
                                    not decoration. It is clear hierarchy, strong spacing, reliable
                                    flows, and pages that make the next action obvious.
                                </p>

                                <div className="grid gap-4 sm:grid-cols-3">
                                    {highlights.map((item) => (
                                        <div key={item} className="border border-black/10 p-5">
                                            <Code2 className="mb-8 text-(--primary-dark)" size={24} />
                                            <p className="text-lg font-semibold">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="mailto:brightonwuemeri@email.com"
                                    className="inline-flex w-fit items-center justify-center gap-2 bg-(--primary) px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-dark) transition hover:bg-(--primary-light)"
                                >
                                    Work with me
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
