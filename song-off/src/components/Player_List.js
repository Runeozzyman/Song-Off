import React from 'react';
import { useParams } from 'react-router-dom';
  
  const Player_List = () =>  {

    let channel = null
    const { roomCode } = useParams();



    function renderPlayers(players){

        //re-render list with li from players returned from DB

    }
 

	return (
	  <div>
        <ul id="playersList"></ul>
	  </div>
	);
  }
  
  export default Player_List;
  