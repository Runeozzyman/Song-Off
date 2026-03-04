import React, { useEffect, useState} from 'react';
import { getUsername } from '../services/userService';
import User_Submission from '../components/User_Submission';
import Promoted_Song from '../components/Promoted_Song';
import "./page-css/Home_Page.css"
import Leaderboard from '../components/Leaderboard';


  const Home = () =>  {
    
	return (
    <div className='song-board'>

      <div className='leaderboard'>
        < Leaderboard/>
      </div>

      <div className='song-panel'>
          <User_Submission/>
          <Promoted_Song/>
      </div>

    </div>
	);
  }
  
  export default Home;
  