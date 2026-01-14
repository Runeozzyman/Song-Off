import React from 'react';
import {Link } from 'react-router-dom';
import './Home.css';


  const Home = () =>  {

	return (
	 <div className="Home-box">
  <div className="Content-box">
    <h2 className="Description-title">Think you've got good Taste? Prove it.</h2>

    <div className="input-row">
      <h3 className="Display-input">Choose a display name to get started:</h3>
      <input className="display-name" placeholder="Enter Display Name" />
      <Link to="/start">
      <button className="submit-btn">Submit</button>
      </Link>
    </div>
  </div>
</div>



	);
  }
  
  export default Home;
  