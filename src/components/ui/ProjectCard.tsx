import { ArrowUpRight } from "lucide-react";
// import { HugeiconsIcon } from "@hugeicons/react";
// import {
//     ArrowUp05Icon
// } from "@hugeicons/core-free-icons";

import { Link } from "react-router-dom";
import type { Work } from "@/data/data";

interface ProjectCardProps {
    project: Work;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link to={`/projects/${project.id}`} className="group block h-full">
            <article className="flex h-full flex-col border border-(--border) bg-(--surface-secondary) p-4 shadow-[0_22px_70px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:border-(--primary) ">
                <div className="overflow-hidden rounded-md border border-(--border) bg-(--surface)">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between p-2 pt-6">
                    <div>
                        <div className="mb-8 flex flex-wrap items-center gap-2">
                        <span className="border border-(--border) px-3 py-1 text-xs uppercase tracking-[0.18em] text-(--primary)">
                            {project.label}
                        </span>
                            <span className="border border-(--border) px-3 py-1 text-xs uppercase tracking-[0.18em] text-(--text-secondary)">
                                {project.dateBuilt}
                            </span>
                        </div>

                        <h3 className="text-2xl font-semibold text-(--text-primary)">
                            {project.title}
                        </h3>
                        <p className="mt-4 leading-7 text-(--text-secondary)">
                            {project.description}
                        </p>
                    </div>

                    <span className="mt-10 inline-flex w-fit items-center justify-center gap-2 bg-(--primary) px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-dark) transition group-hover:bg-(--primary-light)">
                        View details
                        <ArrowUpRight size={17} />
                        {/* <HugeiconsIcon icon={ArrowUp05Icon} /> */}
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default ProjectCard;
