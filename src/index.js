// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DashboardProvider from './context/DashboardContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <DashboardProvider>
    <App />
  </DashboardProvider>,
  document.getElementById('root')
);
