import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");
      console.log("ProtectedRoute: Checking auth, token:", token ? "exists" : "missing");
      
      if (!token) {
        console.log("ProtectedRoute: No token found, redirecting to verification");
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        console.log("ProtectedRoute: Verifying token with backend...");
        // Verify token with backend
        const response = await fetch('https://v2-db.vercel.app/api/admin/auth/verify', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        console.log("ProtectedRoute: Response status:", response.status);
        console.log("ProtectedRoute: Response ok:", response.ok);

        if (response.ok) {
          console.log("ProtectedRoute: Token is valid");
          setIsAuthenticated(true);
        } else {
          console.log("ProtectedRoute: Token is invalid, removing from localStorage");
          // Token is invalid, remove it
          localStorage.removeItem("adminToken");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('ProtectedRoute: Auth check failed:', error);
        localStorage.removeItem("adminToken");
        setIsAuthenticated(false);
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-medium">Verifying access...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/verification" replace />;
  }

  return children;
};

export default ProtectedRoute; 