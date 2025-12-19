
import React from 'react';
import { Target, Eye, Sparkles, Building2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-32">
          <div className="relative h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://thumb.photo-ac.com/98/98cdd187cd367f08ef835ec7d60f20bf_t.jpeg" 
              alt="VK FAABS Factory" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white p-8 hidden lg:flex border-8 border-white">
              <span className="text-5xl font-bold">15+</span>
              <span className="text-sm font-medium text-center uppercase tracking-widest mt-2">Years of Textile Excellence</span>
            </div>
          </div>
          <div className="space-y-4 md:space-y-8">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">About Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 md:mt-4 leading-tight tracking-tight">Pioneering the Future of Knit Fabrics</h2>
            </div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Based in the textile hub of Tirupur, VK FAABS has emerged as a leader in premium knit fabric manufacturing. We don't just supply fabric; we provide the foundation for world-class apparel.
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Our commitment to quality and customer satisfaction has earned us a reputation as a trusted partner for export houses and major clothing brands worldwide. We blend traditional craftsmanship with modern technology to deliver fabrics that stand the test of time.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg md:rounded-xl flex items-center justify-center text-blue-600">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-sm md:text-base font-bold text-slate-800">Tirupur Facility</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg md:rounded-xl flex items-center justify-center text-blue-600">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-sm md:text-base font-bold text-slate-800">ISO Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-32">
          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-xl shadow-blue-600/20">
              <Target className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Our Mission</h3>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              To empower the global apparel industry by providing consistently superior knit fabrics through innovative manufacturing practices and a customer-centric approach.
            </p>
          </div>
          <div className="bg-slate-950 p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] text-white">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 border border-white/10 backdrop-blur-lg">
              <Eye className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h3>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              To be recognized globally as the most reliable and innovative textile manufacturer, setting new standards in quality, sustainability, and efficiency in the knit fabric sector.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Our Methodology</h2>
          <p className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">How We Deliver Excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
          {[
            { step: '01', title: 'Sourcing', desc: 'Selection of the finest yarns from vetted spinning mills.' },
            { step: '02', title: 'Knitting', desc: 'Precision manufacturing using high-gauge circular machines.' },
            { step: '03', title: 'Processing', desc: 'Eco-friendly dyeing and finishing for perfect handfeel.' },
            { step: '04', title: 'Inspection', desc: 'Rigorous quality checks ensuring defect-free delivery.' },
          ].map((item, i) => (
            <div key={i} className="relative group text-center">
              <div className="text-6xl md:text-8xl font-black text-slate-100 absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 -z-10 group-hover:text-blue-50 transition-colors">
                {item.step}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
