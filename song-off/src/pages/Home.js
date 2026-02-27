import React, { useEffect, useState} from 'react';
import { getUsername } from '../services/userService';
import User_Submission from '../components/User_Submission';
import Promoted_Song from '../components/Promoted_Song';
import "./page-css/Home_Page.css"

async function getUserDataOnStart(params) {
    const uname = await getUsername();
    console.log(uname);
    return uname;
  }

  const Home = () =>  {
    
	return (
	  <div className='home-panel'>
        <User_Submission/>
        <Promoted_Song/>
	  </div>
	);
  }
  
  export default Home;
  