import React from 'react';
import { Link } from 'react-router-dom';

import projects from '../data/projects.json';

function Projects() {
  return (
    <div>
      {projects.map(project => (
        <Link
          key={project.id}
          style={{
            background: project.bg_color,
            color: project.text_color
          }}
          className="app-link"
          to={project.href}
        >
          {project.title}
        </Link>
      ))}
    </div>
  );
}

export default Projects;