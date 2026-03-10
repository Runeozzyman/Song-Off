import React, { useEffect, useState} from 'react';
import { getUsername } from '../services/userService';
import User_Submission from '../components/User_Submission';
import Promoted_Song from '../components/Promoted_Song';
import "./page-css/Home_Page.css"
import Leaderboard from '../components/Leaderboard';
import useProtect from '../hooks/useProtect';


  const Home = () =>  {
    
    const checking = useProtect();
    if(!checking) return null;

	return (
    <div className='song-board'>

      <div className='leaderboard-panel'>
        < Leaderboard/>
      </div>

      <div className='song-panel'>
          <User_Submission/>
          <div className='promoted-song-wrapper'>
            <Promoted_Song/>
          </div>
          
      </div>

    </div>
	);
  }
  
  export default Home;
  