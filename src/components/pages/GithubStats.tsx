import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    RepositoryIcon,
    FavouriteIcon,
    GitForkIcon,
    UserGroupIcon,
    UserSharingIcon,
    EyeIcon,
    GithubIcon,
    ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import useGithubStats from "@/hooks/useGithubStats";

// ─── Animated counter ─────────────────────────────────────────────────────────

const AnimatedNumber = ({ value }: { value: number }) => {
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, { stiffness: 35, damping: 18 });
    const display = useTransform(spring, (v) => Math.round(v).toLocaleString());
    const ref = useRef<HTMLSpanElement>(null);
    const fired = useRef(false);

    useEffect(() => {
        if (fired.current) return;
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    motionVal.set(value);
                    fired.current = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [value, motionVal]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

// ─── Types ────────────────────────────────────────────────────────────────────

type Stats = NonNullable<ReturnType<typeof useGithubStats>["stats"]>;
type StatConfig = {
    label: string;
    icon: typeof RepositoryIcon;
    getValue: (s: Stats) => number;
};

// ─── Stat definitions ─────────────────────────────────────────────────────────

const FEATURED: StatConfig[] = [
    { label: "Repositories", icon: RepositoryIcon, getValue: (s) => s.repos },
    { label: "Total Stars",  icon: FavouriteIcon,  getValue: (s) => s.stars },
];

const SECONDARY: StatConfig[] = [
    { label: "Forks",      icon: GitForkIcon,     getValue: (s) => s.forks },
    { label: "Followers",  icon: UserGroupIcon,   getValue: (s) => s.followers },
    { label: "Following",  icon: UserSharingIcon, getValue: (s) => s.following },
    { label: "Watchers",   icon: EyeIcon,         getValue: (s) => s.watchers },
];

// ─── Skeleton ─────────────────────────────────────────────────────────────────

const Skeleton = ({ tall = false }: { tall?: boolean }) => (
    <div className={`animate-pulse border border-(--border) bg-(--surface) p-8 ${tall ? "min-h-[200px]" : ""}`}>
        <div className="mb-5 flex items-center gap-3">
            <div className="h-4 w-4 rounded bg-(--border)" />
            <div className="h-3 w-24 rounded bg-(--border)" />
        </div>
        <div className={`rounded bg-(--border) ${tall ? "h-16 w-3/5" : "h-10 w-2/5"}`} />
    </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

const GithubStats = () => {
    const { stats, loading, error } = useGithubStats();

    return (
        <section id="github" className="bg-(--background) py-32 text-(--text-primary)">
            <div className="mx-auto max-w-7xl px-5">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-(--primary)">
                            <HugeiconsIcon
                                icon={GithubIcon}
                                size={14}
                                color="currentColor"
                                strokeWidth={1.5}
                            />
                            <span className="font-mono text-xs uppercase tracking-[0.3em]">
                                GitHub Activity
                            </span>
                        </div>
                        <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                            Code by the numbers.
                        </h2>
                    </div>

                    <p className="max-w-xs text-sm leading-relaxed text-(--text-secondary)">
                        Live stats pulled directly from the GitHub API — refreshed on every visit.
                    </p>
                </motion.div>

                {/* Animated rule */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "left" }}
                    className="mb-12 h-px w-full bg-(--border)"
                />

                {/* Error */}
                {error && (
                    <p className="py-10 font-mono text-sm text-(--error)">
                        — Failed to load GitHub statistics.
                    </p>
                )}

                {/* Skeletons */}
                {loading && !error && (
                    <div className="space-y-3">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <Skeleton tall />
                            <Skeleton tall />
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)}
                        </div>
                    </div>
                )}

                {/* Live stats */}
                {stats && (
                    <>
                        {/* Featured — Repositories + Stars */}
                        <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {FEATURED.map((cfg, i) => (
                                <motion.div
                                    key={cfg.label}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative overflow-hidden border border-(--border) bg-(--surface) p-10 transition-colors duration-300 hover:border-(--primary)"
                                >
                                    <div className="mb-7 flex items-center gap-2.5 text-(--text-secondary) transition-colors duration-200 group-hover:text-(--primary)">
                                        <HugeiconsIcon
                                            icon={cfg.icon}
                                            size={16}
                                            color="currentColor"
                                            strokeWidth={1.5}
                                        />
                                        <span className="font-mono text-xs uppercase tracking-[0.25em]">
                                            {cfg.label}
                                        </span>
                                    </div>

                                    <p className="font-mono text-7xl font-semibold tabular-nums text-(--primary) md:text-8xl">
                                        <AnimatedNumber value={cfg.getValue(stats)} />
                                    </p>

                                    {/* Corner glow */}
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.14]"
                                        style={{
                                            background:
                                                "radial-gradient(circle at 100% 100%, var(--primary), transparent 70%)",
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Secondary — Forks, Followers, Following, Watchers */}
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            {SECONDARY.map((cfg, i) => (
                                <motion.div
                                    key={cfg.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                    viewport={{ once: true }}
                                    className="group border border-(--border) bg-(--surface) p-6 transition-colors duration-300 hover:border-(--primary)"
                                >
                                    <div className="mb-4 flex items-center gap-2 text-(--text-secondary) transition-colors duration-200 group-hover:text-(--primary)">
                                        <HugeiconsIcon
                                            icon={cfg.icon}
                                            size={14}
                                            color="currentColor"
                                            strokeWidth={1.5}
                                        />
                                        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                                            {cfg.label}
                                        </span>
                                    </div>

                                    <p className="font-mono text-4xl font-semibold tabular-nums text-(--text-primary)">
                                        <AnimatedNumber value={cfg.getValue(stats)} />
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}

                {/* Footer link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <a
                        href="https://github.com/britinogn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-(--text-secondary) transition-colors hover:text-(--primary)"
                    >
                        <span>View GitHub Profile</span>
                        <HugeiconsIcon
                            icon={ArrowUpRight01Icon}
                            size={13}
                            color="currentColor"
                            strokeWidth={1.5}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default GithubStats;