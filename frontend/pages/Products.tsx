
import React, { useState } from 'react';
import { FABRICS } from '../constants';
import { Category } from '../types';
import { Search, SlidersHorizontal, Info, Layers, Beaker } from 'lucide-react';

interface ProductsProps {
  navigateTo: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ navigateTo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...Object.values(Category)];

  const filteredFabrics = activeCategory === 'All' 
    ? FABRICS 
    : FABRICS.filter(f => f.category === activeCategory);

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Fabric Collection</h1>
              <p className="text-slate-500 mt-3 md:mt-4 text-base md:text-lg">Premium knit fabric catalog for wholesale and export orders.</p>
            </div>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search fabrics..." 
                className="pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 w-full md:w-80 shadow-sm text-sm md:text-base"
              />
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center px-3 md:px-4 py-2 bg-white border border-slate-200 rounded-lg md:rounded-xl shadow-sm">
              <SlidersHorizontal className="w-3 h-3 md:w-4 md:h-4 mr-2 text-slate-600" />
              <span className="text-xs md:text-sm font-bold text-slate-600 whitespace-nowrap">Category:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredFabrics.map((fabric) => (
            <div key={fabric.id} className="bg-white rounded-xl md:rounded-[2rem] overflow-hidden border border-slate-200 group flex flex-col hover:shadow-2xl transition-all duration-500">
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img 
                  src={fabric.image} 
                  alt={fabric.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                    {fabric.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{fabric.name}</h3>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">{fabric.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center text-[10px] font-black uppercase text-slate-400 mb-1">
                      <Layers className="w-3 h-3 mr-1" /> Weight
                    </div>
                    <span className="text-sm font-bold text-slate-700">{fabric.gsm}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center text-[10px] font-black uppercase text-slate-400 mb-1">
                      <Beaker className="w-3 h-3 mr-1" /> Mix
                    </div>
                    <span className="text-sm font-bold text-slate-700 truncate block">{fabric.composition}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center text-[10px] font-black uppercase text-slate-400 mb-2">
                    <Info className="w-3 h-3 mr-1" /> Use Cases
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {fabric.useCases.map((use, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-full">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 mt-auto">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                  className="w-full py-3 md:py-4 bg-slate-900 text-white text-sm md:text-base font-bold rounded-lg md:rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors group/btn"
                >
                  Request Samples
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredFabrics.length === 0 && (
          <div className="text-center py-32">
            <p className="text-slate-500 text-xl">No fabrics found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')} 
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Show all fabrics
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
