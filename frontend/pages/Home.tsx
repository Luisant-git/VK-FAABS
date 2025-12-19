
import React from 'react';
import Hero from '../components/Hero';
import { FABRICS } from '../constants';
import { Award, Factory, Globe, Leaf, Users, PackageCheck, ArrowRight } from 'lucide-react';

interface HomeProps {
  navigateTo: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const handleInternalNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigateTo(id);
  };

  return (
    <div className="space-y-0 overflow-hidden">
      <Hero onNavigate={navigateTo} />

      {/* Core Services Preview */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-8">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Beyond Manufacturing. <br/>We Build Foundations.</h2>
              <p className="text-base md:text-xl text-slate-500 leading-relaxed">
                VK FAABS provides end-to-end textile solutions from our headquarters in Tirupur. We specialize in high-performance knit fabrics that empower global garment designers.
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  'Advanced Fabric Development',
                  'Sustainable Bulk Production',
                  'International Export Logistics'
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-sm md:text-base font-bold text-slate-800">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 md:mr-4"></div>
                    {item}
                  </div>
                ))}
              </div>
              <a 
                href="#whatwedo" 
                onClick={(e) => handleInternalNav(e, 'whatwedo')}
                className="inline-flex items-center text-blue-600 font-black group"
              >
                Discover Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/071/457/724/small/elegant-orange-silk-fabric-swirl-background-shiny-textile-texture-for-luxury-designs-photo.jpg" 
                className="relative rounded-[2.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Fabric production" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Why Partner With Us?</h2>
            <p className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">The Trusted Hub for Premium Knit Fabrics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { icon: Award, title: 'Export Quality', desc: 'Compliant with international standards for durability and color fastness.' },
              { icon: Factory, title: 'Modern Facility', desc: 'Equipped with high-gauge circular knitting machines for precision.' },
              { icon: Globe, title: 'Global Reach', desc: 'Seamlessly serving export houses across Europe and the Americas.' },
              { icon: Leaf, title: 'Eco-Commitment', desc: 'Organic cotton options and sustainable dyeing processes.' },
              { icon: Users, title: 'Deep Expertise', desc: 'Decades of experience in textile engineering and trend analysis.' },
              { icon: PackageCheck, title: 'Strict QC', desc: '4-point inspection system ensures defect-free fabric rolls.' },
            ].map((feature, i) => (
              <div key={i} className="group p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Product Showcase */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Product Portfolio</h2>
              <p className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Crafting the Perfect Knit</p>
            </div>
            <a 
              href="#products" 
              onClick={(e) => handleInternalNav(e, 'products')}
              className="text-blue-600 font-black hover:text-slate-900 transition-colors flex items-center group"
            >
              View All Fabrics
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FABRICS.slice(0, 4).map((fabric) => (
              <a 
                href="#products" 
                key={fabric.id} 
                onClick={(e) => handleInternalNav(e, 'products')}
                className="block group"
              >
                <div className="bg-slate-50 rounded-xl md:rounded-[2rem] overflow-hidden transition-all duration-500 border border-slate-100 group-hover:shadow-2xl">
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <img src={fabric.image} alt={fabric.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all"></div>
                  </div>
                  <div className="p-5 md:p-8">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{fabric.category}</span>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mt-2">{fabric.name}</h3>
                    <div className="mt-4 flex items-center">
                      <span className="text-xs font-bold text-slate-500 px-3 py-1 bg-white rounded-full border border-slate-200">{fabric.gsm}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558584730-80497cc33054?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 lg:p-24 rounded-2xl md:rounded-[4rem] shadow-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight">Ready to elevate your fabric standards?</h2>
            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto font-medium">We bridge the gap between imagination and manufacturing for high-end fashion brands worldwide.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <a 
                href="#contact" 
                onClick={(e) => handleInternalNav(e, 'contact')}
                className="px-8 md:px-12 py-4 md:py-5 bg-blue-600 text-white text-sm md:text-base font-black rounded-xl md:rounded-2xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-500/20"
              >
                Partner With Us
              </a>
              <a 
                href="#products" 
                onClick={(e) => handleInternalNav(e, 'products')}
                className="px-8 md:px-12 py-4 md:py-5 border border-white/20 text-white text-sm md:text-base font-black rounded-xl md:rounded-2xl hover:bg-white/10 transition-all"
              >
                Fabric Catalog
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
