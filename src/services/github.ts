const username = import.meta.env.VITE_GITHUB_USERNAME || "britinogn";
const token = import.meta.env.VITE_GITHUB_TOKEN || "";

const getHeaders = (): HeadersInit => {
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
};

export const fetchGithubProfile = async () => {
    const response = await fetch(
        `https://api.github.com/users/${username}`,
        { headers: getHeaders() }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub profile");
    }

    return response.json();
};

export const fetchGithubRepos = async () => {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        { headers: getHeaders() }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch repositories");
    }

    return response.json();
};