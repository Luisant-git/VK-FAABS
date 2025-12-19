
import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { Maximize2, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'factory' | 'fabric' | 'process'>('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredGallery = filter === 'all' 
    ? GALLERY 
    : GALLERY.filter(img => img.type === filter);

  const filters: Array<{id: typeof filter, label: string}> = [
    { id: 'all', label: 'All Photos' },
    { id: 'factory', label: 'Factory' },
    { id: 'fabric', label: 'Fabrics' },
    { id: 'process', label: 'Process' },
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Visual Journey</h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Take a look inside our state-of-the-art facility and witness the intricate craftsmanship behind every roll of VK FAABS fabric.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all ${
                filter === f.id 
                  ? 'bg-slate-900 text-white shadow-xl' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {filteredGallery.map((img) => (
            <div 
              key={img.id} 
              className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-3xl"
              onClick={() => setSelectedImg(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-slate-900 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Lightbox */}
        {selectedImg && (
          <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-4" onClick={() => setSelectedImg(null)}>
            <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10">
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <img src={selectedImg} className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg md:rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
