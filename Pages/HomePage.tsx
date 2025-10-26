
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { SKILLS, PROJECTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
          Sayandip Ghosh
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
          Junior Data Scientist and UI/UX Enthusiast
        </p>
      </section>

      {/* Skills Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-emerald-500 dark:border-emerald-400 pb-2 inline-block">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill) => (
            <div key={skill} className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg shadow-sm hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors duration-300 cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-center mb-8 border-b-2 border-emerald-500 dark:border-emerald-400 pb-2 inline-block">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;