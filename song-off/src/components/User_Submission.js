import React, { useEffect, useState } from 'react';
import './component-css/User_Submission.css';  
import { useNavigate } from 'react-router-dom';
import { getSubmittedSong } from '../services/songService.js';
import Spotify_Player from './Spotify_Player';
import { FaArrowRight } from "react-icons/fa";

  const User_Submission = () =>  {

  const [userSubmission, setUserSubmission] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit() {
    navigate("/submit");
  }

  useEffect(() =>{
    async function fetchUserSubmission() {
      try{
        const submittedSong = await getSubmittedSong();
        setUserSubmission(submittedSong);
      }catch(err){
        setUserSubmission(null);
      }
    }
    fetchUserSubmission();

  }, []);

	return (
	  <div className='submission-container'>

        <div className='submission-header'>
            <h1>Your Weekly Submission</h1>
        </div>
        
        {userSubmission &&(
          <div className="submission-song-card">
          <Spotify_Player trackID={userSubmission}/>
          </div>
        )}
        
        {!userSubmission &&(
        <div className='submission-null'>
          <h2>Submit this weeks choice!</h2>
          <button className="nav-submit-btn" onClick={handleSubmit}><FaArrowRight size={25}/></button>
        </div>
        )}
             
	  </div>
	);
  }
  
  export default User_Submission;
  