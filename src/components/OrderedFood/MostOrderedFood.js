
import React from 'react';


import noodles from '../../assets/images/noodles.jpeg';
import salad from '../../assets/images/salad.jpg';
import smoothies from '../../assets/images/smoothies.jpeg';
import wings from '../../assets/images/wings.jpg';

const MostOrderedFood = ({ mostOrderedFood }) => {
  const imageMap = {
    'noodles.jpeg': noodles,
    'salad.jpg': salad,
    'smoothies.jpeg': smoothies,
    'wings.jpg': wings,
   
  };
console.log('mostOrderedFood', mostOrderedFood)
  return (
    <div className="card border-start-0 border-end-0 border-bottom-0 rounded-0">
    <div className="card-body">
      <h5 className="card-title" style={{fontSize: '14px'}}>Most Ordered Food</h5>
      <p style={{fontSize: '12px'}} className="pb-3">Adipiscing elit, sed do eiusmod tempor</p>
      <ul className="list-group list-group-flush" style={{fontSize: '12px'}}>
        {mostOrderedFood.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div className="d-flex align-items-center">
              <img 
                src={imageMap[item.image]} 
                alt={item.name} 
                className="rounded-circle me-3 shadow-sm" 
                style={{ width: 28, height: 28 }}
              />
              <div className="d-flex justify-content-between flex-grow-1">
                <span>{item.name}</span>
                <span><small>IDR {item.price}</small></span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
};

export default MostOrderedFood;
