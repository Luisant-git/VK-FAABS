
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import WhatWeDo from './pages/WhatWeDo';
import SocialSidebar from './components/SocialSidebar';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Centralized navigation logic
  const navigateTo = useCallback((pageId: string) => {
    const cleanId = pageId.toLowerCase();
    setCurrentPage(cleanId);
    
    // Update hash without triggering a 'navigation' event that causes iframe errors
    if (window.location.hash !== `#${cleanId}`) {
      window.history.pushState(null, '', `#${cleanId}`);
    }
    
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Sync state if user uses browser back/forward or enters URL directly
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0].toLowerCase();
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Initial check

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigateTo={navigateTo} />;
      case 'about': return <About />;
      case 'whatwedo': return <WhatWeDo navigateTo={navigateTo} />;
      case 'products': return <Products navigateTo={navigateTo} />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 relative overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <SocialSidebar />
      <main className="flex-grow overflow-x-hidden">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
