import React, { useEffect, useState } from 'react';
import { getCurrentUser, getUserProfile, userLogout } from '../services/userService';
import { useNavigate } from 'react-router-dom';  
import useProtect from '../hooks/useProtect';
import './component-css/Profile_Card.css';

  const Profile_Card = () =>  {

	const navigate = useNavigate();
	const [username, setUsername] = useState(null);
	const [bio, setBio] = useState(null);
	const [favGenre, setFavGenre] = useState(null);

	async function handleLogout(){
		try{
			await userLogout();
			await getCurrentUser();
			navigate("/")
		} catch (err){
			console.error(err);
		}
	}

	useEffect(() =>{
		async function getProfileInfo(params) {

			const uname = sessionStorage.getItem("username")
			setUsername(uname)

			const data = await getUserProfile();
			console.log("DATA: ", data);
			
			setBio(data.bio);
			setFavGenre(data.fav_genre);
		}
		getProfileInfo();
	}, [])

	const checking = useProtect();
	if(!checking) return null;

	return (
	  <div className='profile'>
		
		<div className='profile-header'>
			<h1>{username}</h1>
		</div>

		<p className='profile-genre'>Favourite Genre: {favGenre}</p>

		<p className='profile-info'>
		<h3>Bio</h3>
		{bio}
		</p>

		<button>Edit Profile</button>
		<button onClick={handleLogout}>Logout</button>
	  </div>
	  
	);
  }
  
  export default Profile_Card;
  