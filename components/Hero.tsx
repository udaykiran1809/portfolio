import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-block p-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 tracking-wide uppercase">
        Available for new opportunities
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
        Hi, I'm <span className="text-blue-600">{portfolioData.name.split(' ')[0]}</span>.
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
        {portfolioData.title}. Building digital experiences with modern technologies and a focus on user experience.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#projects"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
        >
          View My Work
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
        <a 
          href={portfolioData.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
        >
          LinkedIn Profile
          <Download className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;