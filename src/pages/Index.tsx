
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TabbedSection from '../components/TabbedSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Ensure all sections have IDs that match the navigation
    const sections = [
      { id: 'home', element: document.querySelector('#home') },
      { id: 'about', element: document.querySelector('#about') },
      { id: 'projects', element: document.querySelector('#projects') },
      { id: 'contact', element: document.querySelector('#contact') }
    ];
    
    // Check if all sections are properly accessible
    sections.forEach(section => {
      if (!section.element) {
        console.warn(`Section with id "${section.id}" not found in the DOM`);
      }
    });

    // Add AOS-like functionality with CSS animations and Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <HeroSection />
      <AboutSection />
      <TabbedSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
