import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0 order-last lg:order-first">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
              <img 
                src="profile.jpg" 
                alt="Profile" 
                className="relative rounded-2xl shadow-xl w-full aspect-square object-cover" 
              />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-6 leading-relaxed">
                {portfolioData.about}
              </p>
              {/* <p className="mb-6 leading-relaxed">
                I strongly believe in continuous learning and adapting to the latest industry trends. My goal is to create software that not only solves problems but also provides an enjoyable experience for the end-user.
              </p> */}
            </div>
            
            {/* <div className="mt-8">
                <h3 className="font-semibold text-slate-900 text-lg mb-4">Core Focus</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">Frontend Architecture</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">User Experience</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">Performance Optimization</span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">System Design</span>
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;