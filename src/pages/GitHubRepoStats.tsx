// GitHubRepoStats.tsx
import React from 'react';

interface GitHubRepoStatsProps {
  username: string;
  repo: string; // The repository you want to showcase
}

const GitHubRepoStats: React.FC<GitHubRepoStatsProps> = ({ username, repo }) => {
  return (
    <div className="github-repo-stats-container">
      {/* GitHub Contribution Graph */}
      <div className="github-contribution-graph">
        <h3>GitHub Contribution Graph</h3>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://github-readme-stats.vercel.app/api/fg?username=${username}`}
            alt="GitHub Contribution Graph"
          />
        </a>
      </div>

      {/* GitHub Repo Card */}
      <div className="github-repo-card">
        <h3>GitHub Repository: {repo}</h3>
        <a href={`https://github.com/${username}/${repo}`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}`}
            alt={`GitHub Repo Card: ${repo}`}
          />
        </a>
      </div>
    </div>
  );
};

export default GitHubRepoStats;
