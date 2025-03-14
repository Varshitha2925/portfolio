// GitHubStats.tsx
import React from 'react';

interface GitHubStatsProps {
  username: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username }) => {
  return (
    <div className="github-stats-container">
      {/* GitHub Profile Badge */}
      <div className="github-profile-badge">
        <h3>GitHub Profile</h3>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://img.shields.io/github/followers/${username}?label=Follow&style=social`}
            alt="GitHub Profile Badge"
          />
        </a>
      </div>

      {/* GitHub Stats */}
      <div className="github-stats">
        <h3>GitHub Stats</h3>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_title=true`}
            alt="GitHub Stats"
          />
        </a>
      </div>

      {/* GitHub Top Languages */}
      <div className="github-top-languages">
        <h3>Top Languages</h3>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`}
            alt="Top Languages"
          />
        </a>
      </div>

      {/* GitHub Streak (Green color for activity) */}
      <div className="github-streak">
        <h3>GitHub Streak</h3>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}`}
            alt="GitHub Streak"
          />
        </a>
      </div>

      {/* GitHub Contribution Graph (Green color for commits) */}
      {/* <div className="github-contribution-graph">
        <h3>GitHub Contribution Graph</h3>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://github-readme-activity-graph.cyclic.app/graph/?username=${username}&bg_color=ffffff&color=36d7b7&line=36d7b7&point=36d7b7&area=true&area_color=4a9999`}
            alt="GitHub Contribution Graph"
          />
        </a>
      </div> */}
    </div>
  );
};

export default GitHubStats;
