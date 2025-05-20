
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      // Improved scroll with offset for header height
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-black/70 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative w-8 h-8 bg-gradient-primary flex items-center justify-center">
            <span className="text-xl font-bold text-white">R</span>
          </div>
          <span className="text-xl font-bold heading-gradient">Ridho</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="nav-link">Beranda</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">Tentang</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Proyek</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Kontak</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg py-5 border-t border-white/10 animate-fade-in">
          <div className="container-custom flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="nav-link py-2 text-left">Beranda</button>
            <button onClick={() => scrollToSection('about')} className="nav-link py-2 text-left">Tentang</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link py-2 text-left">Proyek</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link py-2 text-left">Kontak</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
