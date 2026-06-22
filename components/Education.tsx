import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Education</h2>
          <p className="mt-4 text-lg text-slate-600">My academic background.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                    <div className="flex items-center text-blue-600 mt-2 mb-4">
                        <GraduationCap size={20} className="mr-2" />
                        <span className="font-medium">{edu.degree}</span>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full">
                        {edu.period}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;