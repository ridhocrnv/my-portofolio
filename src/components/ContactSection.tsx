
import React, { useState, useRef, useEffect } from 'react';
import { Github, Mail, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({});
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-dark-secondary"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-on-scroll">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me for collaboration, opportunities, or just to say hi! 
                I'm always open to discussing new projects or partnerships.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:ridho.irawan@example.com" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </span>
                  <span>ridho.irawan@example.com</span>
                </a>
                
                <a 
                  href="https://github.com/ridho-irawan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={18} />
                  </span>
                  <span>github.com/ridho-irawan</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/ridho-irawan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={18} />
                  </span>
                  <span>linkedin.com/in/ridho-irawan</span>
                </a>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Send Message</h3>
              
              {submitStatus.message && (
                <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark/30 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gradient-start focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark/30 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gradient-start focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-dark/30 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gradient-start focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
