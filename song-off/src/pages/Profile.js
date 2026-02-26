import React from 'react';
import { getCurrentUser, userLogout } from '../services/userService';
import { useNavigate } from 'react-router-dom';
  
  const Profile = () =>  {

    const navigate = useNavigate();

    async function handleLogout() {
        try{
            await userLogout();
            await getCurrentUser();
            navigate("/")
        }
        catch (err) {
            console.error(err);
        }
    }

	return (
	  <div>
        <h1>Profile Page</h1>
            <button onClick={handleLogout}>Logout</button>
        
	  </div>
	);
  }
  
  export default Profile;
  