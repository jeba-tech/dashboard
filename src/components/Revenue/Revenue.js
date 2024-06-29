
import React, { useState } from 'react';
import RevenueChart from './RevenueChart';
import Modal from '../Modal';
const Revenue = ({ revenue }) => {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  return (
    <>
      <div className="card border-0  rounded-0 mb-4 ">
        <div className="card-body ">

          <div className='d-flex justify-content-between'>
            <div>
              <h5 className="card-title " style={{ fontSize: '14px' }}>Revenue</h5>

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
          <p className="card-text mb-1" style={{ fontSize: '20px', fontWeight: '500' }}>IDR {revenue.toLocaleString()}000</p>
          <p className="text-muted " style={{ fontSize: '12px' }}>
            <span style={{ fontSize: '12px', color: '#149D52', fontWeight: '600' }}> <i style={{ marginRight: "10px" }} class="fa">&#xf176;</i>2.1% </span> vs last week
          </p>
          <p className="text-muted small">Sales from 1-12 Dec, 2020</p>
          <div className='w-100 '>
            <RevenueChart />
          </div>

        </div>
      </div>
      <Modal show={showModal} handleClose={handleClose} />
    </>




  );
};

export default Revenue;
