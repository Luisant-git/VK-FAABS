
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'What We Do', id: 'whatwedo' },
    { label: 'Our Products', id: 'products' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex flex-col leading-tight">
              <span className="text-3xl font-bold tracking-tighter text-white">VK FAABS</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Tirupur Excellence</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting premium knit fabrics since inception. We take pride in our precision, quality, and commitment to the global textile market.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Navigation</h4>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Fabric Categories</h4>
            <ul className="space-y-4 text-sm">
              {['Pique Fabrics', 'Jersey Fabrics', 'French Terry', 'Fleece Fabrics'].map((cat, i) => (
                <li key={i}>
                  <a 
                    href="#products" 
                    onClick={(e) => handleLinkClick(e, 'products')}
                    className="hover:text-white transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <p>{COMPANY_DETAILS.address}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <p>{COMPANY_DETAILS.phone[0]}</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <p>{COMPANY_DETAILS.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© {new Date().getFullYear()} VK FAABS Textile Manufacturing. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
