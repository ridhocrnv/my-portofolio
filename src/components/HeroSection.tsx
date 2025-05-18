
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed]);

  return (
    <span className="text-gradient">
      {displayText}
      <span className="animate-blink-caret border-r-2 border-gradient-start ml-1">&nbsp;</span>
    </span>
  );
};

const HeroSection = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typewriterTexts = [
    "Beginner Frontend Developer",
    "UI Enthusiast",
    "Web Designer",
    "Continuous Learner"
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20"
      style={{
        background: 'linear-gradient(to bottom, #0f0f1b, #121212)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-start/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-end/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom z-10 flex flex-col items-center text-center">
        <h2 className="text-gray-400 mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Welcome to my portfolio website
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          I'm <span className="text-gradient">Ridho Ahmad Irawan</span>
        </h1>
        <div className="text-xl md:text-2xl mb-8 h-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <TypewriterText texts={typewriterTexts} />
        </div>
        <button 
          onClick={scrollToProjects}
          className="btn-primary animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          View My Projects
          <ArrowDown className="animate-bounce ml-1" size={18} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce text-gray-400" size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
