import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './component-css/Room_Creation.css'

  const Room_creation = () =>  {

    const navigate = useNavigate();
    
    const [roomName, setRoomName] = useState('');
    const [players, setPlayers] = useState(2);
    const [rounds, setRounds] = useState(3);

    function parseRoomInfo(){
    
      const numPlayers = Number(players);
      const numRounds = Number(rounds);
      
      console.log(numPlayers);
      console.log(numRounds);

      if (numPlayers > 4 || numPlayers < 2){
        alert("Number of players must be between 2 and 4");
        return;
      }

      if (numRounds > 10 || numRounds < 3){
        alert("Number of rounds must be between 3 and 10");
        return;
      }

    }


    //TODO: Review React input best practices

	return (
	  <div className = "new-room-info">
        
        <h1>New Room</h1>
        <input 
          type = "text" 
          placeholder = "Room Name" 
          value = {roomName}
          onChange = {(e) => setRoomName(e.targetValue)}
        />

        <h1>Number of Players</h1>
        <input type = "number" 
          min = {2} 
          max = {4} 
          placeholder='2' 
          value = {players}
          onChange={(e) => setPlayers(e.targetValue)}
         />

        <h1>Number of Rounds</h1>
        <input 
          type = "number" 
          min = {1} 
          max = {10} 
          placeholder='1' 
          value = {rounds}
          onChange = {(e) => setRounds(e.targetValue)}
        />

        <button onClick = {parseRoomInfo}>Create Room</button>

	  </div>
	);
  }
  
  export default Room_creation;
  