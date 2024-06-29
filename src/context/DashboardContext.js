
import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [state, setState] = useState({
    revenue: 7.852,
    orders: 2.568,
   
    mostOrderedFood: [
      { image: 'salad.jpg', name: 'Fresh Salad Bowl', price: 45000 },
      {  image: 'noodles.jpeg', name: 'Chicken Noodles', price: 75000 },
      { image: 'smoothies.jpeg', name: 'Smoothie Fruits', price: 30000 },
      { image: 'wings.jpg', name: 'Hot Chicken Wings', price: 45000 },
    ],
   
  });

  return (
    <DashboardContext.Provider value={[state, setState]}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
