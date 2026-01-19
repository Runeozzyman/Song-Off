import React from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';

  
  const Boxes_Layout = () =>  {
	return (
	  <div className = "Boxes-wrapper">
        <Outlet />
	  </div>
	);
  }
  
  export default Boxes_Layout;
  