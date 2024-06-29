import React, { useState } from 'react';

import OrderTimeChart from './OrderTimeChart';
import Modal from '../Modal';
const OrderTime = () => {

  const data = [40, 32, 28];
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="card border-end-0 border-top-0 border-bottom-0 rounded-0">
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <div>
            <h5 className="card-title" style={{ fontSize: '14px' }}>Order Time</h5>

          </div>

          <button
            type="button"
            style={{ background: '#FBFCFE', border: '1px solid #DDE4F0', color: '#5A6ACF', fontSize: '12px' }}
            className="btn"
            onClick={handleShow}
          >
            View Report
          </button>
        </div>

        <p className="text-muted" style={{ fontSize: '13px' }}>From 1-6 Dec, 2020</p>
        <div style={{ width: '180px' }}>
          <OrderTimeChart data={data} />
        </div>
      </div>
      <Modal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default OrderTime;
