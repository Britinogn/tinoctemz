import ProjectCard from "@/components/ui/ProjectCard";
import { pageLayout } from "@/constants/layout";
import works from "@/data/data";

const Projects = () => {
    const featuredWorks = works.slice(0, 50);

    return (
        <section id="projects" className="bg-(--surface) mt-12 px-5 py-24 text-(--text-primary) md:px-8">
            <div className={`${pageLayout.inner} ${pageLayout.columns}`}>
                <div className={pageLayout.content}>
                    <div className="mb-14 border-b border-(--border) pb-8">
                        <p className="text-md xl:text-xl uppercase tracking-[0.28em] text-(--primary)">
                            My Recent Projects
                        </p>
                        <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                                Building scalable digital experiences with precision and modern design.
                            </h2>
                            <p className="text-base leading-7 text-(--text-secondary)">
                                Selected projects across real estate, logistics, AI, bookings,
                                business tools, and content driven platforms.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
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
