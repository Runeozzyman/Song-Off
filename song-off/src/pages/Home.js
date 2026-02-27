import React from 'react';
import { getUsername } from '../services/userService';
import User_Submission from '../components/User_Submission';

async function getUserDataOnStart(params) {
    const uname = await getUsername();
    console.log(uname);
    return uname;
  }

  const Home = () =>  {
	return (
	  <div>
        <User_Submission/>
	  </div>
	);
  }
  
  export default Home;
  