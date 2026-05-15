import { useEffect, useState } from "react";
import {
    fetchGithubProfile,
    fetchGithubRepos,
} from "@/services/github";

interface GithubStats {
    followers: number;
    following: number;
    repos: number;
    stars: number;
    forks: number;
    watchers: number;
}

interface GithubRepo {
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
}

const useGithubStats = () => {
    const [stats, setStats] = useState<GithubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadGithubStats = async () => {
            try {
                setLoading(true);

                const [profile, repos] = await Promise.all([
                    fetchGithubProfile(),
                    fetchGithubRepos(),
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

                setStats({
                    followers: profile.followers,
                    following: profile.following,
                    repos: profile.public_repos,
                    stars: totalStars,
                    forks: totalForks,
                    watchers: totalWatchers,
                });
            } catch {
                setError("Failed to load GitHub stats");
            } finally {
                setLoading(false);
            }
        };

        loadGithubStats();
    }, []);

    return {
        stats,
        loading,
        error,
    };
};

export default useGithubStats;