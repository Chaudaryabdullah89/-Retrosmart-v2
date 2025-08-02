import React, { useState, useEffect } from 'react';

const AuthTest = () => {
  const [authStatus, setAuthStatus] = useState('Checking...');
  const [token, setToken] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("adminToken");
      setToken(storedToken || 'No token found');

      if (!storedToken) {
        setAuthStatus('Not authenticated');
        return;
      }

      try {
        const response = await fetch('https://v2-db.vercel.app/api/admin/blog', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${storedToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setAuthStatus(`Authenticated - ${data.message}`);
        } else {
          setAuthStatus('Token invalid');
        }
      } catch (error) {
        setAuthStatus(`Error: ${error.message}`);
      }
    };

    checkAuth();
  }, []);

  const clearToken = () => {
    localStorage.removeItem("adminToken");
    setToken('No token found');
    setAuthStatus('Not authenticated');
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Authentication Test</h3>
      <div className="space-y-2">
        <p><strong>Status:</strong> {authStatus}</p>
        <p><strong>Token:</strong> {token}</p>
        <button 
          onClick={clearToken}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear Token
        </button>
      </div>
    </div>
  );
};

export default AuthTest; 