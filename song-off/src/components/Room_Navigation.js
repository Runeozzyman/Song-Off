import React from 'react';
import './component-css/Room_Navigation.css'
import { Link } from 'react-router-dom';
import { useNavigate }	from 'react-router-dom';
  



  const Room_Navigation = () =>  {

	const navigate = useNavigate();

	//asserts roomcode has been entered || TODO: add backend logic to verify with DB that room exists
	function queryRoomCode(){
		const roomCode = document.querySelector('.room-code-input').value;

		if(roomCode == null || roomCode == ""){
			alert("Please enter a room code to join a room.");
			return;
		}

		navigate('/existing-room', {state: {roomCode: roomCode}});
	}



	return (
	  <div className = "button-group">

		<Link to ='/new-room' className = "nav-button create-button">
		<span>Create Room</span>
		</Link>

		<input type="text" placeholder = "Room Code" className = "room-code-input"></input>
		<button className="nav-button join-button" onClick={queryRoomCode}><span>Join Room</span></button>
		
	  </div>
	);
  }
  
  export default Room_Navigation;
  