import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { Link, useParams } from "react-router-dom";
import { pageLayout } from "@/constants/layout";
import works from "@/data/data";
// import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
    // const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const project = works.find((item) => item.id === id);

    if (!project) {
        return (
            <section className="min-h-screen bg-(--surface) px-5 py-32 text-(--text-primary) md:px-8">
                <div className={`${pageLayout.inner} ${pageLayout.columns}`}>
                    <div className={pageLayout.content}>
                        <p className="text-sm uppercase tracking-[0.28em] text-(--primary)">
                            Project not found
                        </p>
                        <h1 className="mt-4 text-5xl font-semibold">This project does not exist.</h1>
                        <Link
                            to="/projects"
                            className="mt-8 inline-flex items-center gap-2 bg-(--primary) px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-dark)"
                        >
                            <ArrowLeft size={18} />
                            Back to projects
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-(--surface) px-5 py-32 text-(--text-primary) md:px-8">
            <div className={`${pageLayout.inner} ${pageLayout.columns}`}>
                <article className={`${pageLayout.content}`}>
                    <Link
                        to="/projects"
                        className="inline-flex mt-10 items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-(--primary)"
                    >
                        <ArrowLeft size={18} />
                        Back to projects
                    </Link>

                    {/* <button
                        onClick={() => navigate(-10)}
                        className="inline-flex mt-10 cursor-pointer   items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-(--primary)"
                    >
                        <ArrowLeft size={18} />
                        Back to projects
                    </button> */}

                    <div className="mt-10 flex flex-wrap gap-2">
                        <span className="border border-(--border) px-3 py-1 text-xs uppercase tracking-[0.18em] text-(--primary)">
                            {project.label}
                        </span>
                        <span className="border border-(--border) px-3 py-1 text-xs uppercase tracking-[0.18em] text-(--text-secondary)">
                            {project.dateBuilt}
                        </span>
                    </div>

                    <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-7xl">
                        {project.title}
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl leading-9 text-(--text-secondary)">
                        {project.description}
                    </p>

                    <div className="mt-12 overflow-hidden border border-(--border) bg-(--surface-secondary)">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="aspect-video w-full object-cover"
                        />
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-[1fr_0.75fr]">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-(--primary)">
                                How I made it
                            </p>
                            <p className="mt-4 text-lg leading-8 text-(--text-secondary)">
                                {project.howIMadeIt}
                            </p>
                        </div>

                        <div className="border border-(--border) p-6">
                            <p className="text-sm uppercase tracking-[0.28em] text-(--primary)">
                                Stack
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-(--border) px-3 py-2 text-sm text-(--text-secondary)"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 grid gap-3">
                                <a
                                    href={project.github || "https://github.com/britinogn"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 border border-(--border) px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-primary) transition hover:border-(--primary) hover:text-(--primary)"
                                >
                                    <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={1.5} />
                                    GitHub
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-(--primary) px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-dark) transition hover:bg-(--primary-light)"
                                >
                                    <HugeiconsIcon icon={LinkSquare02Icon} size={18} strokeWidth={1.5} />
                                    Live URL
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ProjectDetails;
