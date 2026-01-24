import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Blog: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Blog</h2>
          <p className="mt-2 text-lg text-slate-600">Thoughts, tutorials, and insights.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.blog.map((post, index) => (
            <article key={index} className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                    </div>
                    <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                    {post.excerpt}
                </p>
                <a 
                    href={post.link || '#'} 
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
                >
                    Read Article
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
          
           {portfolioData.blog.length === 0 && (
             <div className="col-span-2 text-center py-12 text-slate-500">
                No blog posts available yet.
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;