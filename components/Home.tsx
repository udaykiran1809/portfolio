import React, { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Home: React.FC = () => {
  // --- Continuous Typing Loop Logic ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = "Bridging Cybersecurity and AI through Research";
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

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl w-full text-center">
        <img
          src="profile.jpg"
          alt={portfolioData.name}
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mx-auto mb-6 shadow-lg border-4 border-white"
        />
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

        <p className="mt-6 text-lg text-slate-500 font-medium">
          PhD Researcher at Auburn University · RFID Lab
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-sm hover:bg-blue-700 hover:shadow-md transition-all"
          >
            <Download size={18} />
            Download Resume
          </a>
          {portfolioData.social.email && (
            <a
              href={`mailto:${portfolioData.social.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;