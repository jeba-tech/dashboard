
import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Revenue from './Revenue/Revenue';
import OrderTime from './OrderTime/OrderTime.js';
import Rating from './Rating/Rating.js';
import MostOrderedFood from './OrderedFood/MostOrderedFood.js';
import Order from './Order/Order.js';

const Dashboard = () => {
  const [state] = useContext(DashboardContext);

  return (
    <div className="row g-0  ">
      <div className="col-md-8">
        <Revenue revenue={state.revenue} />
      </div>
      <div className="col-md-4">
        <OrderTime />
      </div>
      <div className="col-md-4">
        <Rating />
      </div>
      <div className="col-md-4">
        <MostOrderedFood mostOrderedFood={state.mostOrderedFood} />
      </div>
      <div className="col-md-4">
        <Order orders={state.orders} />
      </div>
    </div>
  );
};

export default Dashboard;
