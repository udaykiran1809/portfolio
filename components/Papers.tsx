import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Papers: React.FC = () => {
  // Helper function to highlight specific author name
  const renderAuthors = (authorsString: string) => {
    if (!authorsString) return null;
    
    const myName = "Uday Kiran Kothapalli"; // The name to highlight
    const authors = authorsString.split(',').map(a => a.trim());

    return (
      <p className="text-slate-600 mb-2">
        {authors.map((author, index) => (
          <React.Fragment key={index}>
            {author === myName ? (
              // Highlighting style: Bold + Darker Color + Subtle Underline
              <span className="font-bold text-slate-900 border-b-2 border-blue-100">
                {author}
              </span>
            ) : (
              <span>{author}</span>
            )}
            {/* Add comma if it's not the last author */}
            {index < authors.length - 1 && ", "}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Papers Published</h2>
          <p className="mt-2 text-lg text-slate-600">My research and academic contributions.</p>
        </div>

        <div className="space-y-6">
          {portfolioData.papers.map((paper, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{paper.title}</h3>
                  
                  {/* Render the authors with highlighting */}
                  {renderAuthors(paper.authors)}
                  
                  <div className="flex flex-wrap gap-2 text-sm text-slate-500 mb-4">
                    <span className="font-medium text-blue-600">{paper.publication}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                  </div>
                  {paper.abstract && (
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {paper.abstract}
                    </p>
                  )}
                </div>
                {paper.link && (
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Read Paper
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                )}
              </div>
            </div>
          ))}

          {portfolioData.papers.length === 0 && (
             <div className="text-center py-12 text-slate-500">
                No published papers listed yet.
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Papers;