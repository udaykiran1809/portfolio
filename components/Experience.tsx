import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg text-slate-600">My professional journey.</p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 space-y-12">
          {portfolioData.experience.map((job, index) => (
            <div key={index} className="relative pl-8 sm:pl-12">
              <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                  {job.period}
                </span>
              </div>
              <div className="flex items-center text-slate-600 mb-4">
                <Briefcase size={16} className="mr-2" />
                <span className="font-medium">{job.company}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600">
                {job.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;