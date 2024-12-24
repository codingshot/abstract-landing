import React, { useState, useEffect } from 'react';
import { slugify } from '../utils/slugify';

import Head from 'next/head';
import projects from '../data/projects.json';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
    setFilteredProjects(filtered);
  }, [searchTerm, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  return (
    <>
      <Head>
        <title>Chain Abstraction Explorer</title>
        <meta name="description" content="Explore projects, tools, and resources related to blockchain abstraction layers, account abstraction, and cross-chain infrastructure." />
        <meta property="og:title" content="Chain Abstraction Explorer" />
        <meta property="og:description" content="Explore projects, tools, and resources related to blockchain abstraction layers, account abstraction, and cross-chain infrastructure." />
      </Head>
      <div className="container">
        <h1>Chain Abstraction Ecosystem Explorer</h1>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="tags">
          {['Account Abstraction', 'Cross-chain Solutions', 'Infrastructure', 'Developer Tools', 'DApps'].map(tag => (
            <button
              key={tag}
              className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="projects">
          {filteredProjects.map(project => (
            <div key={project.projectName} className="project-card">
              <h2>{project.projectName}</h2>
              <p>{project.projectDescription}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <table className="resources">
          <thead>
            <tr>
              <th>Resource</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Documentation</td>
              <td><a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">docs.example.com</a></td>
            </tr>
            <tr>
              <td>Tutorials</td>
              <td><a href="https://tutorials.example.com" target="_blank" rel="noopener noreferrer">tutorials.example.com</a></td>
            </tr>
            <tr>
              <td>Research Papers</td>
              <td><a href="https://research.example.com" target="_blank" rel="noopener noreferrer">research.example.com</a></td>
            </tr>
            <tr>
              <td>Videos</td>
              <td><a href="https://videos.example.com" target="_blank" rel="noopener noreferrer">videos.example.com</a></td>
            </tr>
            <tr>
              <td>Community Resources</td>
              <td><a href="https://community.example.com" target="_blank" rel="noopener noreferrer">community.example.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="footer">
        Built with ❤️ by <a href="https://potlock.org" target="_blank" rel="noopener noreferrer">Potlock</a>
      </footer>
      <style jsx>{`
        .container {
          padding: 20px;
        }
        .tags {
          margin: 10px 0;
        }
        .tag {
          margin-right: 5px;
          padding: 5px 10px;
          border: 1px solid #ccc;
          cursor: pointer;
        }
        .tag.selected {
          background-color: #0070f3;
          color: white;
        }
        .projects {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        .project-card {
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
          transition: transform 0.2s;
        }
        .project-card:hover {
          transform: scale(1.05);
        }
        .resources {
          margin-top: 20px;
          width: 100%;
          border-collapse: collapse;
        }
        .resources th, .resources td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: left;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          padding: 10px;
          border-top: 1px solid #ccc;
        }
      `}</style>
    </>
  );
};

export default Home;
