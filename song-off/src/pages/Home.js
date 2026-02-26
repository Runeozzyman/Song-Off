import React from 'react';
import { getUsername } from '../services/userService';

async function getUserDataOnStart(params) {
    const uname = await getUsername();
    console.log(uname);
    return uname;
  }

  const Home = () =>  {
	return (
	  <div>
        home page
	  </div>
	);
  }
  
  export default Home;
  