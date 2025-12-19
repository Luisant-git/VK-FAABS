
import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://linkedin.com', 
      color: 'hover:bg-[#0077B5]' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://instagram.com', 
      color: 'hover:bg-[#E4405F]' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-5 h-5" />, 
      href: 'https://facebook.com', 
      color: 'hover:bg-[#1877F2]' 
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle className="w-5 h-5" />, 
      href: 'https://wa.me/919876543210', 
      color: 'hover:bg-[#25D366]' 
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col space-y-1">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center justify-center bg-white border border-slate-200 
            w-11 h-11 shadow-lg transition-all duration-300 
            rounded-l-xl hover:rounded-l-none hover:w-14
            ${social.color} hover:text-white text-slate-600
          `}
          aria-label={social.name}
        >
          <div className="shrink-0">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
