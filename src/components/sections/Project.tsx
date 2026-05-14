import ProjectCard from "@/components/ui/ProjectCard";
import { pageLayout } from "@/constants/layout";
import works from "@/data/data";

const Projects = () => {
    const featuredWorks = works.slice(0, 6);

    return (
        <section id="projects" className="bg-(--surface) px-5 py-24 text-(--text-primary) md:px-8">
            <div className={`${pageLayout.inner} ${pageLayout.columns}`}>
                <div className={pageLayout.content}>
                    <div className="mb-14 border-b border-(--border) pb-8">
                        <p className="text-sm uppercase tracking-[0.28em] text-(--primary)">
                            Selected work
                        </p>
                        <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                                Practical builds with polished product presentation.
                            </h2>
                            <p className="text-base leading-7 text-(--text-secondary)">
                                A focused set of client-style platforms across real estate,
                                logistics, booking, business tools, AI, and content.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {featuredWorks.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
