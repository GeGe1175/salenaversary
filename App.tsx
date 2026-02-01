
import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import AnniversaryTimer from './components/AnniversaryTimer';
import Timeline from './components/Timeline';
import { INITIAL_MILESTONES, INITIAL_MEMORIES } from './constants';

const App: React.FC = () => {
  // Configuration for the user
  const [config] = useState({
    partnerName: "Salena",
    userName: "Jeffery",
    startDate: new Date('2025-02-02T00:00:00'),
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-rose-200 relative overflow-x-hidden">
      <FloatingHearts />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-romantic text-2xl text-rose-600 font-bold">lil tweaker</span>
          <div className="flex gap-6 text-rose-700 font-medium text-sm md:text-base">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="hover:text-rose-500 transition-colors cursor-pointer"
            >Home</a>
            <a 
              href="#story" 
              onClick={(e) => scrollToSection(e, 'story')}
              className="hover:text-rose-500 transition-colors cursor-pointer"
            >Story</a>
            <a 
              href="#gallery" 
              onClick={(e) => scrollToSection(e, 'gallery')}
              className="hover:text-rose-500 transition-colors cursor-pointer"
            >Memories</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-romantic-gradient -z-10"></div>
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-float mb-8 inline-block">
            <span className="text-6xl">🌹</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-romantic text-rose-900 mb-6 drop-shadow-sm">
            Happy Anniversary, {config.partnerName}!
          </h1>
          <p className="text-xl md:text-2xl font-serif-elegant text-rose-700 mb-12 italic leading-relaxed">
            I really enjoyed being with you 
          </p>
          
          <AnniversaryTimer startDate={config.startDate} />
          
          <div className="mt-16 animate-bounce">
            <a 
              href="#story" 
              onClick={(e) => scrollToSection(e, 'story')}
              className="text-rose-300 hover:text-rose-500 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Timeline Section */}
      <Timeline milestones={INITIAL_MILESTONES} />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif-elegant text-rose-900 text-center mb-16">
            Capturing Our Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_MEMORIES.map((memory) => (
              <div key={memory.id} className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg transform hover:scale-[1.03] transition-all duration-500">
                <img 
                  src={memory.url} 
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-xl font-romantic">{memory.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-rose-100 py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="font-romantic text-4xl mb-6">Always & Forever</div>
          <p className="font-serif-elegant italic text-rose-200 mb-8 leading-relaxed">
            "Grow old along with me! The best is yet to be."
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <span className="text-4xl">❤️</span>
            <span className="text-4xl">🥂</span>
            <span className="text-4xl">✨</span>
          </div>
          <p className="text-rose-400 text-xs tracking-widest uppercase">
            Made with love by {config.userName} • Anniversary {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
