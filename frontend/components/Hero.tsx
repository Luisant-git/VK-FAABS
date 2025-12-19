
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Simple, high-quality background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/057/264/731/small/elegant-deep-blue-fabric-elegantly-swirling-in-a-spiral-pattern-photo.JPG" 
          alt="Premium Fabric Texture" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered minimal content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block px-3 md:px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-400">
            Tirupur's Premium Textile Hub
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 md:mb-8">
          Premium Knit Fabrics <br />
          <span className="text-slate-400 font-light">Crafted for Excellence.</span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 font-medium">
          VK FAABS delivers world-class textile solutions specializing in high-performance knit fabrics for global brands and export houses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
          <button 
            onClick={(e) => handleNav(e, 'products')}
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-blue-600 text-white text-sm md:text-base font-bold rounded-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center"
          >
            Explore Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button 
            onClick={(e) => handleNav(e, 'contact')}
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white/10 text-white text-sm md:text-base font-bold rounded-xl border border-white/20 hover:bg-white hover:text-slate-900 transition-all backdrop-blur-md"
          >
            Contact Sales
          </button>
        </div>
      </div>
      
      {/* Subtle decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
