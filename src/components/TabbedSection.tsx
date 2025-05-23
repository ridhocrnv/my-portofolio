import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, FileCode, FileType, Code, GitBranch, Figma } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      id: 999,
      title: "UHO CS 2024 — Website Angkatan",
      description: "Website Angkatan Ilmu Komputer 2024 Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Halu Oleo",
      image: "uho-cs-2024.webp",
      technologies: ["TypeScript", "Vite", "React", "Shadcn UI", "Tailwind CSS",],
      liveLink: "https://ilkom24uho.vercel.app",
      githubLink: "https://github.com/ridhocrnv/uho-cs-2024"
    },
    {
      id: 998,
      title: "Website Portofolio",
      description: "Website portofolio pribadi yang menampilkan profil, keahlian, dan proyek saya sebagai Frontend Developer.",
      image: "my-portofolio.webp",
      technologies: ["TypeScript", "Vite", "React", "Shadcn UI", "Tailwind CSS",],
      liveLink: "https://ilkom24uho.vercel.app",
      githubLink: "https://github.com/ridhocrnv/my-portofolio"
    },
    {
      id: 997,
      title: "Meleura — Eksplorasi Wisata Kabupaten Muna",
      description: "Meleura adalah website eksplorasi destinasi wisata yang menampilkan keindahan alam dan budaya Kabupaten Muna.",
      image: "website-meleura.webp",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://mern-stack-mauve.vercel.app/",
      githubLink: ""
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
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "November 2024",
      image: "belajar-pemrograman-web-dasar.webp",
      link: "#"
    },
    {
      id: 2,
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "Desember 2024",
      image: "belajar-dasar-pemrograman-javascript.webp",
      link: "#"
    },
    {
      id: 3,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "Mei 2025",
      image: "belajar-membuat-front-end-web-pemula.webp",
      link: "#"
    },
    {
      id: 4,
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding Indonesia",
      date: "Mei 2025",
      image: "belajar-dasar-cloud-dan-gen-ai.webp",
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
    { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E44D26", level: 85 },
    { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6", level: 60 },
    { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E", level: 50 },
    { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032", level: 55 },
    { name: "GitHub", iconUrl: "github-white-icon.png", color: "#181717", level: 50 },
    { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E", level: 80 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="glass-card p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
        >
          <img
            src={tech.iconUrl}
            alt={tech.name}
            className="mb-4"
            style={{ width: 48, height: 48, objectFit: "contain" }}
          />
          <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
          <div className="w-full bg-dark/50 rounded-full h-2.5 mb-2">
            <div 
              className="h-2.5 rounded-full bg-gradient-primary" 
              style={{ width: `${tech.level}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400">{tech.level}% Kemampuan</p>
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
            entry.target.classList.remove('opacity-0');
            // Don't unobserve to allow re-animation when scrolling back
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
          Portofolio <span className="text-gradient">Saya</span>
        </h2>

        <div className="glass-card p-1 md:p-2 rounded-lg mb-8 opacity-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="flex overflow-auto">
            <button
              className={`py-3 px-6 rounded-lg transition-all ${activeTab === 'projects' ? 'bg-dark-secondary text-gradient' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('projects')}
            >
              Proyek
            </button>
            <button
              className={`py-3 px-6 rounded-lg transition-all ${activeTab === 'certificates' ? 'bg-dark-secondary text-gradient' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('certificates')}
            >
              Sertifikat
            </button>
            <button
              className={`py-3 px-6 rounded-lg transition-all ${activeTab === 'techstack' ? 'bg-dark-secondary text-gradient' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('techstack')}
            >
              Tools & Framework
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
