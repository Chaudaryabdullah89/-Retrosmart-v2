import React from 'react';
import './Reloader.css';

const Reloader = () => {
  return (
    <div className="reloader-container">
      <div className="reloader">
        <div className="reloader-circle"></div>
        <div className="reloader-circle"></div>
        <div className="reloader-circle"></div>
      </div>
    </div>
  );
};

export default Reloader; 