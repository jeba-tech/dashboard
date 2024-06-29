import React from 'react';
import burger from '../../src/assets/images/burger.jpg';
const Header = () => {
  return (
    <nav className=" navbar navbar-light  flex-md-nowrap p-2 border-bottom">
 <form style={{ width: '500px' }} className="d-flex">
 <div className="input-group pb-2 pt-1">
 
  <input
    className="form-control me-2 text-muted border-0"
    style={{backgroundColor:'#F6F6FB'}}
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
   <div className="input-group-prepend">
    <span className="input-group-text border-0 bg-transparent" id="basic-addon1" style={{backgroundColor: '#F6F6FB'}}>
      <i className="fa fa-search text-muted"></i>
    </span>
  </div>
</div>

      </form>
      <div className="dropdown d-flex justify-content-center align-items-center">
   
      <div className="image-container " style={{ position: 'relative', width: '35px', height: '35px', display: 'inline-block' }}>
  <div className="circle-background" style={{ 
    backgroundColor: '#FFE6CC', 
    borderRadius: '50%', 
    width: '100%', 
    height: '100%',
    position: 'absolute', 
    top: '0', 
    left: '0'
  }}></div>
  <img src={burger} alt="Logo" className="rounded-circle " style={{ 
    width: '25px', 
    height: '25px', 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)'
  }} />
</div>


  <button className="btn btn-transparent dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'transparent', border: 'none' }}>
          Delicious Burger  
        </button>

        <div className='pt-1' style={{ position: 'relative', display: 'inline-block' }}>
  <i className="fa">&#xf0f3;</i>
  <span className="notification-dot" style={{ 
    position: 'absolute',
    top: '30',
    right: '0',
    width: '10px',
    height: '10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    border: '2px solid white',
    display: 'inline-block'
  }}></span>
</div>


      
        <ul className="dropdown-menu border-0 ms-5 shadow" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">  <i className="fa">&#xf0f3;</i> Option</a></li>
          <li><a className="dropdown-item" href="#"><i className="fa">&#xf0f3;</i> Option2</a></li>
          <li><a className="dropdown-item" href="#"><i className="fa">&#xf0f3;</i> Option3</a></li>
          <li><a className="dropdown-item" href="#"><i className="fa">&#xf0f3;</i> Option4</a></li>
          <li><a className="dropdown-item" href="#"><i className="fa">&#xf0f3;</i> Option5</a></li>
          <li><a className="dropdown-item" href="#"><i className="fa">&#xf0f3;</i> Option6</a></li>
          <li><a className="dropdown-item" href="#"><i className="fa">&#xf0f3;</i> Option7</a></li>
        </ul>
      </div>

    
    </nav>
  );
};

export default Header;
