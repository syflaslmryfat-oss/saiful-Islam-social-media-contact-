
import React from 'react';

interface LinkCardProps {
  platform: string;
  handle: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ platform, handle, url, description, icon, color }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full ultra-glass rounded-2xl p-4 flex items-center transition-all duration-500 transform hover:-translate-y-1 hover:bg-white/5"
    >
      {/* Dynamic Border Glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />
      
      <div 
        className="relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      
      <div className="relative ml-5 flex-grow overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-0.5">
            {platform}
          </h3>
          <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Open
          </span>
        </div>
        <p className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors truncate">
          {handle}
        </p>
        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
          {description}
        </p>
      </div>

      <div className="relative ml-2 flex-shrink-0 text-slate-700 group-hover:text-sky-400 transition-all duration-300 transform group-hover:translate-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </a>
  );
};

export default LinkCard;
