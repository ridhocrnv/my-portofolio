
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  useEffect(() => {
    const authData = localStorage.getItem('adminAuth');
    if (!authData) {
      toast.error("You must login to access this page");
    }
  }, []);

  const authData = localStorage.getItem('adminAuth');
  
  if (!authData) {
    return <Navigate to="/admin/login" replace />;
  }
  
  try {
    const auth = JSON.parse(authData);
    const isExpired = new Date().getTime() - auth.timestamp > 24 * 60 * 60 * 1000; // 24 hour expiry
    
    if (!auth.isAdmin || isExpired) {
      localStorage.removeItem('adminAuth');
      return <Navigate to="/admin/login" replace />;
    }
  } catch (e) {
    localStorage.removeItem('adminAuth');
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
