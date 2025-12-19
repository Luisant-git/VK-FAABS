
import React from 'react';
import { Factory, Cog, Package, Truck, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

interface WhatWeDoProps {
  navigateTo: (id: string) => void;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ navigateTo }) => {
  const services = [
    {
      icon: Factory,
      title: 'Fabric Manufacturing',
      image: 'https://www.akfabrics.com/img/c1.jpg',
      desc: 'Our facility utilizes high-speed circular knitting machines to produce consistent, high-gauge fabrics. We focus on structural integrity and uniform density across every batch.',
      highlights: ['Precision Knitting', 'Tension Control', 'Large-Scale Capacity']
    },
    {
      icon: Cog,
      title: 'Custom Development',
      image: 'https://www.akfabrics.com/img/c2.jpg',
      desc: 'We partner with brands to develop exclusive fabric textures, GSM variations, and specialty fiber blends. Our R&D team ensures your vision translates into a tangible product.',
      highlights: ['Prototyping Lab', 'Specialty Blends', 'Technical Finishes']
    },
    {
      icon: Package,
      title: 'Bulk Supply',
      image: 'https://www.akfabrics.com/img/c3.jpg',
      desc: 'Efficient supply chain management for high-volume orders. We maintain strict quality standards to ensure that the 1000th meter of fabric matches the 1st perfectly.',
      highlights: ['Batch Consistency', 'Inventory Tracking', 'Quality Assurance']
    },
    {
      icon: Truck,
      title: 'Export Support',
      image: 'https://www.akfabrics.com/img/c6.jpg',
      desc: 'Strategically located in Tirupur, we offer streamlined logistics for international markets. We handle all compliance, documentation, and secure global shipping.',
      highlights: ['Global Compliance', 'Secure Packaging', 'Fast Lead Times']
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3 block">
              Core Capabilities
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
              Professional Textile Manufacturing Solutions
            </h1>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">
              VK FAABS delivers a vertically integrated manufacturing experience. From initial R&D to final export, we ensure every step meets global industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Area */}
              <div className="h-48 md:h-64 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 md:p-8 lg:p-10 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 md:mb-8 font-medium">
                  {service.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-10 mt-auto">
                  {service.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center text-slate-700 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Action */}
                <button 
                  onClick={() => navigateTo('contact')}
                  className="flex items-center text-blue-600 font-bold text-sm group/btn hover:text-slate-900 transition-colors"
                >
                  Inquire about this service
                  <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 md:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Monthly Tons</div>
            </div>
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Quality Assured</div>
            </div>
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Manufacturing</div>
            </div>
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">15+</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Export Markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            Seamless Manufacturing for Global Brands
          </h2>
          <p className="text-sm md:text-base text-slate-500 mb-8 md:mb-10 font-medium">
            Join our network of export houses and clothing brands who prioritize quality and reliability. Let's build your next collection together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigateTo('contact')}
              className="px-8 md:px-10 py-3 md:py-4 bg-slate-900 text-white text-sm md:text-base font-bold rounded-xl md:rounded-2xl hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button 
              onClick={() => navigateTo('products')}
              className="px-8 md:px-10 py-3 md:py-4 border border-slate-300 text-slate-700 text-sm md:text-base font-bold rounded-xl md:rounded-2xl hover:bg-slate-50 transition-all"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
