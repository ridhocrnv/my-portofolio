
import React, { useState, useRef, useEffect } from 'react';
import { toast } from "sonner";

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! I'll respond soon.");
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="py-20"
      style={{
        background: 'linear-gradient(to top, #0f0f1b, #121212)',
      }}
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-on-scroll">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 opacity-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          Have a question or want to work together? Let me know.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 opacity-0 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Contact Information</h3>
            <div className="flex flex-col space-y-4">
              <div>
                <p className="text-white font-medium">Email</p>
                <a href="mailto:info@ridho-portfolio.com" className="text-gray-400 hover:text-gradient">info@ridho-portfolio.com</a>
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <span className="text-gray-400">Kendari, Indonesia</span>
              </div>
              <div>
                <p className="text-white font-medium">Social Media</p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-gradient">GitHub</a>
                  <a href="#" className="text-gray-400 hover:text-gradient">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-gradient">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 opacity-0 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:border-gradient-start focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:border-gradient-start focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} 
                  rows={4}
                  className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:border-gradient-start focus:outline-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
