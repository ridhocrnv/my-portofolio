
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple admin authentication - in real applications use a secure backend
    setTimeout(() => {
      // Hard-coded credentials - in a real app these would be on a server
      if (username === 'ridho' && password === 'admin123') {
        // Store auth token in localStorage
        localStorage.setItem('adminAuth', JSON.stringify({ 
          isAdmin: true,
          name: 'Ridho Ahmad Irawan',
          timestamp: new Date().getTime()
        }));
        
        toast.success("Login successful!");
        navigate('/admin/dashboard');
      } else {
        toast.error("Invalid credentials");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-xl font-bold text-white">R</span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            This area is restricted to authorized personnel only
          </p>
        </div>
        
        <div className="mt-8">
          <div className="glass-card p-6 rounded-lg shadow-lg">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 
                    bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-gradient-start focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 
                    bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-gradient-start focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                  text-white bg-gradient-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gradient-start"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-6 text-center">
            <a href="/" className="text-gradient hover:underline">
              Return to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
