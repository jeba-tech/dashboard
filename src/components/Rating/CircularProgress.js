import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage, label, backgroundColor, radius }) => {


  const borderCircumference = 2 * Math.PI * (radius + 8);

  return (
    <div className="circular-progress" style={{ position: 'relative', width: radius * 2 + 20, height: radius * 2 + 20 }}>
      <svg width={radius * 2 + 50} height={radius * 2 + 20}>
        {/* Background Circle */}
        <circle
          fill={backgroundColor} 
      fillOpacity="0.8"
          r={radius}
          cx={radius + 10}
          cy={radius + 10}
        />
        {/* Border Circle */}
        <circle
          stroke={backgroundColor}
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${borderCircumference / 1} ${borderCircumference / 6}`} 
          strokeDashoffset={borderCircumference / 2} 
          r={radius + 8}
          cx={radius + 10}
          cy={radius + 10}
        />
      
      </svg>
      <div className="progress-label" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
        <div className="percentage">{percentage}%</div>
        <div className="label">{label}</div>
      </div>
    </div>
  );
};

export default CircularProgress;
