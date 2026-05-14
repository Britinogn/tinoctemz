import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Work } from "@/data/data";

interface ProjectCardProps {
    project: Work;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link to={`/projects/${project.id}`} className="group block h-full">
            <article className="flex h-full flex-col justify-between overflow-hidden border border-(--border) bg-(--surface-secondary) transition duration-300 hover:-translate-y-1 hover:border-(--primary)">
                <div className="overflow-hidden border-b border-(--border)">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </div>

                <div>
                    <div className="mb-10 flex flex-wrap items-center gap-2 p-6 pb-0">
                        <span className="border border-(--border) px-3 py-1 text-xs uppercase tracking-[0.18em] text-(--primary)">
                            {project.label}
                        </span>
                        <span className="border border-(--border) px-3 py-1 text-xs uppercase tracking-[0.18em] text-(--text-secondary)">
                            {project.dateBuilt}
                        </span>
                    </div>

                    <div className="px-6">
                        <h3 className="text-2xl font-semibold text-(--text-primary)">
                            {project.title}
                        </h3>
                        <p className="mt-4 leading-7 text-(--text-secondary)">
                            {project.description}
                        </p>
                    </div>
                </div>

                <span className="m-6 mt-10 inline-flex w-fit items-center justify-center gap-2 bg-(--primary) px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-dark) transition group-hover:bg-(--primary-light)">
                    View details
                    <ArrowUpRight size={17} />
                </span>
            </article>
        </Link>
    );
};

export default ProjectCard;
