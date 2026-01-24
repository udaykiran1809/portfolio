import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-lg text-slate-600">Technologies I work with.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;