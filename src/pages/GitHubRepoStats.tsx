// GitHubRepoStats.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Repo {
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}

interface GitHubRepoStatsProps {
  username: string;
}

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  width: 100vw;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
    background-repeat: repeat;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #4a5568;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const ContributionContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 20px;
    margin-bottom: 2rem;
  }
`;

const ContributionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const ContributionGraph = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const ReposTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ReposGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const RepoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: rgba(231, 111, 81, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 16px;
  }
`;

const RepoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const RepoName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const RepoLanguage = styled.span`
  background: rgba(231, 111, 81, 0.1);
  color: #e76f51;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(231, 111, 81, 0.2);
`;

const RepoDescription = styled.p`
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const RepoStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #718096;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: #4a5568;
`;

const LoadingSpinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(231, 111, 81, 0.2);
  border-top: 3px solid #e76f51;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ErrorContainer = styled.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #dc2626;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  margin: 2rem auto;
  max-width: 500px;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingCircle = styled(motion.div)<{ size: number; top: string; left: string; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: 0.08;
  filter: blur(2px);
`;

const GitHubRepoStats: React.FC<GitHubRepoStatsProps> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const contributionGraphURL = `https://ghchart.rshah.org/${username}`;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        const reposData = data.map((repo: any) => ({
          name: repo.name,
          url: repo.html_url,
          description: repo.description || 'No description available',
          language: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (loading) {
    return (
      <Section>
        <LoadingContainer>
          <LoadingSpinner
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p>Loading repositories...</p>
        </LoadingContainer>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <Container>
          <ErrorContainer>{error}</ErrorContainer>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="github">
      <FloatingElements>
        <FloatingCircle
          size={80}
          top="15%"
          left="10%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <FloatingCircle
          size={60}
          top="75%"
          left="85%"
          color="linear-gradient(135deg, #f4a261 0%, #e9c46a 100%)"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </FloatingElements>

      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          GitHub Activity
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A glimpse into my coding journey and open source contributions
        </SectionSubtitle>

        <ContributionContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContributionTitle>
            🔥 My Coding Footprints
          </ContributionTitle>
          <ContributionGraph 
            src={contributionGraphURL}
            alt={`${username}'s GitHub Contribution Graph`}
          />
        </ContributionContainer>

        <ReposTitle>Recent Projects</ReposTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ReposGrid>
            {repos.map((repo) => (
              <RepoCard
                key={repo.name}
                variants={itemVariants}
                onClick={() => window.open(repo.url, '_blank')}
              >
                <RepoHeader>
                  <RepoName>{repo.name}</RepoName>
                  <RepoLanguage>{repo.language}</RepoLanguage>
                </RepoHeader>
                <RepoDescription>{repo.description}</RepoDescription>
                <RepoStats>
                  <StatItem>
                    ⭐ {repo.stars}
                  </StatItem>
                  <StatItem>
                    🍴 {repo.forks}
                  </StatItem>
                </RepoStats>
              </RepoCard>
            ))}
          </ReposGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default GitHubRepoStats;
