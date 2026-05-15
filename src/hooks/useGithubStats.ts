import { useEffect, useState } from "react";
import {
    fetchGithubProfile,
    fetchGithubRepos,
    fetchContributions,
} from "@/services/github";

interface GithubStats {
    followers: number;
    following: number;
    repos: number;
    stars: number;
    forks: number;
    watchers: number;
    contributions: number | null; // null = no token / unavailable
    streak: number | null;
    languages: number;
}

interface GithubRepo {
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    language: string | null;
}

const useGithubStats = () => {
    const [stats, setStats] = useState<GithubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);

                const [profile, repos, contributions] = await Promise.all([
                    fetchGithubProfile(),
                    fetchGithubRepos(),
                    fetchContributions(),
                ]);

                const totalStars = repos.reduce(
                    (acc: number, repo: GithubRepo) => acc + repo.stargazers_count,
                    0
                );
                const totalForks = repos.reduce(
                    (acc: number, repo: GithubRepo) => acc + repo.forks_count,
                    0
                );
                const totalWatchers = repos.reduce(
                    (acc: number, repo: GithubRepo) => acc + repo.watchers_count,
                    0
                );
                const uniqueLanguages = new Set(
                    repos
                        .map((r: GithubRepo) => r.language)
                        .filter(Boolean)
                ).size;

                setStats({
                    followers: profile.followers,
                    following: profile.following,
                    repos: profile.public_repos,
                    stars: totalStars,
                    forks: totalForks,
                    watchers: totalWatchers,
                    contributions: contributions?.totalContributions ?? null,
                    streak: contributions?.streak ?? null,
                    languages: uniqueLanguages,
                });
            } catch {
                setError("Failed to load GitHub stats");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    return { stats, loading, error };
};

export default useGithubStats;