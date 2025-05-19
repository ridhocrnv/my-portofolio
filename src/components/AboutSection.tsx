
import React, { useEffect, useRef } from 'react';
import { FileCode, FileType, Code, GitBranch, Github, Figma } from 'lucide-react';

const AboutSection = () => {
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

  const skills = [
    { name: "HTML", icon: FileCode, color: "#E44D26" },
    { name: "CSS", icon: FileType, color: "#1572B6" },
    { name: "JavaScript", icon: Code, color: "#F7DF1E" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "GitHub", icon: Github, color: "#181717" },
    { name: "Figma", icon: Figma, color: "#F24E1E" },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Self-Learning",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-dark-secondary"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-on-scroll">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Siapa di Balik Layar</h3>
              <p className="text-gray-300 mb-4">
                Halo! Saya <strong>Ridho Ahmad Irawan</strong>, seorang <strong>Beginner Frontend Developer</strong> yang saat ini sedang menempuh studi di <strong>Universitas Halu Oleo</strong>, Program Studi <strong>Ilmu Komputer</strong>. Selama lebih dari satu tahun terakhir, saya aktif belajar dan mengembangkan berbagai antarmuka web yang menarik, interaktif, dan mudah digunakan.
              </p>
              <p className="text-gray-300">
                Portofolio ini saya buat sebagai bagian dari perjalanan belajar dan eksplorasi saya di dunia frontend. Dengan nuansa gelap, aksen gradasi dinamis, serta sentuhan animasi dan efek visual, saya ingin menyuguhkan pengalaman pengguna yang menyenangkan dan modern.
Silakan scroll-scroll dulu, siapa tahu ada yang menarik 😄.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass-card p-6 opacity-0 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center p-3 rounded-lg bg-dark/50 hover:scale-105 transition-transform"
                  >
                    <skill.icon size={28} style={{ color: skill.color }} className="mb-2" />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 opacity-0 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gradient-primary rounded-full text-sm text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
