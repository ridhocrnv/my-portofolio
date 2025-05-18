
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthData {
  isAdmin: boolean;
  name: string;
  timestamp: number;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<AuthData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem('adminAuth');
      
      if (!authData) {
        setIsAuthenticated(false);
        setUserData(null);
        setIsLoading(false);
        return;
      }
      
      try {
        const auth = JSON.parse(authData) as AuthData;
        const isExpired = new Date().getTime() - auth.timestamp > 24 * 60 * 60 * 1000; // 24 hour expiry
        
        if (!auth.isAdmin || isExpired) {
          localStorage.removeItem('adminAuth');
          setIsAuthenticated(false);
          setUserData(null);
        } else {
          setIsAuthenticated(true);
          setUserData(auth);
        }
      } catch (e) {
        localStorage.removeItem('adminAuth');
        setIsAuthenticated(false);
        setUserData(null);
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);
  
  const logout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setUserData(null);
    navigate('/admin/login');
  };
  
  return { isAuthenticated, isLoading, userData, logout };
};
