import React from 'react';
import './component-css/Room_Navigation.css'
import { Link } from 'react-router-dom';
  
  const Room_Navigation = () =>  {
	return (
	  <div className = "button-group">

		<Link to ='/new-room' className = "nav-button create-button">
		<span>Create Room</span>
		</Link>

		<Link to = '/existing-room' className = "nav-button join-button">
		<span>Join Room</span>
		</Link>

	  </div>
	);
  }
  
  export default Room_Navigation;
  