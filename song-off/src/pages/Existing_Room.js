import React from 'react';
import { useLocation } from 'react-router-dom';

  const Existing_Room = () =>  {

  const location = useLocation();
  const { roomCode } = location.state;
  


	return (
	  <div>
        <h3>Existing Room: {roomCode}</h3>
	  </div>
	);
  }
  
  export default Existing_Room;
  