// GitHubRepoStats.tsx
import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  url: string;
}

interface GitHubRepoStatsProps {
  username: string;
}

const GitHubRepoStats: React.FC<GitHubRepoStatsProps> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const contributionGraphURL = `https://ghchart.rshah.org/${username}`;

  // Fetch the list of repos
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        const reposData = data.map((repo: any) => ({
          name: repo.name,
          url: repo.html_url,
        }));
        setRepos(reposData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching repositories');
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) {
    return <div>Loading repositories...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="github-repo-stats-container">
    <div className="contribution-graph">
      <h2>🔥 GitHub Contribution Graph</h2>
      <img 
        src={contributionGraphURL}
        alt={`${username}'s GitHub Contribution Graph`}
        className="contribution-grid"
      />
    </div>
      {/* Display Multiple Repos */}
      <h3>More Projects</h3>
      <div className="github-repos-list">
        {repos.map((repo) => (
          <div className="github-repo-card" key={repo.name}>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo.name}`}
                alt={`GitHub Repo Card: ${repo.name}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepoStats;
