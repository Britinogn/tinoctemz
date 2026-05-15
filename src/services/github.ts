const username = import.meta.env.VITE_GITHUB_USERNAME || "britinogn";
const token = import.meta.env.VITE_GITHUB_TOKEN || "";

const getHeaders = (): HeadersInit => {
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
};

// ─── REST ─────────────────────────────────────────────────────────────────────

export const fetchGithubProfile = async () => {
    const res = await fetch(
        `https://api.github.com/users/${username}`,
        { headers: getHeaders() }
    );
    if (!res.ok) throw new Error("Failed to fetch GitHub profile");
    return res.json();
};

export const fetchGithubRepos = async () => {
    const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        { headers: getHeaders() }
    );
    if (!res.ok) throw new Error("Failed to fetch repositories");
    return res.json();
};

// ─── GraphQL (contributions + streak — requires token) ────────────────────────

interface ContributionDay {
    contributionCount: number;
    date: string;
}

interface ContributionsData {
    totalContributions: number;
    streak: number;
}

export const fetchContributions = async (): Promise<ContributionsData | null> => {
    if (!token) return null;

    const query = `
        query {
            user(login: "${username}") {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                contributionCount
                                date
                            }
                        }
                    }
                }
            }
        }
    `;

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            ...getHeaders(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) return null;

    const json = await res.json();
    const calendar =
        json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) return null;

    const totalContributions: number = calendar.totalContributions;

    // Flatten all days, sort descending, calculate current streak
    const days: ContributionDay[] = calendar.weeks
        .flatMap((w: { contributionDays: ContributionDay[] }) => w.contributionDays)
        .sort(
            (a: ContributionDay, b: ContributionDay) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        );

    let streak = 0;
    for (const day of days) {
        if (day.contributionCount > 0) {
            streak++;
        } else {
            // Allow today to be 0 (day hasn't ended yet) — only break on past days
            const isToday =
                new Date(day.date).toDateString() === new Date().toDateString();
            if (!isToday) break;
        }
    }

    return { totalContributions, streak };
};