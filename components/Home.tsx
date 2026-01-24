import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Briefcase, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HomeProps {
  onNavigate: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // --- Continuous Typing Loop Logic ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = "Developer, Researcher and Engineer";
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseTime = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && text === fullText) {
      // Finished typing. Wait, then start deleting.
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && text === '') {
      // Finished deleting. Wait, then start typing again.
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      // Typing or deleting character by character
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setText(currentText => {
          if (isDeleting) {
            return fullText.substring(0, currentText.length - 1);
          } else {
            return fullText.substring(0, currentText.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);
  // ------------------------------------

  const tabs = [
    { id: 'about', label: 'About Me', icon: User, desc: 'My background & skills' },
    { id: 'experience', label: 'Experience', icon: Briefcase, desc: 'My professional journey' },
    { id: 'papers', label: 'Papers Published', icon: FileText, desc: 'Research & publications' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl w-full text-center mb-16">
        <div className="inline-block p-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 tracking-wide uppercase shadow-sm">
          Welcome to my portfolio
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8">
          Hi, I'm <span className="text-blue-600">{portfolioData.name.split(' ')[0]}</span>.
        </h1>
        
        {/* Animated Text Section */}
        <p className="text-xl md:text-3xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium min-h-[40px]">
          {text}
          <span className="animate-pulse text-blue-600">|</span>
        </p>

        {/* 👇 Added the new text here */}
        <p className="mt-8 text-lg text-slate-500 font-medium">
          Feel free to go around the profile.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between h-48 md:h-56"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-blue-600" />
            </div>
            <div className="p-3 bg-blue-50 w-fit rounded-xl text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <tab.icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                {tab.label}
              </h3>
              <p className="text-slate-500 text-sm">
                {tab.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Home;