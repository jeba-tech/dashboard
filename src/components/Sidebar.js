
import React from 'react';

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" style={{ backgroundColor:'#F1F2F7', color:'#273240' }} className="col-md-2 w-auto d-md-block sidebar collapse">
  <h6 className='ms-3 p-3 pt-4 me-3 pb-2 d-flex justify-center fw-bold border-bottom' style={{ color:'#5A67BA', fontSize:'12px' }}>
    <i style={{ width:'24px', height:'24px' }} class="material-icons">&#xe56c;</i>
    <p className='pt-1 ps-2'>GOODFOOD</p>
  </h6>
  <div className="p-3">
    <h6 className='ms-3 pt-4' style={{ opacity:'50%' }}>MENU</h6>
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active rounded" style={{ color:'#707FDD' , backgroundColor:'rgba(112, 127, 221, 0.1)'}} aria-current="page" href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf080;</i>
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ color:'black', opacity:'50%' }} href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf07a;</i>
          <span>Food Order</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ color:'black', opacity:'50%' }} href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf15c;</i>
          <span>Manage Menu</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ color:'black', opacity:'50%' }} href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf1d7;</i>
          <span>Customer Review</span>
        </a>
      </li>
    </ul>

    <h6 className='ms-3 mt-3' style={{ opacity:'50%' }}>Others</h6>
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" style={{ color:'black', opacity:'50%' }} href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf013;</i>
          Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ color:'black', opacity:'50%' }} href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf2c3;</i>
          Payment
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ color:'black', opacity:'50%' }} href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf007;</i>
          Accounts
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{ color:'black', opacity:'50%' }} href="#">
          <i style={{ fontSize:'20px', marginRight:"10px" }} className="fa">&#xf05a;</i>
          Help
        </a>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Sidebar;
