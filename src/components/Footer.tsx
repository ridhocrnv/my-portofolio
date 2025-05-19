
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-white">R</span>
              </div>
              <span className="text-xl font-bold heading-gradient">Ridho</span>
            </div>
            <p className="text-gray-400 mb-4">
              Beginner Frontend Developer yang berfokus pada menciptakan pengalaman web yang menarik dan fungsional.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/ridho-irawan" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-secondary flex items-center justify-center text-gray-400 hover:text-gradient-start transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/ridho-irawan" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-secondary flex items-center justify-center text-gray-400 hover:text-gradient-start transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:ridho.irawan@example.com" 
                className="w-9 h-9 rounded-full bg-dark-secondary flex items-center justify-center text-gray-400 hover:text-gradient-start transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gradient-start transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gradient-start transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-gradient-start transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gradient-start transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-gradient-start">Email:</span> ridho.irawan@example.com
              </li>
              <li className="text-gray-400">
                <span className="text-gradient-start">Location:</span> Halu Oleo University, Indonesia
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 inline-flex items-center gap-2 hover:text-gradient-start transition-colors"
                >
                  Download CV <span className="text-xs">(PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ridho Ahmad Irawan. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-gradient-start fill-gradient-start" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
