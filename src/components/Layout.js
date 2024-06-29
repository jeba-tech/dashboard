
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row w-100">
        <Sidebar />
        <main className="col-md-9 ms-sm-4 col-lg-9 px-md-1">
          
          <Header />
          <p className="navbar-brand col-md-3 col-lg-2 me-0 px-3 pt-5" style={{fontSize:'18px', fontWeight:'500', color:'#1F384C'}} href="#">
        Dashboard
      </p>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Layout;
