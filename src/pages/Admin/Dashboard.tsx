
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

// Types for portfolio content
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
};

type Technology = {
  name: string;
  icon: string;
  color: string;
  level: number;
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);
  
  // Check authentication on mount
  useEffect(() => {
    const authData = localStorage.getItem('adminAuth');
    if (!authData) {
      toast.error("You must login to access this page");
      navigate('/admin/login');
      return;
    }
    
    try {
      const auth = JSON.parse(authData);
      const isExpired = new Date().getTime() - auth.timestamp > 24 * 60 * 60 * 1000; // 24 hour expiry
      
      if (!auth.isAdmin || isExpired) {
        toast.error("Session expired. Please login again");
        localStorage.removeItem('adminAuth');
        navigate('/admin/login');
      }
    } catch (e) {
      localStorage.removeItem('adminAuth');
      navigate('/admin/login');
    }
    
    // Load dummy data (in a real app, this would come from an API)
    loadDummyData();
  }, [navigate]);
  
  const loadDummyData = () => {
    // Example projects
    setProjects([
      {
        id: '1',
        title: 'Bookshelf App',
        description: 'CRUD book app built with vanilla JavaScript',
        imageUrl: '/placeholder.svg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/example/bookshelf',
        liveUrl: 'https://example.com/bookshelf'
      },
      {
        id: '2',
        title: 'Ramadan Challenge',
        description: 'Prayer schedule & quotes for Ramadan',
        imageUrl: '/placeholder.svg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/example/ramadan',
      }
    ]);
    
    // Example certificates
    setCertificates([
      {
        id: '1',
        title: 'Frontend Web Developer',
        issuer: 'Dicoding',
        date: '2024-03-15',
        imageUrl: '/placeholder.svg',
        credentialUrl: 'https://dicoding.com/cert/123456'
      },
      {
        id: '2',
        title: 'Responsive Web Design',
        issuer: 'FreeCodeCamp',
        date: '2024-01-20',
        imageUrl: '/placeholder.svg',
        credentialUrl: 'https://freecodecamp.org/cert/123456'
      }
    ]);
    
    // Example technologies
    setTechnologies([
      {
        name: 'HTML5',
        icon: 'FileCode',
        color: '#E44D26',
        level: 85,
      },
      {
        name: 'CSS3',
        icon: 'FileType',
        color: '#1572B6',
        level: 80,
      }
    ]);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    toast.success("Logged out successfully");
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Admin Header */}
      <header className="bg-black/70 backdrop-blur-lg py-4 shadow-lg">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-xl font-bold text-white">R</span>
            </div>
            <span className="text-xl font-bold heading-gradient">Admin Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-white text-sm">Welcome, Ridho Ahmad Irawan</span>
            <button 
              onClick={handleLogout}
              className="px-3 py-1 bg-gradient-primary rounded-md text-white text-sm hover:opacity-90"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container-custom py-8">
        <div className="glass-card p-6 rounded-lg">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gradient mb-2">Portfolio Content Management</h1>
            <p className="text-gray-400">Manage your portfolio content from this dashboard</p>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-6">
            <button 
              className={`py-2 px-4 border-b-2 ${activeTab === 'projects' ? 'border-gradient-start text-gradient' : 'border-transparent text-gray-400'}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={`py-2 px-4 border-b-2 ${activeTab === 'certificates' ? 'border-gradient-start text-gradient' : 'border-transparent text-gray-400'}`}
              onClick={() => setActiveTab('certificates')}
            >
              Certificates
            </button>
            <button 
              className={`py-2 px-4 border-b-2 ${activeTab === 'techstack' ? 'border-gradient-start text-gradient' : 'border-transparent text-gray-400'}`}
              onClick={() => setActiveTab('techstack')}
            >
              Tech Stack
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="mb-6">
            {activeTab === 'projects' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Project List</h2>
                  <button 
                    className="px-3 py-1 bg-gradient-primary rounded-md text-white text-sm hover:opacity-90"
                    onClick={() => {
                      // Add new project functionality would go here
                      toast.info("This feature would create a new project in a real application");
                    }}
                  >
                    Add New Project
                  </button>
                </div>
                
                <div className="bg-dark-secondary rounded-lg p-4">
                  <div className="grid gap-4">
                    {projects.map(project => (
                      <div key={project.id} className="flex items-center justify-between border-b border-gray-700 py-3">
                        <div>
                          <h3 className="font-medium text-white">{project.title}</h3>
                          <p className="text-sm text-gray-400">{project.description}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-2 py-1 bg-blue-600 rounded text-white text-xs">Edit</button>
                          <button className="px-2 py-1 bg-red-600 rounded text-white text-xs">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'certificates' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Certificate List</h2>
                  <button 
                    className="px-3 py-1 bg-gradient-primary rounded-md text-white text-sm hover:opacity-90"
                    onClick={() => {
                      toast.info("This feature would create a new certificate in a real application");
                    }}
                  >
                    Add New Certificate
                  </button>
                </div>
                
                <div className="bg-dark-secondary rounded-lg p-4">
                  <div className="grid gap-4">
                    {certificates.map(cert => (
                      <div key={cert.id} className="flex items-center justify-between border-b border-gray-700 py-3">
                        <div>
                          <h3 className="font-medium text-white">{cert.title}</h3>
                          <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-2 py-1 bg-blue-600 rounded text-white text-xs">Edit</button>
                          <button className="px-2 py-1 bg-red-600 rounded text-white text-xs">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'techstack' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
                  <button 
                    className="px-3 py-1 bg-gradient-primary rounded-md text-white text-sm hover:opacity-90"
                    onClick={() => {
                      toast.info("This feature would add a new technology in a real application");
                    }}
                  >
                    Add New Technology
                  </button>
                </div>
                
                <div className="bg-dark-secondary rounded-lg p-4">
                  <div className="grid gap-4">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-gray-700 py-3">
                        <div>
                          <h3 className="font-medium text-white">{tech.name}</h3>
                          <p className="text-sm text-gray-400">Proficiency: {tech.level}%</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-2 py-1 bg-blue-600 rounded text-white text-xs">Edit</button>
                          <button className="px-2 py-1 bg-red-600 rounded text-white text-xs">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">This is a simplified admin dashboard for demonstration purposes.</p>
            <p className="text-gray-400 text-sm">In a real application, this would be connected to a database.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
