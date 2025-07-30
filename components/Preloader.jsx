import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="hexagon-container">
          <div className="hexagon">
            <div className="hexagon-inner"></div>
            <div className="hexagon-inner"></div>
            <div className="hexagon-inner"></div>
          </div>
        </div>
        <div className="loading-container">
          <div className="loading-line">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 