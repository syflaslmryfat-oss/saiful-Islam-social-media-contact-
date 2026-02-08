
import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, SOCIAL_LINKS } from './constants';
import LinkCard from './components/LinkCard';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-12 px-6">
      <div className={`w-full max-w-[440px] transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="relative mb-8 group">
            {/* Pulsing Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl opacity-50 animate-pulse" />
            
            {/* Profile Frame */}
            <div className="relative w-40 h-40 rounded-full p-1.5 bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900/50 bg-slate-800">
                <img 
                  src={PROFILE_DATA.avatarUrl} 
                  alt={PROFILE_DATA.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if the user hasn't added profile.jpg yet
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Saiful+Islam+Rifat&background=0D8ABC&color=fff&size=512";
                  }}
                />
              </div>
            </div>

            {/* Availability Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full ultra-glass border border-white/20 text-[11px] font-bold text-white flex items-center gap-2 shadow-2xl backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
              {PROFILE_DATA.status}
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-lg font-medium text-sky-400/90 mb-5">
            {PROFILE_DATA.title}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[340px] mx-auto opacity-90 px-4">
            {PROFILE_DATA.bio}
          </p>
        </div>

        {/* Links Stack */}
        <div className="space-y-4 mb-14">
          {SOCIAL_LINKS.map((link, index) => (
            <div 
              key={link.id} 
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
            >
              <LinkCard 
                platform={link.platform}
                handle={link.handle}
                url={link.url}
                description={link.description}
                icon={link.icon}
                color={link.color}
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mb-16">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: PROFILE_DATA.name,
                  text: `Connect with ${PROFILE_DATA.name}`,
                  url: window.location.href
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Profile link copied!');
              }
            }}
            className="w-full py-4 rounded-2xl bg-white text-black font-bold text-base transition-all hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Share Professional Profile
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center space-y-6 pb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full ultra-glass border border-white/5">
            <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">Verified Contact</span>
            <div className="w-4 h-4 text-blue-500">
               <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-slate-600 text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">
            Powered by Gemini AI • 2024
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
