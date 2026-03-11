import React from 'react';
import { getCurrentUser, userLogout } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import useProtect from '../hooks/useProtect';
import Profile_Card from '../components/Profile_Card';
  
  const Profile = () =>  {

	return (
	  <div>
        <Profile_Card />
	  </div>
	);
  }
  
  export default Profile;
  