import React, { useState } from 'react';
import OrderChart from './OrderChart';
import Modal from '../Modal';
const Order = ({ orders }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="card shadow-sm mb-4 border-end-0 border-bottom-0 rounded-0">
      <div className="card-body">

        <div className='d-flex justify-content-between'>
          <div>
            <h5 className="card-title" style={{ fontSize: '14px' }}>Order</h5>

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
        <h2 style={{ fontSize: '20px', fontWeight: '500' }} className='mb-1'>{orders}</h2>
        <p className="text-muted " style={{ fontSize: '12px' }}>
          <span style={{ fontSize: '12px', color: '#F2383A', fontWeight: '600' }}> <i style={{ marginRight: "10px" }} class="fa">&#xf175;</i>2.1% </span> vs last week
        </p>


        <p className="text-muted small">Sales from 1-6 Dec, 2020</p>
        <OrderChart />
      </div>
      <Modal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Order;
