import React from 'react';
import './component-css/User_Submission.css';  
import { useNavigate } from 'react-router-dom';

  const User_Submission = () =>  {

  const navigate = useNavigate();

  async function handleSubmit() {
    navigate("/submit");
  }

	return (
	  <div className='submission-container'>

        <div className='submission-header'>
            <h1>Your Weekly Submission</h1>
        </div>

        <div className='submission-entry'>
            placeholder for entry
        </div>

        <div className='user-submission'>
            placeholder for submission
        </div>

        <button onClick={handleSubmit}>Submit your choice</button>

	  </div>
	);
  }
  
  export default User_Submission;
  