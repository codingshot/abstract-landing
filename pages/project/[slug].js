import React from 'react';
import { useRouter } from 'next/router';
import projects from '../../data/projects.json';
import { slugify } from '../../utils/slugify';
import Skeleton from 'react-loading-skeleton';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find(p => slugify(p.projectName) === slug);

  if (!project) {
    return <div>No project found</div>;
  }

  return (
    <div className="project-page">
      <nav className="breadcrumbs">
        <a href="/">🏠 Home</a> / <span>{project.projectName}</span>
      </nav>
      <h1>{project.projectName || <Skeleton />}</h1>
      <p>{project.projectDescription || <Skeleton count={3} />}</p>
      {project.bannerUrl && <img src={project.bannerUrl} alt={`${project.projectName} banner`} />}
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectPage;