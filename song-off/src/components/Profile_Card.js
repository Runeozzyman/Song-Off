import React, { useEffect, useState, useRef } from 'react';
import { getCurrentUser, getUserProfile, updateProfile, updateUserAvatar, userLogout } from '../services/userService';
import { useNavigate } from 'react-router-dom';  
import useProtect from '../hooks/useProtect';
import './component-css/Profile_Card.css';
import { uploadProfilePicture } from '../services/storageService';

  const Profile_Card = () =>  {

	const navigate = useNavigate();
	const [username, setUsername] = useState(null);
	const [bio, setBio] = useState(null);
	const [favGenre, setFavGenre] = useState(null);
	const [favSong, setFavSong] = useState(null)
	const [isEditing, setIsEditing] = useState(false);
	const [pfp, setPfp] = useState("/Default_pfp.png");

	const fileInputRef = useRef(null);

	async function handleProfilePictureChange(e){
		const file = e.target.files[0];
		if (!file) return;

		const avatarURL = await uploadProfilePicture(file);
		await updateUserAvatar(avatarURL);

		setPfp(avatarURL);

		e.target.value = null;
	}

	async function handleLogout(){
		try{
			await userLogout();
			await getCurrentUser();
			navigate("/")
		} catch (err){
			console.error(err);
		}
	}

	async function handleSave(){ 

		await updateProfile({
			bio: bio,
			fav_genre: favGenre,
			fav_song: favSong
		});

		

		setIsEditing(false);
	}

	useEffect(() =>{
		async function getProfileInfo() {

			const uname = sessionStorage.getItem("username")
			setUsername(uname)

			const data = await getUserProfile();
			console.log("DATA: ", data);
			
			setBio(data.bio);
			setFavGenre(data.fav_genre);
			setFavSong(data.fav_song);
			setPfp(data.pfp_url || pfp);
		}
		getProfileInfo();
	}, [])

	const checking = useProtect();
	if(!checking) return null;

	return (
	<div className='profile'>

		<div className='profile-left'>
			<img 
			className="profile-pfp"
			src={pfp}
			alt="profile"
			onClick={() => fileInputRef.current.click()}
			/>

			<input
			type="file"
			accept="image/*"
			ref={fileInputRef}
			style={{ display: "none" }}
			onChange={handleProfilePictureChange}
			/>

			<h3>Bio</h3>
			<div className='profile-bio'>

			{isEditing ? (
				<textarea
				maxLength={200}
				value={bio}
				onChange={(e) => setBio(e.target.value)}
				/>
			) : (
				<p>{bio}</p>
			)}

			</div>
		</div>

		<div className='profile-right'>

			<div className='profile-header'>
			<h1>{username}</h1>
			</div>

			<div className='profile-info'>
			<p>
				Favourite Genre:{" "}
				{isEditing ? (
					<input
					value={favGenre}
					onChange={(e) => setFavGenre(e.target.value)}
					/>
				) : (
					favGenre
				)}
			</p>
			
			<p>	
				Favourite Song: {" "}
				{isEditing ? (
					<input
					value={favSong}
					onChange={(e) => setFavSong(e.target.value)}
				    />
				) : (
					favSong
				)}
			</p>
			</div>

			<div className='buttons'>

			{isEditing ? (
			<>
				<button onClick={handleSave}>Save</button>
				<button onClick={() => setIsEditing(false)}>Cancel</button>
			</>
			) : (
			<>
				<button onClick={() => setIsEditing(true)}>Edit Profile</button>
				<button onClick={handleLogout}>Logout</button>
			</>
			)}

			</div>

		</div>

	</div>
	  
	);
  }
  
  export default Profile_Card;
  