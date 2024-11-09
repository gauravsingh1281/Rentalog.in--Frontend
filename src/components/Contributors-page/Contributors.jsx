import React, { useEffect, useState } from 'react';
import './Contributors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CountUp from 'react-countup';
import axios from 'axios';
const Contributors = () => {
  const [contributors, setContributors] = useState([])
  const [repoStats, setRepoStats] = useState({})
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    try {
      let allContributors = [];
      let page = 1;
      // Fetch contributors with pagination
      while (true) {
        const contributorsResponse = await fetch(
          `https://api.github.com/repos/gauravsingh1281/Rentalog.in--Frontend/contributors?per_page=100&page=${page}`
        );
        const contributorsData = await contributorsResponse.json();
        if (contributorsData.length === 0) break;
        allContributors = [...allContributors, ...contributorsData];
        page++;
      }

      const repoResponse = await fetch(
        'https://api.github.com/repos/gauravsingh1281/Rentalog.in--Frontend'
      );
      const repoData = await repoResponse.json();

      setContributors(allContributors);
      setRepoStats(repoData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setContributors([]);
      setRepoStats({});
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData()
  }, [])

  const renderStats = () => {
    const contributorsCount = contributors.length
    const stats = [
      { label: 'Contributors', value: contributorsCount, icon: 'users' },
      {
        label: 'Total Contributions',
        value:
          contributors.reduce(
            (sum, contributor) => sum + contributor.contributions,
            0
          ) || 0,
        icon: 'git-commit',
      },
      {
        label: 'GitHub Stars',
        value: repoStats.stargazers_count || 0,
        icon: 'star',
      },
      {
        label: 'Forks',
        value: repoStats.forks_count || 0,
        icon: 'git-branch',
      },
    ]

    return (
      <div className="contributor-stats-grid" id="statsGrid">
        {stats.map((stat) => (
          <div className="contributor-stat-card" key={stat.label}>
            <div
              className="contributor-icon"
              dangerouslySetInnerHTML={{
                __html: getIcon(stat.icon),
              }}
            />
            <h3>
              <CountUp
                start={0}
                end={stat.value}
                duration={3}
                separator=","
              />
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    )
  }

  const renderContributors = () => {
    return (
      <div
        className="contributor-contributors-grid"
        id="contributorsGrid"
      >
        {contributors.map((contributor) => (
          <div
            className="contributor-contributor-card"
            key={contributor.login}
          >
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
            />
            <h3>{contributor.login}</h3>
            <p>{contributor.type}</p>
            <div className="contributor-contributions">
              {contributor.contributions} Contributions
            </div>
            <div className="contributor-footer">
      {/* Contributors Grid */}

      
      <div className="flex flex-wrap justify-center gap-8 ">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : contributors.length > 0 ? (
          contributors.map((contributor) => (
            <div key={contributor.id} className="flex justify-center flex-col items-center p-3 bg-black">
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="h-20 w-20 rounded-full border-2 border-textWhite "
              />
              <a
                href={contributor.html_url}
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
              <h2 className="">{contributor.login}</h2>
              <p className="">
                Contributions: {contributor.contributions}
              </p>
            </div>
          ))
        ) : (
          <p>No contributors found.</p>
        )}
      </div>




      <div className="contributors-grid">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : contributors.length > 0 ? (
          contributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card">
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon('external-link')}
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {getIcon('github')}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const getIcon = (name) => {
    const icons = {
      //    svg icons
    }
    return icons[name] || ''
  }

  return (
    <>
      <section className="contributor-header">
        <div className="contributor-contributors">
          {loading ? (
            <div id="loading" className="contributor-loading"></div>
          ) : (
            <>
              <h2 className="text-green-500">
                Project Statistics
              </h2>
              {renderStats()}
              <h2 className="text-green-700">
                Meet Our Contributors
              </h2>
              {renderContributors()}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Contributors