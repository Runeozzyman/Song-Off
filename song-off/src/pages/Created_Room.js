import React from 'react';
import { useLocation } from 'react-router-dom';
  
  const Created_Room = () =>  {
    console.log("this is the new room");

    const location = useLocation();

	return (
	  <div>
        Newly created room
	  </div>
	);
  }
  
  export default Created_Room;
  