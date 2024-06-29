
import React from 'react';
import CircularProgress from './CircularProgress';
import './Circle.css';

const Rating = () => {



  return (
    <div className="card border-start-0  border-bottom-0 rounded-0" >
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '14px' }}>Your Rating</h5>
        <div >

          <p style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="chart-container" style={{height:'270px'}}>
            <div className="chart-item" style={{ zIndex: 1 }}>
              <CircularProgress id="1" percentage={75} label="Hygiene"  backgroundColor="#6463D6" radius={50} />
            </div>
            <div className="chart-item" style={{ zIndex: 3 }}>
              <CircularProgress id="2" percentage={90} label="Food Taste"  backgroundColor="#F99C30" radius={70} />
            </div>
            <div className="chart-item" style={{ zIndex: 2 }}>
              <CircularProgress id="3" percentage={85} label="Packaging"  backgroundColor="#2FBFDE" radius={55} />
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Rating;
