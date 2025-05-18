import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, FileCode, FileType, Code, GitBranch, Figma } from 'lucide-react';

const TabContent = ({ activeTab }: { activeTab: string }) => {
  if (activeTab === 'projects') {
    return <ProjectsTab />;
  } else if (activeTab === 'certificates') {
    return <CertificatesTab />;
  } else if (activeTab === 'techstack') {
    return <TechStackTab />;
  }
  return null;
};

const ProjectsTab = () => {
  const projects = [
    {
      id: 1,
      title: "Bookshelf App",
      description: "A CRUD application for managing your book collection with search and filter functionalities.",
      image: "https://source.unsplash.com/random/600x400/?book",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Ramadan Challenge",
      description: "Prayer schedule and daily inspirational quotes app for Ramadan with reminders.",
      image: "https://source.unsplash.com/random/600x400/?mosque",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "To-Do List App",
      description: "Modern UI to-do list application with user authentication and data persistence.",
      image: "https://source.unsplash.com/random/600x400/?checklist",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="glass-card overflow-hidden group transition-all hover:shadow-[0_0_15px_rgba(127,90,240,0.3)]">
          <div className="h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110" 
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-dark/50 rounded-md text-xs text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 text-sm text-gradient hover:opacity-80 transition-opacity"
              >
                <ExternalLink size={14} />
                Live Preview
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 text-sm text-gradient hover:opacity-80 transition-opacity"
              >
                <Github size={14} />
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CertificatesTab = () => {
  const certificates = [
    {
      id: 1,
      title: "Frontend Web Development Basics",
      issuer: "Dicoding Academy",
      date: "January 2024",
      image: "https://source.unsplash.com/random/800x600/?certificate",
      link: "#"
    },
    {
      id: 2,
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "March 2024",
      image: "https://source.unsplash.com/random/800x600/?diploma",
      link: "#"
    },
    {
      id: 3,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "April 2024",
      image: "https://source.unsplash.com/random/800x600/?award",
      link: "#"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert) => (
        <a 
          key={cert.id}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card overflow-hidden group transition-all hover:shadow-[0_0_15px_rgba(127,90,240,0.3)]"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110" 
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
            <p className="text-gray-400 text-sm mb-2">
              {cert.issuer} • {cert.date}
            </p>
            <span className="flex items-center gap-1 text-sm text-gradient">
              <ExternalLink size={14} />
              View Certificate
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

const TechStackTab = () => {
  const technologies = [
    { name: "HTML5", icon: FileCode, color: "#E44D26", level: 85 },
    { name: "CSS3", icon: FileType, color: "#1572B6", level: 80 },
    { name: "JavaScript", icon: Code, color: "#F7DF1E", level: 70 },
    { name: "Git", icon: GitBranch, color: "#F05032", level: 75 },
    { name: "GitHub", icon: Github, color: "#181717", level: 80 },
    { name: "Figma", icon: Figma, color: "#F24E1E", level: 65 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="glass-card p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
        >
          <tech.icon size={48} style={{ color: tech.color }} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
          <div className="w-full bg-dark/50 rounded-full h-2.5 mb-2">
            <div 
              className="h-2.5 rounded-full bg-gradient-primary" 
              style={{ width: `${tech.level}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400">{tech.level}% Proficiency</p>
        </div>
      ))}
    </div>
  );
};

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el as Element));

    return () => {
      elements?.forEach((el) => observer.unobserve(el as Element));
    };
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-20 bg-dark"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-on-scroll">
          My <span className="text-gradient">Work</span>
        </h2>

        <div className="flex justify-center mb-10 opacity-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card inline-flex p-1 rounded-full">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'projects' ? 'bg-gradient-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'certificates' ? 'bg-gradient-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setActiveTab('techstack')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'techstack' ? 'bg-gradient-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Tech Stack
            </button>
          </div>
        </div>

        <div className="opacity-0 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
