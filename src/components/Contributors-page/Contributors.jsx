import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import "./Contributors.css";

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [repoStats, setRepoStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContributor, setSelectedContributor] = useState(null);
  const certificateRef = useRef(null);

  useEffect(() => {
    async function fetchContributors() {
      let allContributors = [];
      let page = 1;

      try {
        while (true) {
          const response = await axios.get(
            `https://api.github.com/repos/gauravsingh1281/Rentalog.in--Frontend/contributors`,
            {
              params: { per_page: 100, page },
            }
          );
          const data = response.data;
          if (data.length === 0) break;
          allContributors = [...allContributors, ...data];
          page++;
        }
        setContributors(allContributors);
      } catch (error) {
        console.error("Error fetching contributors:", error.message);
        setError("Failed to load contributors. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    async function fetchRepoStats() {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/gauravsingh1281/Rentalog.in--Frontend`
        );
        setRepoStats(response.data);
      } catch (error) {
        console.error("Error fetching repository stats:", error.message);
        setError("Failed to load repository stats. Please try again later.");
      }
    }

    fetchContributors();
    fetchRepoStats();
  }, []);

  const totalContributions = contributors.reduce(
    (sum, contributor) => sum + contributor.contributions,
    0
  );

  const downloadCertificate = useCallback(() => {
    if (!selectedContributor || !certificateRef.current) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const width = 800;
    const height = 600;
    canvas.width = width;
    canvas.height = height;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#1a1a2e");
    gradient.addColorStop(0.5, "#16213e");
    gradient.addColorStop(1, "#0f3460");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "#e94560";
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    ctx.fillStyle = "#e94560";
    ctx.font = "bold 36px serif";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Contribution", width / 2, 100);

    ctx.fillStyle = "#ffffff";
    ctx.font = "18px sans-serif";
    ctx.fillText("This certifies that", width / 2, 170);

    ctx.fillStyle = "#f5c518";
    ctx.font = "bold 32px serif";
    ctx.fillText(selectedContributor.login, width / 2, 230);

    ctx.fillStyle = "#ffffff";
    ctx.font = "18px sans-serif";
    ctx.fillText(
      "has made valuable contributions to",
      width / 2,
    280
    );

    ctx.fillStyle = "#4facfe";
    ctx.font = "bold 24px sans-serif";
    ctx.fillText("Rentalog.in", width / 2, 330);

    ctx.fillStyle = "#cccccc";
    ctx.font = "16px sans-serif";
    ctx.fillText(
      `${selectedContributor.contributions} contribution(s)`,
      width / 2,
      380
    );

    ctx.fillStyle = "#aaaaaa";
    ctx.font = "14px sans-serif";
    ctx.fillText(
      `Repository: gauravsingh1281/Rentalog.in--Frontend`,
      width / 2,
      430
    );

    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    ctx.fillText(`Date: ${date}`, width / 2, 470);

    ctx.fillStyle = "#e94560";
    ctx.font = "14px sans-serif";
    ctx.fillText(
      "Thank you for your contribution!",
      width / 2,
      530
    );

    const link = document.createElement("a");
    link.download = `certificate-${selectedContributor.login}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [selectedContributor]);

  return (
    <div className="contributors-container">
      <h1 className="contributors-title">Our Contributors</h1>

      {/* Stats Section */}
      <div className="repo-stats-section">
        <div className="repo-stat">
          <h3>Total Contributors</h3>
          <p>{contributors.length}</p>
        </div>
        <div className="repo-stat">
          <h3>Total Contributions</h3>
          <p>{totalContributions}</p>
        </div>
        <div className="repo-stat">
          <h3>GitHub Stars</h3>
          <p>{repoStats.stargazers_count || 0}</p>
        </div>
        <div className="repo-stat">
          <h3>Forks</h3>
          <p>{repoStats.forks_count || 0}</p>
        </div>
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
                className="contributor-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="contributor-avatar"
                />
              </a>
              <h2 className="contributor-name">{contributor.login}</h2>
              <p className="contributor-contributions">
                Contributions: {contributor.contributions}
              </p>
              <button
                className="certificate-btn"
                onClick={() => setSelectedContributor(contributor)}
              >
                Get Certificate
              </button>
            </div>
          ))
        ) : (
          <p>No contributors found.</p>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedContributor && (
        <div className="certificate-overlay" onClick={() => setSelectedContributor(null)}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <div ref={certificateRef} className="certificate-content">
              <div className="certificate-border">
                <div className="certificate-inner">
                  <h1 className="certificate-title">Certificate of Contribution</h1>
                  <p className="certificate-subtitle">This certifies that</p>
                  <h2 className="certificate-name">{selectedContributor.login}</h2>
                  <p className="certificate-desc">
                    has made valuable contributions to
                  </p>
                  <h3 className="certificate-project">Rentalog.in</h3>
                  <p className="certificate-stats">
                    {selectedContributor.contributions} contribution(s)
                  </p>
                  <p className="certificate-repo">
                    Repository: gauravsingh1281/Rentalog.in--Frontend
                  </p>
                  <p className="certificate-date">
                    Date: {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="certificate-footer">
                    Thank you for your contribution!
                  </p>
                </div>
              </div>
            </div>
            <div className="certificate-actions">
              <button className="certificate-download-btn" onClick={downloadCertificate}>
                Download Certificate
              </button>
              <button
                className="certificate-close-btn"
                onClick={() => setSelectedContributor(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contributors;