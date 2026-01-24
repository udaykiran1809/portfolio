import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Papers from './components/Papers';
// Removed Blog import
import Footer from './components/Footer';
import Education from './components/Education';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} />;
      case 'about':
        return (
            <div className="pt-16">
                <About />
                <Education />
                {/* <Skills />
                <Projects /> */}
            </div>
        );
      case 'experience':
        return (
            <div className="pt-16">
                <Experience />
            </div>
        );
      case 'papers':
        return (
            <div className="pt-16">
                <Papers />
            </div>
        );
      // Removed case 'blog'
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Only show Navbar if NOT on home page */}
      {currentView !== 'home' && (
        <Navbar currentView={currentView} onNavigate={setCurrentView} />
      )}
      
      <main>
        {renderView()}
      </main>
      
      {currentView !== 'home' && <Footer />}
    </div>
  );
};

export default App;