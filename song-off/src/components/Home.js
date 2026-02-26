import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './component-css/Home.css';
import { SlControlPlay } from "react-icons/sl";
import { getCurrentUser, getUsername } from '../services/userService';


  const Home = () =>  {

	return (

	<div className="Home-box">

    <div className="Content-box">
      
      <h2 className="Description-title">Think you've got good Taste? Prove it.
        <Link to = "/login">
        <button className = "play-button"><SlControlPlay  size={30}/></button>
        </Link>
      </h2>
      
    </div>

  </div>


	);
  }
  
  export default Home;
  