import React from 'react';
import Home from '../components/Home';
import App_Description from '../components/App_Description';  

  const Landing = () =>  {
	return (
	  <div className='landing-container'>
        <App_Description />
        <Home />
	  </div>
	);
  }
  
  export default Landing;
  