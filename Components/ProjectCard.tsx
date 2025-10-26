
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20 transform hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
        <img className="w-full h-48 object-cover flex-shrink-0" src={project.imageUrl} alt={project.title} />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;