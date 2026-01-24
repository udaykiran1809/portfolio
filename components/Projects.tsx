import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-600">Some of the things I've built.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                <div className="flex gap-2">
                    {/* These are placeholder links as they weren't in the provided data structure mostly, but good for UI */}
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                        <Github size={20} />
                    </button>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
              </div>
              <p className="text-slate-600 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;