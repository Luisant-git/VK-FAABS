
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'whatwedo', label: 'What We Do' },
    { id: 'products', label: 'Our Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex flex-col leading-tight group" 
              onClick={(e) => handleNavClick(e, 'home')}
            >
              <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">VK FAABS</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold">Textile Excellence</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                  currentPage === item.id 
                    ? 'text-blue-600 bg-blue-50/50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pl-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all flex items-center group shadow-lg shadow-slate-200"
              >
                Get a Quote
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-[9999] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div 
          className={`absolute right-0 top-0 h-screen w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col overflow-hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900">VK FAABS</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Navigation</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-grow overflow-y-auto py-8 px-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all border ${
                  currentPage === item.id 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200' 
                    : 'bg-white text-slate-700 border-slate-100 hover:border-blue-200 hover:bg-blue-50/30'
                }`}
              >
                <span className="font-bold text-base">{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${currentPage === item.id ? 'text-white/70' : 'text-slate-300'}`} />
              </a>
            ))}
          </div>

          {/* Drawer Footer / Contact Info */}
          <div className="p-8 bg-slate-50 border-t border-slate-100 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Connect With Us</p>
              <div className="flex items-center text-sm text-slate-600 font-medium">
                <Phone className="w-4 h-4 mr-3 text-blue-600" />
                {COMPANY_DETAILS.phone[0]}
              </div>
              <div className="flex items-center text-sm text-slate-600 font-medium">
                <Mail className="w-4 h-4 mr-3 text-blue-600" />
                {COMPANY_DETAILS.email}
              </div>
            </div>
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center group"
            >
              Get a Quote
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
